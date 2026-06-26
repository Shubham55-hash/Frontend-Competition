'use client'

export default function HeroVisualization() {
  return (
    <div
      className="animate-fade-up"
      style={{
        animationDelay: '400ms',
        width: '100%',
        height: '100%',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      {/* 
        We use an inline SVG with purely CSS-based animations 
        for zero JS overhead and smooth GPU acceleration.
      */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '500px',
          filter: 'drop-shadow(0 20px 40px rgba(17,76,90,0.5))',
        }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="flow-gradient-1" x1="50" y1="100" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--mystic-mint)" stopOpacity="0" />
            <stop offset="0.5" stopColor="var(--mystic-mint)" />
            <stop offset="1" stopColor="var(--forsythia)" />
          </linearGradient>

          <linearGradient id="flow-gradient-2" x1="50" y1="300" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--mystic-mint)" stopOpacity="0" />
            <stop offset="0.5" stopColor="var(--mystic-mint)" />
            <stop offset="1" stopColor="var(--deep-saffron)" />
          </linearGradient>

          <linearGradient id="flow-gradient-3" x1="200" y1="200" x2="350" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--forsythia)" />
            <stop offset="1" stopColor="var(--deep-saffron)" />
          </linearGradient>

          {/* Node glow filters */}
          <filter id="glow-forsythia" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="glow-saffron" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Base tracks (faint) */}
        <path d="M 50 100 C 120 100 150 200 200 200" stroke="rgba(217,232,226,0.1)" strokeWidth="2" fill="none" />
        <path d="M 50 300 C 120 300 150 200 200 200" stroke="rgba(217,232,226,0.1)" strokeWidth="2" fill="none" />
        <path d="M 200 200 L 350 200" stroke="rgba(217,232,226,0.1)" strokeWidth="2" fill="none" />

        {/* Animated flow lines */}
        {/* Top left to center */}
        <path
          d="M 50 100 C 120 100 150 200 200 200"
          stroke="url(#flow-gradient-1)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: '60 150',
            animation: 'dash-flow 3s linear infinite',
          }}
        />
        {/* Bottom left to center */}
        <path
          d="M 50 300 C 120 300 150 200 200 200"
          stroke="url(#flow-gradient-2)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: '60 150',
            animation: 'dash-flow 3.5s linear infinite 1s',
          }}
        />
        {/* Center to right */}
        <path
          d="M 200 200 L 350 200"
          stroke="url(#flow-gradient-3)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: '80 120',
            animation: 'dash-flow 2.5s linear infinite',
          }}
        />

        {/* Nodes */}
        {/* Input Node 1 */}
        <circle cx="50" cy="100" r="8" fill="var(--oceanic-noir)" stroke="var(--mystic-mint)" strokeWidth="2" />
        {/* Input Node 2 */}
        <circle cx="50" cy="300" r="8" fill="var(--oceanic-noir)" stroke="var(--mystic-mint)" strokeWidth="2" />
        
        {/* Central Processing Hub */}
        <g style={{ animation: 'pulse-scale 4s ease-in-out infinite' }}>
          <circle cx="200" cy="200" r="28" fill="rgba(17,76,90,0.8)" stroke="rgba(217,232,226,0.2)" strokeWidth="1" />
          <circle cx="200" cy="200" r="18" fill="var(--oceanic-noir)" stroke="var(--forsythia)" strokeWidth="3" filter="url(#glow-forsythia)" />
          {/* Inner core */}
          <circle cx="200" cy="200" r="6" fill="var(--forsythia)" />
        </g>

        {/* Output Node */}
        <g style={{ animation: 'pulse-scale 4s ease-in-out infinite 1s' }}>
          <circle cx="350" cy="200" r="20" fill="var(--oceanic-noir)" stroke="var(--deep-saffron)" strokeWidth="3" filter="url(#glow-saffron)" />
          <rect x="345" y="195" width="10" height="10" fill="var(--deep-saffron)" rx="2" />
        </g>
      </svg>

      <style>{`
        @keyframes dash-flow {
          0% { stroke-dashoffset: 210; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); transform-origin: center; }
          50% { transform: scale(1.05); transform-origin: center; }
        }
      `}</style>
    </div>
  )
}
