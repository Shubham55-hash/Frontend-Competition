'use client'
import { useState, useEffect, useCallback } from 'react'
import { ActiveFeatureContext } from '@/hooks/useActiveFeature'
import BentoGrid from './BentoGrid'
import AccordionList from './AccordionList'

const MOBILE_BREAKPOINT = 768

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function check() {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    check()

    let timer: ReturnType<typeof setTimeout>
    function onResize() {
      clearTimeout(timer)
      timer = setTimeout(check, 100)
    }

    window.addEventListener('resize', onResize, { passive: true })
    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(timer)
    }
  }, [])

  const handleSetActive = useCallback((i: number) => setActiveIndex(i), [])

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      style={{
        padding: '6rem 1.5rem',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
          Platform capabilities
        </p>
        <h2
          id="features-heading"
          style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--arctic-powder)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}
        >
          Built for production,
          <br />
          <span style={{ color: 'var(--mystic-mint)' }}>loved by engineers</span>
        </h2>
      </div>

      <ActiveFeatureContext.Provider value={{ activeIndex, setActiveIndex: handleSetActive }}>
        {isMobile ? <AccordionList /> : <BentoGrid />}
      </ActiveFeatureContext.Provider>
    </section>
  )
}
