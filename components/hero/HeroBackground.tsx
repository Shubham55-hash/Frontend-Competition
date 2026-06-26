'use client'

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Orb 1 — Forsythia glow, top-left */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'rgba(255,200,1,0.07)',
          filter: 'blur(80px)',
          willChange: 'transform',
          animation: 'orb-drift 12s ease-in-out infinite',
        }}
      />

      {/* Orb 2 — Deep Saffron, bottom-right */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '-10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'rgba(255,153,50,0.06)',
          filter: 'blur(80px)',
          willChange: 'transform',
          animation: 'orb-drift-2 18s ease-in-out infinite',
          animationDelay: '-6s',
        }}
      />

      {/* Orb 3 — Nocturnal teal, center */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '40%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(17,76,90,0.4)',
          filter: 'blur(100px)',
          willChange: 'transform',
          animation: 'orb-drift-3 22s ease-in-out infinite',
          animationDelay: '-10s',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(217,232,226,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217,232,226,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}
