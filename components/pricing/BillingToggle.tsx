'use client'
import { pricingStore, usePricingStore } from '@/hooks/usePricingStore'
import type { BillingCycle } from '@/lib/pricingMatrix'

export default function BillingToggle() {
  // Read billing directly from the store — no local useState split-brain
  const { billing } = usePricingStore()

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0',
        background: 'rgba(17,76,90,0.4)',
        border: '1px solid rgba(217,232,226,0.12)',
        borderRadius: '100px',
        padding: '4px',
      }}
      role="group"
      aria-label="Billing cycle"
    >
      {(['monthly', 'yearly'] as BillingCycle[]).map((cycle) => (
        <button
          key={cycle}
          id={`billing-toggle-${cycle}`}
          onClick={() => pricingStore.setBilling(cycle)}
          aria-pressed={billing === cycle}
          style={{
            padding: '0.45rem 1.25rem',
            borderRadius: '100px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem',
            fontWeight: 600,
            transition: `background var(--t-hover) var(--ease-out), color var(--t-hover) var(--ease-out)`,
            background: billing === cycle ? 'var(--forsythia)' : 'transparent',
            color: billing === cycle ? 'var(--oceanic-noir)' : 'var(--mystic-mint)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
          {cycle === 'yearly' && (
            <span
              style={{
                fontSize: '0.65rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                padding: '1px 6px',
                borderRadius: '100px',
                background: billing === 'yearly' ? 'rgba(23,43,54,0.3)' : 'rgba(255,200,1,0.15)',
                color: billing === 'yearly' ? 'var(--oceanic-noir)' : 'var(--forsythia)',
                letterSpacing: '0.04em',
              }}
            >
              −20%
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
