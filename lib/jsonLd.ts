export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DataFlow AI',
    url: 'https://dataflow.ai',
    logo: 'https://dataflow.ai/logo.png',
    description: 'AI-powered data automation platform. Automate everything. Decide faster.',
    sameAs: ['https://twitter.com/dataflowai', 'https://github.com/dataflowai'],
  }
}

export function getSoftwareJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'DataFlow AI',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: [
      { '@type': 'Offer', name: 'Starter', price: '29', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Pro', price: '79', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Enterprise', price: '199', priceCurrency: 'USD' },
    ],
  }
}
