'use client'
import { useActiveFeature } from '@/hooks/useActiveFeature'
import { FEATURES } from '@/constants/features'
import FeatureIcon from './FeatureIcon'

export default function BentoGrid() {
  const { activeIndex, setActiveIndex } = useActiveFeature()

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'auto auto',
        gap: '1rem',
      }}
    >
      {FEATURES.map((feature, i) => {
        const isActive = activeIndex === i
        // Large card layout: feature 0 spans 2 rows on left
        const isLarge = i === 0

        return (
          <div
            key={feature.id}
            id={`feature-card-${i}`}
            role="button"
            tabIndex={0}
            aria-pressed={isActive}
            onClick={() => setActiveIndex(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setActiveIndex(i)
              }
            }}
            style={{
              gridRow: isLarge ? 'span 2' : undefined,
              background: isActive
                ? 'rgba(255,200,1,0.05)'
                : 'rgba(17,76,90,0.25)',
              border: `1px solid ${isActive ? 'var(--forsythia)' : 'rgba(217,232,226,0.1)'}`,
              borderRadius: '16px',
              padding: '1.5rem',
              cursor: 'pointer',
              transition: `border-color var(--t-layout) var(--ease-in-out), background var(--t-layout) var(--ease-in-out), transform var(--t-hover) var(--ease-out)`,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.875rem',
              userSelect: 'none',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseOver={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = 'rgba(217,232,226,0.25)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }
            }}
            onMouseOut={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = 'rgba(217,232,226,0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }
            }}
          >
            {/* Accent glow on active */}
            {isActive && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, ${feature.accentColor}, transparent)`,
                  borderRadius: '16px 16px 0 0',
                }}
              />
            )}

            {/* Icon */}
            <div
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `rgba(${feature.accentColor === 'var(--forsythia)' ? '255,200,1' : feature.accentColor === 'var(--deep-saffron)' ? '255,153,50' : '217,232,226'}, 0.12)`,
                borderRadius: '10px',
                color: feature.accentColor,
                flexShrink: 0,
              }}
            >
              <FeatureIcon name={feature.icon} />
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--arctic-powder)',
                letterSpacing: '-0.01em',
              }}
            >
              {feature.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                color: 'var(--mystic-mint)',
                lineHeight: 1.6,
              }}
            >
              {feature.description}
            </p>

            {/* Metric — always shown on large card, only on active for others */}
            {(isLarge || isActive) && (
              <div style={{ marginTop: 'auto' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: isLarge ? '2.5rem' : '1.75rem',
                    fontWeight: 700,
                    color: feature.accentColor,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {feature.metric}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    color: 'var(--mystic-mint)',
                    marginTop: '0.25rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {feature.metricLabel}
                </div>
              </div>
            )}

            {/* Detail text — CSS max-height transition, always in DOM */}
            <div
              style={{
                overflow: 'hidden',
                maxHeight: isActive ? '200px' : '0',
                opacity: isActive ? 1 : 0,
                transition: `max-height var(--t-layout) var(--ease-in-out),
                             opacity    var(--t-layout) var(--ease-in-out)`,
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  color: 'rgba(217,232,226,0.7)',
                  lineHeight: 1.65,
                  borderTop: '1px solid rgba(217,232,226,0.08)',
                  paddingTop: '0.875rem',
                  marginTop: '0.25rem',
                }}
              >
                {feature.detail}
              </p>
            </div>

          </div>
        )
      })}
    </div>
  )
}
