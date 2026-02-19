import CheckIcon from './CheckIcon';

const plans = [
  {
    tier: 'Cloud — Starter',
    currency: '$',
    value: '1,500',
    period: 'per month, billed annually',
    desc: 'For teams getting started with AI-powered financial analysis on our secure cloud.',
    features: [
      'Levarqo v1 model access',
      '500 document analyses / month',
      'Encrypted cloud storage (50 GB)',
      '5 user seats',
      'Email support',
    ],
    btnText: 'Start Free Trial',
    btnClass: 'btn-secondary',
    btnHref: '#contact',
    cardClass: '',
  },
  {
    tier: 'Cloud — Professional',
    currency: '$',
    value: '5,000',
    period: 'per month, billed annually',
    desc: 'For growing firms that need more volume, more users, and priority support.',
    features: [
      'Everything in Starter',
      '5,000 document analyses / month',
      'Dedicated cloud tenant',
      '25 user seats + RBAC',
      'API access + integrations',
      'Priority support + Slack channel',
    ],
    btnText: 'Request Demo',
    btnClass: 'btn-primary',
    btnHref: '#contact',
    cardClass: 'featured',
  },
  {
    tier: 'On-Premise Hardware',
    currency: '',
    value: 'Custom',
    period: 'hardware + annual license',
    desc: 'Dedicated hardware appliance installed in your data center. Full platform, fully offline.',
    features: [
      'Levarqo hardware appliance',
      'Unlimited analyses & users',
      '100% air-gapped operation',
      'On-site installation & training',
      'Dedicated support engineer',
      'Custom model fine-tuning available',
    ],
    btnText: 'Contact Sales',
    btnClass: 'btn-secondary',
    btnHref: '#contact',
    cardClass: 'dark',
  },
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header reveal">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Plans for every<br />deployment preference</h2>
          <p className="section-desc">Start with cloud and scale, or go fully on-premise from day one. Both powered by Levarqo v1.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div className={`pricing-card ${plan.cardClass} reveal`} key={plan.tier}>
              <div className="pricing-tier">{plan.tier}</div>
              <div className="pricing-amount">
                {plan.currency && <span className="pricing-currency">{plan.currency}</span>}
                <span className="pricing-value">{plan.value}</span>
              </div>
              <div className="pricing-period">{plan.period}</div>
              <p className="pricing-desc">{plan.desc}</p>
              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f}><CheckIcon /> {f}</li>
                ))}
              </ul>
              <a href={plan.btnHref} className={plan.btnClass}>{plan.btnText}</a>
            </div>
          ))}
        </div>
        <p className="pricing-note">Cloud plans include 14-day free trial. On-premise includes proof-of-concept phase before full deployment.</p>
      </div>
    </section>
  );
}
