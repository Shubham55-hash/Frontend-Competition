import Link from 'next/link'
import NavClient from './NavClient'
import { NAV_LINKS } from '@/constants/nav'

export default function Nav() {
  return (
    <header
      role="banner"
      className="nav-header"
    >
      <nav
        aria-label="Main navigation"
        className="nav-inner"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="DataFlow AI home"
          className="nav-logo"
        >
          DataFlow
          <span className="nav-logo-badge">AI</span>
        </Link>

        {/* Desktop links */}
        <ul
          role="list"
          className="nav-links hidden md:flex"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="nav-link">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="nav-actions">
          <a
            href="#pricing"
            className="nav-cta hidden md:inline-flex"
          >
            Get started
          </a>
          <NavClient />
        </div>
      </nav>
    </header>
  )
}
