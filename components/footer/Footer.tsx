import Link from 'next/link'
import { LinkSolid } from '@/components/icons'
import { FOOTER_LINKS } from '@/constants/nav'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--oceanic-noir)',
        borderTop: '1px solid rgba(217,232,226,0.08)',
        padding: '4rem 1.5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Four-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Column 1: Logo + tagline */}
          <div>
            <Link href="/" aria-label="DataFlow AI home" className="nav-logo" style={{ marginBottom: '0.875rem', display: 'inline-flex' }}>
              DataFlow
              <span className="nav-logo-badge">AI</span>
            </Link>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: 'var(--mystic-mint)',
                lineHeight: 1.65,
                maxWidth: '220px',
                marginTop: '0.875rem',
              }}
            >
              Automate everything.
              <br />
              Decide faster.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              {[
                { label: 'Twitter / X', href: 'https://twitter.com/dataflowai' },
                { label: 'GitHub', href: 'https://github.com/dataflowai' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="footer-social-link"
                >
                  <LinkSolid aria-hidden={true} style={{ width: '14px', height: '14px' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="footer-col-heading">Product</h3>
            <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="footer-col-heading">Company</h3>
            <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="footer-col-heading">Legal</h3>
            <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: '1px solid rgba(217,232,226,0.06)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              color: 'rgba(217,232,226,0.35)',
            }}
          >
            © {new Date().getFullYear()} DataFlow AI, Inc. All rights reserved.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'rgba(217,232,226,0.25)',
              letterSpacing: '0.06em',
            }}
          >
            Built with precision · Designed for speed
          </p>
        </div>
      </div>
    </footer>
  )
}
