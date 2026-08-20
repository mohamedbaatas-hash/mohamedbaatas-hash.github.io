import React from 'react';

export function EpanetNetworkCanvas({ solvedNetwork, selectedElementId, onSelectElement }) {
  const { nodes, links } = solvedNetwork;

  const nodeMap = {};
  nodes.forEach(n => { nodeMap[n.id] = n; });

  const getPressureColor = (pressureM) => {
    if (pressureM < 18.0) return '#EF4444'; // Red (Danger / Low)
    if (pressureM < 25.0) return '#F59E0B'; // Amber (Warning)
    if (pressureM > 52.0) return '#3B82F6'; // Blue (High)
    return '#10B981'; // Emerald (Nominal 25-52m)
  };

  const getVelocityColor = (velocityMs, isBurst) => {
    if (isBurst) return '#EF4444';
    if (velocityMs > 2.0) return '#F59E0B';
    if (velocityMs < 0.3) return '#64748B';
    return '#06B6D4'; // Cyan (Ideal 0.3 - 2.0 m/s)
  };

  return (
    <div className="w-full bg-surface-sunken border border-border-slate rounded-lg p-4 overflow-x-auto">
      <div className="min-w-[720px] relative">
        <svg viewBox="0 0 740 500" className="w-full h-auto select-none">
          {/* Background Grid */}
          <pattern id="epanetGrid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#1E293B" strokeWidth="0.5" />
          </pattern>
          <rect width="740" height="500" fill="url(#epanetGrid)" />

          {/* PIPE LINKS */}
          {links.map((link) => {
            const from = nodeMap[link.fromNode];
            const to = nodeMap[link.toNode];
            if (!from || !to) return null;

            const isSelected = selectedElementId === link.id;
            const strokeColor = getVelocityColor(link.computedVelocityMs, link.isBurst);
            const isPump = link.type === 'pump';

            return (
              <g
                key={link.id}
                onClick={() => onSelectElement(link.id)}
                className="cursor-pointer group"
              >
                {/* Hit area */}
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="transparent"
                  strokeWidth="20"
                />

                {/* Base Pipe Line */}
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={isSelected ? '#FFFFFF' : strokeColor}
                  strokeWidth={isSelected ? 6 : (isPump ? 5 : 4)}
                  strokeLinecap="round"
                  strokeDasharray={isPump ? '6 4' : (link.isBurst ? '4 4' : 'none')}
                  className="transition-all duration-200"
                />

                {/* Animated Flow Dashes */}
                {Math.abs(link.computedFlowLps) > 1.0 && !link.isBurst && (
                  <line
                    x1={link.flowDirection === 'reverse' ? to.x : from.x}
                    y1={link.flowDirection === 'reverse' ? to.y : from.y}
                    x2={link.flowDirection === 'reverse' ? from.x : to.x}
                    y2={link.flowDirection === 'reverse' ? from.y : to.y}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeDasharray="4 8"
                    className="animate-[dash_2s_linear_infinite]"
                  />
                )}

                {/* Pipe Flow & Label Tag */}
                <g transform={`translate(${(from.x + to.x) / 2}, ${(from.y + to.y) / 2})`}>
                  <rect
                    x="-32"
                    y="-11"
                    width="64"
                    height="20"
                    rx="3"
                    fill="#0F172A"
                    stroke={isSelected ? '#38BDF8' : '#334155'}
                    strokeWidth="1"
                  />
                  <text
                    x="0"
                    y="3"
                    fill={isSelected ? '#38BDF8' : '#94A3B8'}
                    fontSize="9"
                    fontWeight="bold"
                    textAnchor="middle"
                    fontFamily="monospace"
                  >
                    {link.computedFlowLps} L/s
                  </text>
                </g>
              </g>
            );
          })}

          {/* NODES */}
          {nodes.map((node) => {
            const isSelected = selectedElementId === node.id;
            const isReservoir = node.type === 'reservoir';
            const isTank = node.type === 'tank';
            const pressureColor = isReservoir ? '#2563EB' : (isTank ? '#06B6D4' : getPressureColor(node.computedPressureM));

            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                onClick={() => onSelectElement(node.id)}
                className="cursor-pointer group"
              >
                {/* Selection ring */}
                {isSelected && (
                  <circle r="24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />
                )}

                {/* Node Shape */}
                {isReservoir ? (
                  <g>
                    <rect x="-18" y="-14" width="36" height="28" rx="4" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="2" />
                    <text x="0" y="4" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      RES
                    </text>
                  </g>
                ) : isTank ? (
                  <g>
                    <polygon points="-16,-12 16,-12 12,14 -12,14" fill="#0E7490" stroke="#06B6D4" strokeWidth="2" />
                    <text x="0" y="3" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      TANK
                    </text>
                  </g>
                ) : (
                  <g>
                    <circle r="14" fill="#0F172A" stroke={pressureColor} strokeWidth="2.5" />
                    <circle r="6" fill={pressureColor} />
                  </g>
                )}

                {/* Node Label & Pressure */}
                <text
                  x="0"
                  y="-20"
                  fill="#F8FAFC"
                  fontSize="11"
                  fontWeight="bold"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  {node.id}
                </text>

                {!isReservoir && !isTank && (
                  <text
                    x="0"
                    y="27"
                    fill={pressureColor}
                    fontSize="10"
                    fontWeight="bold"
                    textAnchor="middle"
                    fontFamily="monospace"
                  >
                    {node.computedPressureBar} bar
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
