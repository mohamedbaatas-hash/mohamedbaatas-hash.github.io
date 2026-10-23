import React from 'react';

/**
 * FluiDevLogo - Official FluiDev SVG vector mark and brand lockup.
 * Derived from authentic Figma master specifications (all_figma_components/LogoStudio_007.tsx).
 *
 * Geometric Rationale:
 * - Structural 'F' Block: Software logic, structured programming, civil hydraulics layout.
 * - Fluid 'D' Conduit: Continuous curvature representing hydraulic streamlines and pipeline telemetry.
 * - Cyber-Physical Node: Energy Yellow (Amber) sensor junction where hydraulics meets data.
 *
 * @param {object} props
 * @param {'icon' | 'dark' | 'light' | 'mono'} [props.variant='icon']
 * @param {number | string} [props.size=36]
 * @param {string} [props.className='']
 * @param {boolean} [props.iconOnly]
 * @param {boolean} [props.withContainer]
 * @param {number | string} [props.width]
 * @param {number | string} [props.height]
 * @param {string} [props.title]
 */
export function FluiDevLogo({
  variant = 'icon',
  size = 36,
  className = '',
  iconOnly,
  withContainer,
  width,
  height,
  title = 'FluiDev Logo',
  ...props
}) {
  const isIcon = iconOnly !== undefined ? Boolean(iconOnly) : variant === 'icon';
  const isDark = variant === 'dark' || isIcon;
  const isMono = variant === 'mono';

  // Authentic FluiDev color tokens
  const primary = isDark ? '#ffffff' : '#07133f';
  const flow = isMono ? '#07133f' : (isDark ? '#00e5ff' : '#00aeea');
  const developer = isMono ? '#07133f' : (isDark ? '#00e5ff' : '#005bff');
  const accent = isMono ? '#07133f' : '#f7b500';
  const nodeStroke = isDark ? '#001db5' : '#ffffff';

  // Responsive dimensions
  const hasContainer = withContainer !== undefined ? Boolean(withContainer) : isIcon;
  const computedWidth = width || (isIcon ? size : (typeof size === 'number' ? size * 3.6 : size));
  const computedHeight = height || size;

  return (
    <svg
      aria-label={title}
      data-logo={variant}
      role="img"
      viewBox={isIcon ? '0 0 200 200' : '0 0 720 200'}
      width={computedWidth}
      height={computedHeight}
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 ${className}`}
      {...props}
    >
      {hasContainer && (
        <rect
          width="200"
          height="200"
          rx="38"
          fill="#001db5"
        />
      )}

      {/* FluiDev Glyph Geometry */}
      <g>
        {/* Structural F */}
        <path
          d="M48 34h78v22H72v33h45v22H72v57H48Z"
          fill={primary}
        />
        {/* Fluid Conduit D */}
        <path
          d="M93 34h19c39 0 63 25 63 66s-24 66-63 66H93"
          fill="none"
          stroke={flow}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="17"
        />
        {/* Cyber-Physical Node */}
        <circle
          cx="119"
          cy="100"
          r="10"
          fill={accent}
          stroke={nodeStroke}
          strokeWidth="4"
        />
      </g>

      {/* Wordmark Typography (renders in full lockup mode) */}
      {!isIcon && (
        <>
          <text
            x="215"
            y="111"
            fill={primary}
            fontFamily="Alexandria, system-ui, sans-serif"
            fontSize="72"
            fontWeight="900"
          >
            Flui
          </text>
          <text
            x="354"
            y="111"
            fill={developer}
            fontFamily="Alexandria, system-ui, sans-serif"
            fontSize="72"
            fontWeight="900"
          >
            Dev
          </text>
          <path
            d="M218 135h43"
            fill="none"
            stroke={accent}
            strokeLinecap="round"
            strokeWidth="6"
          />
          <text
            x="278"
            y="142"
            fill={isDark ? '#a9b9e7' : '#596682'}
            fontFamily="Barlow Condensed, system-ui, sans-serif"
            fontSize="17"
            fontWeight="700"
            letterSpacing="4"
          >
            HYDROINFORMATICS + SOFTWARE
          </text>
        </>
      )}
    </svg>
  );
}

export default FluiDevLogo;
