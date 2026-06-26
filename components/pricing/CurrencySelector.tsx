'use client'
import { useState } from 'react'
import { pricingStore, usePricingStore } from '@/hooks/usePricingStore'
import { ChevronDown } from '@/components/icons'
import type { Currency } from '@/lib/pricingMatrix'

const CURRENCIES: { code: Currency; label: string; symbol: string }[] = [
  { code: 'USD', label: 'USD — US Dollar', symbol: '$' },
  { code: 'INR', label: 'INR — Indian Rupee', symbol: '₹' },
  { code: 'EUR', label: 'EUR — Euro', symbol: '€' },
]

export default function CurrencySelector() {
  // Read selected currency from the store — no local useState split-brain
  const { currency: selected } = usePricingStore()
  const [isOpen, setIsOpen] = useState(false)

  function handleSelect(code: Currency) {
    pricingStore.setCurrency(code)
    setIsOpen(false)
  }

  const current = CURRENCIES.find((c) => c.code === selected)!

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        id="currency-selector"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Selected currency: ${selected}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.45rem 1rem',
          background: 'rgba(17,76,90,0.4)',
          border: '1px solid rgba(217,232,226,0.15)',
          borderRadius: '8px',
          cursor: 'pointer',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--arctic-powder)',
          transition: `border-color var(--t-hover) var(--ease-out)`,
        }}
        onMouseOver={(e) => (e.currentTarget.style.borderColor = 'rgba(217,232,226,0.3)')}
        onMouseOut={(e) => (e.currentTarget.style.borderColor = 'rgba(217,232,226,0.15)')}
      >
        <span style={{ color: 'var(--forsythia)' }}>{current.symbol}</span>
        {current.code}
        <ChevronDown
          aria-hidden={true}
          style={{
            width: '14px',
            height: '14px',
            color: 'var(--mystic-mint)',
            transition: `transform var(--t-hover) var(--ease-out)`,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {/* Dropdown */}
      <div
        role="listbox"
        aria-label="Currency options"
        style={{
          position: 'absolute',
          top: 'calc(100% + 6px)',
          left: 0,
          minWidth: '180px',
          background: 'rgba(17,43,54,0.97)',
          border: '1px solid rgba(217,232,226,0.12)',
          borderRadius: '10px',
          padding: '4px',
          zIndex: 10,
          backdropFilter: 'blur(12px)',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(-6px)',
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: `opacity var(--t-hover) var(--ease-out), transform var(--t-hover) var(--ease-out)`,
        }}
      >
        {CURRENCIES.map((c) => (
          <button
            key={c.code}
            role="option"
            aria-selected={selected === c.code}
            onClick={() => handleSelect(c.code)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              width: '100%',
              padding: '0.625rem 0.875rem',
              background: selected === c.code ? 'rgba(255,200,1,0.1)' : 'transparent',
              border: 'none',
              borderRadius: '7px',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              color: selected === c.code ? 'var(--arctic-powder)' : 'var(--mystic-mint)',
              textAlign: 'left',
              transition: `background var(--t-hover) var(--ease-out), color var(--t-hover) var(--ease-out)`,
            }}
            onMouseOver={(e) => {
              if (selected !== c.code) {
                e.currentTarget.style.background = 'rgba(17,76,90,0.4)'
                e.currentTarget.style.color = 'var(--arctic-powder)'
              }
            }}
            onMouseOut={(e) => {
              if (selected !== c.code) {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--mystic-mint)'
              }
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: selected === c.code ? 'var(--forsythia)' : 'rgba(217,232,226,0.5)',
                width: '16px',
                textAlign: 'center',
              }}
            >
              {c.symbol}
            </span>
            {c.label}
          </button>
        ))}
      </div>

      {/* Click outside overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9,
          }}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
