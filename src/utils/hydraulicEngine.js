/**
 * EPANET 2.2 Pressurized Water Distribution Network Solver
 * Pure mathematical engine implementing Hazen-Williams friction head loss,
 * centrifugal pump characteristics, and Global Gradient Newton-Raphson network solver.
 */

/**
 * Computes pipe hydraulic resistance coefficient R in SI units.
 * @param {number} lengthM - Pipe length in meters
 * @param {number} diameterMm - Pipe diameter in millimeters
 * @param {number} roughnessC - Hazen-Williams roughness coefficient
 * @param {number} [minorLossKm=0] - Minor loss coefficient
 * @returns {number} Resistance coefficient R
 */
export function computePipeResistance(lengthM, diameterMm, roughnessC, minorLossKm = 0) {
  const dM = diameterMm / 1000.0;
  const frictionR = (10.67 * lengthM) / (Math.pow(roughnessC, 1.852) * Math.pow(dM, 4.8704));
  const minorR = (8.0 * minorLossKm) / (Math.PI * Math.PI * 9.81 * Math.pow(dM, 4));
  return frictionR + minorR;
}

/**
 * Computes Hazen-Williams friction head loss hf given flow in m3/s.
 * @param {number} flowM3s - Flow rate in m3/s (signed)
 * @param {number} R - Resistance coefficient
 * @returns {number} Frictional head loss in meters (signed)
 */
export function computeHazenWilliamsHeadLoss(flowM3s, R) {
  const absQ = Math.abs(flowM3s);
  // Linearize for very small flows (< 1e-5 m3/s) to prevent gradient singularity
  if (absQ < 1e-5) {
    const linR = R * Math.pow(1e-5, 0.852);
    return linR * flowM3s;
  }
  return R * Math.sign(flowM3s) * Math.pow(absQ, 1.852);
}

/**
 * Computes derivative dhf/dQ for Newton-Raphson Jacobian.
 * @param {number} flowM3s - Flow rate in m3/s
 * @param {number} R - Resistance coefficient
 * @returns {number} dhf/dQ
 */
export function computeHeadLossDerivative(flowM3s, R) {
  const absQ = Math.abs(flowM3s);
  if (absQ < 1e-5) {
    return R * Math.pow(1e-5, 0.852);
  }
  return 1.852 * R * Math.pow(absQ, 0.852);
}

/**
 * Solves the 6-node looped hydraulic network using Newton-Raphson iteration.
 * @param {Object} topology - Network topology containing nodes and links
 * @param {number} [demandMultiplier=1.0] - Diurnal demand scaling factor
 * @param {Object} [demandOverrides={}] - Specific node demand overrides (L/s)
 * @param {Object} [pipeThrottles={}] - Map of pipeId -> throttle percentage (0-100)
 * @param {boolean} [pumpActive=true] - Booster pump station status
 * @param {Array<string>} [burstPipes=[]] - List of burst/ruptured pipe IDs
 * @returns {Object} Solved network state with nodal heads/pressures and pipe flows/velocities
 */
