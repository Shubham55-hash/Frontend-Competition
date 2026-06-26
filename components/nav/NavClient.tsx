'use client'
import { useState } from 'react'
import { XMark } from '@/components/icons'
import { NAV_LINKS } from '@/constants/nav'

export default function NavClient() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Hamburger toggle */}
      <button
        id="mobile-menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md"
        style={{
          background: 'rgba(17,76,90,0.4)',
          border: '1px solid rgba(217,232,226,0.12)',
          cursor: 'pointer',
          transition: `background var(--t-hover) var(--ease-out)`,
        }}
      >
        {isOpen ? (
          <XMark
            aria-hidden={true}
            style={{ width: '18px', height: '18px', color: 'var(--arctic-powder)' }}
          />
        ) : (
          <>
            <span
              style={{
                display: 'block',
                width: '16px',
                height: '1.5px',
                background: 'var(--arctic-powder)',
                borderRadius: '1px',
                transition: `transform var(--t-hover) var(--ease-out)`,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '16px',
                height: '1.5px',
                background: 'var(--arctic-powder)',
                borderRadius: '1px',
                transition: `transform var(--t-hover) var(--ease-out)`,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '16px',
                height: '1.5px',
                background: 'var(--arctic-powder)',
                borderRadius: '1px',
                transition: `transform var(--t-hover) var(--ease-out)`,
              }}
            />
          </>
        )}
      </button>

      {/* Mobile slide-down menu */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          background: 'rgba(23,43,54,0.97)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(217,232,226,0.08)',
          padding: isOpen ? '1.5rem 1.5rem 2rem' : '0 1.5rem',
          maxHeight: isOpen ? '320px' : '0',
          overflow: 'hidden',
          transition: `max-height var(--t-layout) var(--ease-in-out), padding var(--t-layout) var(--ease-in-out), opacity var(--t-layout) var(--ease-in-out)`,
          opacity: isOpen ? 1 : 0,
          zIndex: 49,
        }}
      >
        <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  color: 'var(--mystic-mint)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: `color var(--t-hover) var(--ease-out), background var(--t-hover) var(--ease-out)`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'var(--arctic-powder)'
                  e.currentTarget.style.background = 'rgba(17,76,90,0.4)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'var(--mystic-mint)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(217,232,226,0.08)' }}>
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            style={{
              display: 'block',
              textAlign: 'center',
              padding: '0.75rem 1.5rem',
              background: 'var(--forsythia)',
              color: 'var(--oceanic-noir)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '0.9rem',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            Get started
          </a>
        </div>
      </div>
    </>
  )
}
