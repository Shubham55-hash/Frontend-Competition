export type Plan = 'starter' | 'pro' | 'enterprise'
export type BillingCycle = 'monthly' | 'yearly'
export type Currency = 'INR' | 'USD' | 'EUR'

export interface PricingMatrixEntry {
  baseMonthlyUSD: number
  regionalMultiplier: Record<Currency, number>
  annualDiscountMultiplier: number
}

export interface Feature {
  id: number
  title: string
  description: string
  detail: string
  icon: string
  accentColor: string
  metric: string
  metricLabel: string
}

export interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}
