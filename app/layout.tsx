import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { getOrganizationJsonLd, getSoftwareJsonLd } from '@/lib/jsonLd'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dataflow.ai'),
  title: {
    default: 'DataFlow AI — Automate Everything. Decide Faster.',
    template: '%s | DataFlow AI',
  },
  description:
    'DataFlow AI is an AI-powered data automation platform that helps engineering teams build resilient pipelines, surface predictive insights, and automate workflows at scale.',
  keywords: ['data automation', 'AI pipeline', 'data engineering', 'ETL', 'workflow automation'],
  authors: [{ name: 'DataFlow AI' }],
  creator: 'DataFlow AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dataflow.ai',
    siteName: 'DataFlow AI',
    title: 'DataFlow AI — Automate Everything. Decide Faster.',
    description:
      'AI-powered data automation. Build resilient pipelines, surface insights, and automate workflows at scale.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DataFlow AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataFlow AI — Automate Everything. Decide Faster.',
    description: 'AI-powered data automation platform.',
    images: ['/og-image.png'],
    creator: '@dataflowai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://dataflow.ai' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getSoftwareJsonLd()) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
