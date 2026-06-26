import { Suspense, lazy } from 'react'
import Nav from '@/components/nav/Nav'
import Hero from '@/components/hero/Hero'
import Testimonials from '@/components/testimonials/Testimonials'
import CTA from '@/components/cta/CTA'
import Footer from '@/components/footer/Footer'

const FeaturesSection = lazy(() => import('@/components/features/FeaturesSection'))
const PricingSection = lazy(() => import('@/components/pricing/PricingSection'))

function SectionSkeleton() {
  return (
    <div
      style={{
        padding: '6rem 1.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '2px solid rgba(217,232,226,0.1)',
          borderTopColor: 'var(--forsythia)',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <FeaturesSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <PricingSection />
      </Suspense>
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
