import { TESTIMONIALS } from '@/constants/testimonials'

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
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
          Customer stories
        </p>
        <h2
          id="testimonials-heading"
          style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--arctic-powder)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}
        >
          Engineers ship faster.{' '}
          <span style={{ color: 'var(--mystic-mint)' }}>Teams decide together.</span>
        </h2>
      </div>

      {/* Three-column grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {TESTIMONIALS.map((t) => (
          <blockquote
            key={t.id}
            className="testimonial-card"
          >
            {/* Quote mark */}
            <div
              aria-hidden="true"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '3rem',
                lineHeight: 0.7,
                color: 'var(--forsythia)',
                opacity: 0.4,
                fontWeight: 700,
              }}
            >
              &ldquo;
            </div>

            {/* Quote text */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--arctic-powder)',
                fontSize: '0.975rem',
                lineHeight: 1.75,
                fontWeight: 400,
                flex: 1,
              }}
            >
              {t.quote}
            </p>

            {/* Author */}
            <footer style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              {/* Avatar */}
              <div
                aria-hidden="true"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--nocturnal-expedition)',
                  border: '2px solid rgba(255,200,1,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--forsythia)',
                  flexShrink: 0,
                  letterSpacing: '0.05em',
                }}
              >
                {t.avatar}
              </div>

              <div>
                <cite
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--forsythia)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    display: 'block',
                  }}
                >
                  {t.author}
                </cite>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--mystic-mint)',
                    fontSize: '0.78rem',
                  }}
                >
                  {t.role} · {t.company}
                </span>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
