const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    title: 'Document Intelligence',
    desc: 'Parse and understand complex financial documents — annual reports, 10-Ks, contracts, invoices, loan agreements — in seconds.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Risk Analysis',
    desc: 'Automatically score risk across portfolios, counterparties, and exposures. Flag anomalies and concentration risks before they become problems.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Compliance Checking',
    desc: 'Validate documents and transactions against MiFID II, Basel III, SEC, GDPR, and internal policy frameworks automatically.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <path d="M1 10h22" />
      </svg>
    ),
    title: 'Financial Summarization',
    desc: 'Turn 200-page reports into structured executive summaries with key figures, risks, and actionable insights extracted automatically.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Fraud Detection',
    desc: 'Identify suspicious patterns, inconsistencies, and red flags across transactions, statements, and filings with AI-powered anomaly detection.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
    title: 'Natural Language Queries',
    desc: 'Ask questions about your data in plain English. "What was our exposure to emerging markets in Q3?" — answered instantly from your documents.',
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header reveal">
          <div className="section-label">Capabilities</div>
          <h2 className="section-title">What Levarqo can<br />do with your data</h2>
          <p className="section-desc">Upload any financial document — contracts, reports, filings, spreadsheets — and let Levarqo v1 extract intelligence instantly.</p>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card reveal" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
