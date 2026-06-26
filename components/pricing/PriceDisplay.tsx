'use client'
import { useRef, useEffect } from 'react'
import { usePricingStore } from '@/hooks/usePricingStore'
import { computePrice } from '@/lib/pricingMatrix'
import type { Plan } from '@/lib/pricingMatrix'

export default function PriceDisplay({ plan }: { plan: Plan }) {
  const { currency, billing } = usePricingStore()
  const { symbol, amount, period } = computePrice(plan, currency, billing)
  const wrapRef = useRef<HTMLDivElement>(null)

  // Web Animations API — price slides up and fades in on every change
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    el.animate(
      [
        { opacity: '0', transform: 'translateY(-6px)' },
        { opacity: '1', transform: 'translateY(0px)' },
      ],
      { duration: 150, easing: 'ease-out', fill: 'forwards' }
    )
  }, [currency, billing])

  return (
    <div
      ref={wrapRef}
      aria-live="polite"
      aria-atomic="true"
      style={{ display: 'flex', alignItems: 'baseline', gap: '4px', flexWrap: 'wrap' }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          color: 'var(--arctic-powder)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}
      >
        {symbol}{amount}
      </span>
      <span
        style={{
          color: 'var(--mystic-mint)',
          fontSize: '0.82rem',
          marginLeft: '4px',
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          lineHeight: 1.4,
        }}
      >
        {period}
      </span>
    </div>
  )
}
