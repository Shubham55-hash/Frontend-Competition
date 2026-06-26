'use client'
import { useActiveFeature } from '@/hooks/useActiveFeature'
import { FEATURES } from '@/constants/features'
import { ChevronDown } from '@/components/icons'
import FeatureIcon from './FeatureIcon'

export default function AccordionList() {
  const { activeIndex, setActiveIndex } = useActiveFeature()

  function handleToggle(i: number) {
    setActiveIndex(activeIndex === i ? -1 : i)
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
      role="list"
    >
      {FEATURES.map((feature, i) => {
        const isOpen = activeIndex === i

        return (
          <div
            key={feature.id}
            role="listitem"
            style={{
              background: isOpen ? 'rgba(255,200,1,0.04)' : 'rgba(17,76,90,0.2)',
              border: `1px solid ${isOpen ? 'var(--forsythia)' : 'rgba(217,232,226,0.1)'}`,
              borderRadius: '12px',
              overflow: 'hidden',
              transition: `border-color var(--t-layout) var(--ease-in-out), background var(--t-layout) var(--ease-in-out)`,
            }}
          >
            {/* Accordion trigger */}
            <button
              id={`accordion-trigger-${i}`}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${i}`}
              onClick={() => handleToggle(i)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.25rem 1.25rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `rgba(${feature.accentColor === 'var(--forsythia)' ? '255,200,1' : feature.accentColor === 'var(--deep-saffron)' ? '255,153,50' : '217,232,226'}, 0.12)`,
                  borderRadius: '8px',
                  color: feature.accentColor,
                  flexShrink: 0,
                }}
              >
                <FeatureIcon name={feature.icon} />
              </div>

              {/* Title + desc */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--arctic-powder)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {feature.title}
                </div>
                {!isOpen && (
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      color: 'var(--mystic-mint)',
                      marginTop: '2px',
                    }}
                  >
                    {feature.description}
                  </div>
                )}
              </div>

              {/* Metric (collapsed) */}
              {!isOpen && (
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: feature.accentColor,
                    flexShrink: 0,
                  }}
                >
                  {feature.metric}
                </span>
              )}

              {/* Chevron */}
              <ChevronDown
                aria-hidden={true}
                style={{
                  width: '18px',
                  height: '18px',
                  color: 'var(--mystic-mint)',
                  flexShrink: 0,
                  transition: `transform var(--t-hover) var(--ease-out)`,
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>

            {/* Accordion panel */}
            <div
              id={`accordion-panel-${i}`}
              role="region"
              aria-labelledby={`accordion-trigger-${i}`}
              style={{
                maxHeight: isOpen ? '400px' : '0',
                overflow: 'hidden',
                opacity: isOpen ? 1 : 0,
                transition: `max-height var(--t-layout) var(--ease-in-out), opacity var(--t-layout) var(--ease-in-out)`,
              }}
            >
              <div
                style={{
                  padding: '0 1.25rem 1.5rem 4.25rem',
                  animation: isOpen ? 'accordion-open 0.35s ease-out both' : undefined,
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'rgba(217,232,226,0.75)',
                    lineHeight: 1.7,
                    marginBottom: '1rem',
                  }}
                >
                  {feature.detail}
                </p>

                {/* Metric */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: feature.accentColor,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {feature.metric}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      color: 'var(--mystic-mint)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {feature.metricLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
