'use client'
import { useSyncExternalStore } from 'react'
import type { BillingCycle, Currency } from '@/types'

interface PricingState {
  billing: BillingCycle
  currency: Currency
}

type Listener = () => void

// Module-level singleton — outside React tree
let state: PricingState = { billing: 'monthly', currency: 'USD' }
const listeners = new Set<Listener>()

function emit() {
  listeners.forEach(fn => fn())
}

// Named object export so BillingToggle / CurrencySelector can read
// active state directly from the store instead of maintaining local useState
export const pricingStore = {
  subscribe:   (fn: Listener) => { listeners.add(fn); return () => listeners.delete(fn) },
  getSnapshot: (): PricingState => state,
  setBilling:  (billing: BillingCycle)  => { state = { ...state, billing };  emit() },
  setCurrency: (currency: Currency)     => { state = { ...state, currency }; emit() },
}

// Keep named exports for backward compat with any other callers
export function setBilling(billing: BillingCycle) { pricingStore.setBilling(billing) }
export function setCurrency(currency: Currency)   { pricingStore.setCurrency(currency) }

export function usePricingStore(): PricingState {
  return useSyncExternalStore(
    pricingStore.subscribe,
    pricingStore.getSnapshot,
    pricingStore.getSnapshot,
  )
}
