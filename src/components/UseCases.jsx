const useCases = [
  {
    label: 'Investment Firms',
    title: 'Due Diligence Acceleration',
    desc: 'Analyze hundreds of target company documents — financials, contracts, cap tables — in hours instead of weeks. Extract key risks and red flags automatically.',
  },
  {
    label: 'Banks & Lenders',
    title: 'Credit Risk Assessment',
    desc: 'Feed in borrower financials, tax returns, and bank statements. Get instant risk scoring, trend analysis, and automated underwriting recommendations.',
  },
  {
    label: 'Audit & Advisory',
    title: 'Automated Audit Support',
    desc: 'Cross-reference financial statements, invoices, and ledgers at scale. Detect discrepancies, misclassifications, and compliance gaps automatically.',
  },
  {
    label: 'Corporate Treasury',
    title: 'Cash Flow Intelligence',
    desc: 'Analyze internal financial data across subsidiaries. Forecast cash positions, identify optimization opportunities, and generate board-ready summaries.',
  },
];

export default function UseCases() {
  return (
    <section className="use-cases">
      <div className="container">
        <div className="use-header reveal">
          <div className="section-label">Use Cases</div>
          <h2 className="section-title">How firms use Levarqo</h2>
          <p className="section-desc">From hedge funds to banks to auditing firms — Levarqo adapts to your financial analysis needs.</p>
        </div>
        <div className="use-grid">
          {useCases.map((uc) => (
            <div className="use-card reveal" key={uc.title}>
              <div className="use-card-label">{uc.label}</div>
              <h3>{uc.title}</h3>
              <p>{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
