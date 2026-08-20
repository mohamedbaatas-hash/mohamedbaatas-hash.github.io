import { useState, useMemo, useCallback } from 'react';
import { EPANET_NETWORK_CONFIG, HYDRAULIC_SCENARIOS } from '../data/epanetData';
import { solveHydraulicNetwork } from '../utils/hydraulicEngine';

export function useEpanetEngine() {
  const [scenarioId, setScenarioId] = useState("SCENARIO_BASE");
  const [pipeThrottles, setPipeThrottles] = useState({});
  const [pumpActive, setPumpActive] = useState(true);
  const [burstPipes, setBurstPipes] = useState([]);
  const [selectedElementId, setSelectedElementId] = useState("J-4");

  const currentScenario = useMemo(() => {
    return HYDRAULIC_SCENARIOS.find(s => s.id === scenarioId) || HYDRAULIC_SCENARIOS[0];
  }, [scenarioId]);

  // Combine scenario defaults with active user overrides
  const effectiveBurstPipes = useMemo(() => {
    const combined = new Set([...currentScenario.burstPipes, ...burstPipes]);
    return Array.from(combined);
  }, [currentScenario, burstPipes]);

  // Solve network
  const solvedNetwork = useMemo(() => {
    return solveHydraulicNetwork(
      EPANET_NETWORK_CONFIG,
      currentScenario.demandMultiplier,
      currentScenario.demandOverrides,
      pipeThrottles,
      pumpActive,
      effectiveBurstPipes
    );
  }, [currentScenario, pipeThrottles, pumpActive, effectiveBurstPipes]);

  const selectedNode = useMemo(() => {
    return solvedNetwork.nodes.find(n => n.id === selectedElementId) || null;
  }, [solvedNetwork.nodes, selectedElementId]);

  const selectedLink = useMemo(() => {
    return solvedNetwork.links.find(l => l.id === selectedElementId) || null;
  }, [solvedNetwork.links, selectedElementId]);

  const setScenario = useCallback((id) => {
    setScenarioId(id);
  }, []);

  const selectElement = useCallback((id) => {
    setSelectedElementId(id);
  }, []);

  const setPipeThrottle = useCallback((pipeId, throttlePct) => {
    setPipeThrottles(prev => ({
      ...prev,
      [pipeId]: Math.max(0, Math.min(100, Number(throttlePct)))
    }));
  }, []);

  const toggleBoosterPump = useCallback(() => {
    setPumpActive(prev => !prev);
  }, []);

  const togglePipeBurst = useCallback((pipeId) => {
    setBurstPipes(prev => {
      if (prev.includes(pipeId)) {
        return prev.filter(id => id !== pipeId);
      }
      return [...prev, pipeId];
    });
  }, []);

  const resetNetwork = useCallback(() => {
    setScenarioId("SCENARIO_BASE");
    setPipeThrottles({});
    setPumpActive(true);
    setBurstPipes([]);
    setSelectedElementId("J-4");
  }, []);

  return {
    scenarios: HYDRAULIC_SCENARIOS,
    currentScenario,
    solvedNetwork,
    selectedNode,
    selectedLink,
    selectedElementId,
    pumpActive,
    pipeThrottles,
    burstPipes: effectiveBurstPipes,
    setScenario,
    selectElement,
    setPipeThrottle,
    toggleBoosterPump,
    togglePipeBurst,
    resetNetwork
  };
}
