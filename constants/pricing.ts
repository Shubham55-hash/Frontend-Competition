export const PLAN_DETAILS = {
  starter: {
    label: 'Starter',
    tagline: 'Perfect for indie teams',
    features: [
      '5 pipelines',
      '1M events/month',
      '3 connectors',
      'Community support',
      '7-day data retention',
    ],
    highlighted: false,
  },
  pro: {
    label: 'Pro',
    tagline: 'For growing data teams',
    features: [
      'Unlimited pipelines',
      '50M events/month',
      '50+ connectors',
      'Priority support',
      '90-day data retention',
      'Custom alerts',
    ],
    highlighted: true,
  },
  enterprise: {
    label: 'Enterprise',
    tagline: 'Mission-critical scale',
    features: [
      'Unlimited everything',
      'Custom event volume',
      '200+ connectors',
      'Dedicated SRE',
      '365-day retention',
      'SSO + RBAC',
      'SLA guarantee',
    ],
    highlighted: false,
  },
} as const
