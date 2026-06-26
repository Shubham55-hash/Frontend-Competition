export default function CTA() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--nocturnal-expedition)',
        padding: '6rem 1.5rem',
      }}
    >
      {/* Geometric dot pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(217,232,226,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
        }}
      />

      {/* Glow orbs */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-40%',
          left: '20%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255,200,1,0.06)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-30%',
          right: '15%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'rgba(255,153,50,0.05)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '720px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.875rem',
            background: 'rgba(255,200,1,0.12)',
            border: '1px solid rgba(255,200,1,0.25)',
            borderRadius: '100px',
            marginBottom: '1.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: 'var(--forsythia)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            No credit card required
          </span>
        </div>

        <h2
          id="cta-heading"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: 'var(--arctic-powder)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '1.25rem',
          }}
        >
          Ready to automate{' '}
          <span style={{ color: 'var(--forsythia)' }}>everything?</span>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--mystic-mint)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            maxWidth: '520px',
            margin: '0 auto 2.5rem',
          }}
        >
          Join 500+ engineering teams who ship faster with DataFlow AI. Set up your
          first pipeline in under 5 minutes.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '1.5rem',
          }}
        >
          <a id="cta-start-free" href="#pricing" className="cta-btn-primary">
            Start for free
          </a>
          <a id="cta-talk-sales" href="#" className="cta-btn-secondary">
            Talk to sales
          </a>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            color: 'rgba(217,232,226,0.45)',
            letterSpacing: '0.04em',
          }}
        >
          No credit card required · Setup in 5 minutes · Cancel anytime
        </p>
      </div>
    </section>
  )
}
