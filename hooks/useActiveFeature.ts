'use client'
import { createContext, useContext } from 'react'

interface ActiveFeatureContextType {
  activeIndex: number
  setActiveIndex: (i: number) => void
}

export const ActiveFeatureContext = createContext<ActiveFeatureContextType>({
  activeIndex: 0,
  setActiveIndex: () => {},
})

export function useActiveFeature() {
  return useContext(ActiveFeatureContext)
}
