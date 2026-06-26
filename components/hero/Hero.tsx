import HeroBackground from './HeroBackground'
import HeroVisualization from './HeroVisualization'
const METRICS = [
  { value: '10M+', label: 'Events/sec processed' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '200+', label: 'Native connectors' },
]

const TRUSTED_BY = ['Finbloc', 'Arkive Labs', 'Structr', 'Novex', 'Celerity']

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="DataFlow AI hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--oceanic-noir)',
      }}
    >
      <HeroBackground />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '6rem 1.5rem 4rem',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        <div>
        {/* Eyebrow badge */}
        <div
          className="animate-fade-up"
          style={{
            animationDelay: '0ms',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.875rem',
            background: 'rgba(255,200,1,0.12)',
            border: '1px solid rgba(255,200,1,0.3)',
            borderRadius: '100px',
            marginBottom: '1.5rem',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--forsythia)',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 500,
              color: 'var(--forsythia)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Now in public beta — 500+ teams onboarded
          </span>
        </div>

        {/* H1 */}
        <h1
          className="animate-fade-up"
          style={{
            animationDelay: '80ms',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 700,
            color: 'var(--arctic-powder)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            maxWidth: '900px',
            marginBottom: '1.5rem',
          }}
        >
          Automate Everything.{' '}
          <br />
          Decide{' '}
          <span
            style={{
              color: 'var(--forsythia)',
              position: 'relative',
              display: 'inline-block',
            }}
          >
            Faster
            <span
              style={{
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--forsythia), var(--deep-saffron))',
                borderRadius: '2px',
                opacity: 0.6,
              }}
            />
          </span>
          {' '}with{' '}
          <span style={{ color: 'var(--deep-saffron)' }}>AI</span>
        </h1>

        {/* Supporting copy */}
        <p
          className="animate-fade-up"
          style={{
            animationDelay: '160ms',
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--mystic-mint)',
            maxWidth: '560px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            fontWeight: 400,
          }}
        >
          DataFlow AI connects your data sources, automates your pipelines, and
          surfaces real-time insights — so your team ships decisions, not
          infrastructure.
        </p>

        {/* CTAs — use CSS hover via className */}
        <div
          className="animate-fade-up"
          style={{
            animationDelay: '240ms',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '3.5rem',
          }}
        >
          <a
            id="hero-cta-primary"
            href="#pricing"
            className="hero-cta-primary"
          >
            Start for free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </a>

          <a
            id="hero-cta-secondary"
            href="#features"
            className="hero-cta-secondary"
          >
            See how it works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
            </svg>
          </a>
        </div>

        {/* Metric chips */}
        <div
          className="animate-fade-up"
          style={{
            animationDelay: '320ms',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          {METRICS.map((m) => (
            <div
              key={m.value}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.625rem 1.125rem',
                background: 'rgba(17,76,90,0.4)',
                border: '1px solid rgba(217,232,226,0.15)',
                borderRadius: '100px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--forsythia)',
                }}
              >
                {m.value}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  color: 'var(--mystic-mint)',
                  fontWeight: 500,
                }}
              >
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Logo strip */}
        <div
          className="animate-fade-up"
          style={{ animationDelay: '360ms' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              color: 'rgba(217,232,226,0.45)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '0.875rem',
              fontWeight: 500,
            }}
          >
            Trusted by engineering teams at
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {TRUSTED_BY.map((company) => (
              <span
                key={company}
                style={{
                  padding: '0.35rem 0.875rem',
                  background: 'rgba(17,76,90,0.25)',
                  border: '1px solid rgba(217,232,226,0.1)',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'rgba(217,232,226,0.55)',
                  letterSpacing: '0.04em',
                }}
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        </div>
        
        {/* Right side visualization */}
        <div className="hero-viz-container">
          <HeroVisualization />
        </div>
      </div>
    </section>
  )
}
