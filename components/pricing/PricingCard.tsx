import PriceDisplay from './PriceDisplay'
import { ChevronUpSolid } from '@/components/icons'
import { PLAN_DETAILS } from '@/constants/pricing'
import type { Plan } from '@/lib/pricingMatrix'

interface PricingCardProps {
  plan: Plan
}

export default function PricingCard({ plan }: PricingCardProps) {
  const details = PLAN_DETAILS[plan]
  const isHighlighted = details.highlighted

  return (
    <div
      className={`pricing-card ${isHighlighted ? 'pricing-card-highlighted' : ''}`}
    >
      {/* Top accent line */}
      {isHighlighted && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, var(--forsythia), var(--deep-saffron))',
            borderRadius: '20px 20px 0 0',
          }}
        />
      )}

      {/* Most popular badge */}
      {isHighlighted && (
        <div
          style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '3px 14px',
            background: 'var(--forsythia)',
            borderRadius: '100px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            fontWeight: 700,
            color: 'var(--oceanic-noir)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Most popular
        </div>
      )}

      {/* Plan label + tagline */}
      <div>
        <h3
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            fontWeight: 700,
            color: isHighlighted ? 'var(--forsythia)' : 'var(--arctic-powder)',
            letterSpacing: '-0.01em',
            marginBottom: '0.35rem',
          }}
        >
          {details.label}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            color: 'var(--mystic-mint)',
            fontWeight: 400,
          }}
        >
          {details.tagline}
        </p>
      </div>

      {/* Price — isolated re-render */}
      <PriceDisplay plan={plan} />

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(217,232,226,0.08)' }} />

      {/* Feature list */}
      <ul
        role="list"
        style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          flex: 1,
        }}
      >
        {details.features.map((feat) => (
          <li
            key={feat}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <ChevronUpSolid
              aria-hidden={true}
              style={{
                width: '16px',
                height: '16px',
                color: isHighlighted ? 'var(--forsythia)' : 'var(--mystic-mint)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                color: 'var(--arctic-powder)',
                fontWeight: 400,
              }}
            >
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        id={`pricing-cta-${plan}`}
        href="#"
        className={isHighlighted ? 'pricing-cta-primary' : 'pricing-cta-outline'}
      >
        {plan === 'enterprise' ? 'Talk to sales' : 'Get started'}
      </a>
    </div>
  )
}
