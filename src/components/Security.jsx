const securityPoints = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: 'Air-Gapped Deployment',
    desc: 'On-premise hardware operates with zero internet connectivity. Your data physically cannot leave your building.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'End-to-End Encryption',
    desc: 'AES-256 encryption at rest, TLS 1.3 in transit. All processing happens within encrypted enclaves.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Role-Based Access Control',
    desc: 'Granular permissions ensure only authorized personnel can access specific documents and analysis results.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" />
      </svg>
    ),
    title: 'Complete Audit Trail',
    desc: 'Every query, every analysis, every access event is logged immutably for compliance and governance requirements.',
  },
];

const secLabels = [
  'Data encryption at rest',
  'Network isolation verified',
  'Zero external connections',
  'Audit logging enabled',
];

export default function Security() {
  return (
    <section className="security" id="security">
      <div className="container">
        <div className="security-inner">
          <div className="security-content reveal">
            <div className="section-label">Security</div>
            <h2 className="section-title">Your most sensitive data deserves the highest protection</h2>
            <p className="section-desc">Levarqo was built from day one around a zero-trust, data-sovereignty-first architecture. Whether you choose on-premise or cloud, your data is protected at every layer.</p>
            <div className="security-points">
              {securityPoints.map((sp) => (
                <div className="security-point" key={sp.title}>
                  <div className="security-point-icon">{sp.icon}</div>
                  <div>
                    <h4>{sp.title}</h4>
                    <p>{sp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="security-visual reveal">
            <div className="sec-shield">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="sec-labels">
              {secLabels.map((label) => (
                <div className="sec-label" key={label}>
                  <span className="sec-label-dot green"></span>
                  <span className="sec-label-text">{label}</span>
                  <span className="sec-label-status">Active</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
