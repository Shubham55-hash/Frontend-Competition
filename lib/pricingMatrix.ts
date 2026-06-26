import type { Plan, Currency, BillingCycle, PricingMatrixEntry } from '@/types'

export const PRICING_MATRIX: Record<Plan, PricingMatrixEntry> = {
  starter: {
    baseMonthlyUSD: 29,
    regionalMultiplier: { USD: 1, INR: 83, EUR: 0.92 },
    annualDiscountMultiplier: 0.8,
  },
  pro: {
    baseMonthlyUSD: 79,
    regionalMultiplier: { USD: 1, INR: 83, EUR: 0.92 },
    annualDiscountMultiplier: 0.8,
  },
  enterprise: {
    baseMonthlyUSD: 199,
    regionalMultiplier: { USD: 1, INR: 83, EUR: 0.92 },
    annualDiscountMultiplier: 0.8,
  },
}

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  INR: '₹',
  EUR: '€',
}

export function computePrice(
  plan: Plan,
  currency: Currency,
  billing: BillingCycle
): { symbol: string; amount: string; period: string } {
  const entry = PRICING_MATRIX[plan]
  const multiplier = entry.regionalMultiplier[currency]
  const base = entry.baseMonthlyUSD * multiplier
  const amount = billing === 'yearly'
    ? base * entry.annualDiscountMultiplier
    : base

  const formatted = currency === 'INR'
    ? Math.round(amount).toLocaleString('en-IN')
    : amount.toFixed(2)

  return {
    symbol: CURRENCY_SYMBOLS[currency],
    amount: formatted,
    period: billing === 'yearly' ? '/mo, billed annually' : '/month',
  }
}
