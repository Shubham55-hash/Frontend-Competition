'use client'
import BillingToggle from './BillingToggle'
import CurrencySelector from './CurrencySelector'
import PricingCard from './PricingCard'
import type { Plan } from '@/lib/pricingMatrix'

const PLANS: Plan[] = ['starter', 'pro', 'enterprise']

export default function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      style={{
        padding: '6rem 1.5rem',
        background: 'linear-gradient(180deg, rgba(17,76,90,0.08) 0%, transparent 100%)',
        position: 'relative',
      }}
    >
      {/* Subtle background dots */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(217,232,226,0.04) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--forsythia)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 500,
              marginBottom: '0.75rem',
            }}
          >
            Simple pricing
          </p>
          <h2
            id="pricing-heading"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--arctic-powder)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            Start free.{' '}
            <span style={{ color: 'var(--mystic-mint)' }}>Scale without limits.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--mystic-mint)',
              fontSize: '1rem',
              maxWidth: '480px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            No hidden fees. No per-seat charges. Just the platform your data team needs.
          </p>
        </div>

        {/* Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          <BillingToggle />
          <CurrencySelector />
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            alignItems: 'start',
          }}
        >
          {PLANS.map((plan) => (
            <PricingCard key={plan} plan={plan} />
          ))}
        </div>

        {/* Bottom note */}
        <p
          style={{
            textAlign: 'center',
            marginTop: '2.5rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            color: 'rgba(217,232,226,0.45)',
          }}
        >
          All plans include a 14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  )
}