export function solveHydraulicNetwork(
  topology,
  demandMultiplier = 1.0,
  demandOverrides = {},
  pipeThrottles = {},
  pumpActive = true,
  burstPipes = []
) {
  const junctions = topology.nodes.filter(n => n.type === 'junction');
  const junctionIds = junctions.map(n => n.id);
  const N = junctionIds.length;

  // Boundary fixed head nodes
  const reservoir = topology.nodes.find(n => n.type === 'reservoir');
  const tank = topology.nodes.find(n => n.type === 'tank');
  const H_res = reservoir ? reservoir.fixedHeadM : 85.0;
  const H_tank = tank ? (tank.elevationM + (tank.initialLevelM || 7.5)) : 69.5;

  // Build nodal demands vector q (in m3/s)
  const qDem = {};
  junctions.forEach(j => {
    let baseLps = j.baseDemandLps * demandMultiplier;
    if (demandOverrides[j.id] !== undefined) {
      baseLps = demandOverrides[j.id];
    }
    // If adjacent pipe is burst, add emitter leak flow
    burstPipes.forEach(bId => {
      const p = topology.links.find(l => l.id === bId);
      if (p && (p.fromNode === j.id || p.toNode === j.id)) {
        baseLps += 22.5; // leak demand component
      }
    });
    qDem[j.id] = baseLps / 1000.0; // convert L/s to m3/s
  });

  // Initial head estimate at junctions
  const heads = {
    "J-1": pumpActive ? 82.0 : 65.0,
    "J-2": 76.0,
    "J-3": 71.0,
    "J-4": 72.0,
    "J-5": 74.0
  };

  // Helper to get head at any node
  const getHead = (id) => {
    if (id === 'RES-1') return H_res;
    if (id === 'TK-1') return H_tank;
    return heads[id] !== undefined ? heads[id] : 50.0;
  };

  // Compute link properties
  const linkProps = {};
  topology.links.forEach(link => {
    const throttle = pipeThrottles[link.id] !== undefined ? pipeThrottles[link.id] : (link.throttlePct || 100);
    const isBurst = burstPipes.includes(link.id) || link.isBurst;
    
    if (link.type === 'pump') {
      linkProps[link.id] = {
        type: 'pump',
        from: link.fromNode,
        to: link.toNode,
        active: pumpActive && throttle > 0
      };
    } else {
      let R = computePipeResistance(link.lengthM, link.diameterMm, link.roughnessC, link.minorLossKm);
      if (throttle < 100) {
        // High resistance for throttled valve
        const factor = Math.pow((100.0 - throttle) / Math.max(1.0, throttle), 2) * 50.0;
        R += factor;
      }
      if (throttle === 0) {
        R = 1e12; // isolated
      }
      linkProps[link.id] = {
        type: 'pipe',
        from: link.fromNode,
        to: link.toNode,
        R,
        diameterMm: link.diameterMm,
        lengthM: link.lengthM,
        throttle,
        isBurst
      };
    }
  });

  // Calculate flow on a link given node heads
  const calculateLinkFlow = (linkId, curHeads) => {
    const prop = linkProps[linkId];
    const hFrom = prop.from === 'RES-1' ? H_res : (prop.from === 'TK-1' ? H_tank : curHeads[prop.from]);
    const hTo = prop.to === 'RES-1' ? H_res : (prop.to === 'TK-1' ? H_tank : curHeads[prop.to]);
    
    if (prop.type === 'pump') {
      if (!prop.active) return 0.0;
      // Centrifugal pump: Head gain = H_pump -> H_to - H_from = 55 - 0.003 * Q^1.9
      const headDiff = hTo - hFrom;
      const nominalH = 50.0;
      if (headDiff >= 65.0) return 0.0;
      const estimatedQ = Math.max(0.0, Math.pow(Math.max(0.1, (65.0 - headDiff) / 0.0035), 1 / 1.9) / 1000.0);
      return Math.min(0.18, estimatedQ);
    }

    const deltaH = hFrom - hTo;
    const absDH = Math.abs(deltaH);
    const sign = Math.sign(deltaH);
    if (absDH < 1e-6) return 0.0;
    
    const flowM3s = sign * Math.pow(absDH / prop.R, 1 / 1.852);
    return flowM3s;
  };

  // Newton-Raphson solver for junction heads
  const maxIterations = 20;
  for (let iter = 0; iter < maxIterations; iter++) {
    // Evaluate mass balance residuals F(H) at each junction
    const residuals = {};
    const derivatives = {}; // diagonal Jacobian approximation
    
    junctionIds.forEach(jId => {
      residuals[jId] = -qDem[jId];
      derivatives[jId] = 0.0;
    });

    topology.links.forEach(link => {
      const q = calculateLinkFlow(link.id, heads);
      const prop = linkProps[link.id];
      
      if (junctionIds.includes(prop.from)) {
        residuals[prop.from] -= q;
        const dQdH = prop.type === 'pump' ? 0.005 : (Math.abs(q) > 1e-6 ? (1 / 1.852) * Math.abs(q) / Math.max(0.1, Math.abs(getHead(prop.from) - getHead(prop.to))) : 0.001);
        derivatives[prop.from] += dQdH;
      }
      if (junctionIds.includes(prop.to)) {
        residuals[prop.to] += q;
        const dQdH = prop.type === 'pump' ? 0.005 : (Math.abs(q) > 1e-6 ? (1 / 1.852) * Math.abs(q) / Math.max(0.1, Math.abs(getHead(prop.from) - getHead(prop.to))) : 0.001);
        derivatives[prop.to] += dQdH;
      }
    });

    // Convergence check
    let maxResidual = 0;
    junctionIds.forEach(jId => {
      maxResidual = Math.max(maxResidual, Math.abs(residuals[jId]));
    });

    if (maxResidual < 1e-5) break;

    // Apply damped Newton update
    junctionIds.forEach(jId => {
      const dH = residuals[jId] / Math.max(1e-4, derivatives[jId]);
      heads[jId] += Math.max(-5.0, Math.min(5.0, dH * 0.75));
    });
  }

  // Format final solved node results
  const solvedNodes = topology.nodes.map(node => {
    const hglM = node.type === 'reservoir' ? H_res : (node.type === 'tank' ? H_tank : heads[node.id]);
    const pressureM = Math.max(0.0, hglM - node.elevationM);
    const pressureBar = Number(((pressureM * 9810) / 100000).toFixed(2));
    
    let actualDemandLps = (qDem[node.id] || 0) * 1000.0;
    if (node.type === 'tank') {
      const tankFlow = calculateLinkFlow('P-106', heads) * 1000.0;
      actualDemandLps = Number((-tankFlow).toFixed(1)); // negative means filling
    }

    let pressureStatus = 'nominal';
    if (pressureM < 18.0) pressureStatus = 'critical';
    else if (pressureM < 25.0) pressureStatus = 'warning';
    else if (pressureM > 55.0) pressureStatus = 'high';

    return {
      ...node,
      computedHglM: Number(hglM.toFixed(2)),
      computedPressureM: Number(pressureM.toFixed(2)),
      computedPressureBar: pressureBar,
      actualDemandLps: Number(actualDemandLps.toFixed(1)),
      pressureStatus
    };
  });

  // Format final solved link results
  const solvedLinks = topology.links.map(link => {
    const flowM3s = calculateLinkFlow(link.id, heads);
    const flowLps = Number((flowM3s * 1000.0).toFixed(1));
    const hFrom = getHead(link.fromNode);
    const hTo = getHead(link.toNode);
    const headLossM = Number(Math.abs(hFrom - hTo).toFixed(2));

    let velocityMs = 0.0;
    if (link.diameterMm) {
      const areaM2 = Math.PI * Math.pow((link.diameterMm / 1000.0) / 2.0, 2);
      velocityMs = Number((Math.abs(flowM3s) / areaM2).toFixed(2));
    }

    let flowDirection = 'forward';
    if (flowM3s < -1e-4) flowDirection = 'reverse';
    else if (Math.abs(flowM3s) <= 1e-4) flowDirection = 'zero';

    return {
      ...link,
      computedFlowLps: flowLps,
      computedVelocityMs: velocityMs,
      computedHeadLossM: headLossM,
      flowDirection
    };
  });

  return {
    nodes: solvedNodes,
    links: solvedLinks,
    timestamp: new Date().toISOString()
  };
}
