const capabilities = [
  { name: 'Financial Document Parsing', score: '97.8%', width: '97.8%' },
  { name: 'Regulatory Compliance Analysis', score: '96.4%', width: '96.4%' },
  { name: 'Risk Assessment & Scoring', score: '95.1%', width: '95.1%' },
  { name: 'Financial Summarization', score: '98.6%', width: '98.6%' },
  { name: 'Anomaly & Fraud Detection', score: '94.3%', width: '94.3%' },
];

const benchmarks = [
  { name: 'Financial Doc Parsing', levarqo: '97.8%', gpt4o: '89.2%', claude: '90.1%', gemini: '87.4%', bloomberg: '93.6%', isScore: true },
  { name: 'Regulatory Q&A (MiFID/Basel)', levarqo: '96.4%', gpt4o: '82.1%', claude: '84.7%', gemini: '79.3%', bloomberg: '91.2%', isScore: true },
  { name: 'Balance Sheet Analysis', levarqo: '98.2%', gpt4o: '91.5%', claude: '92.3%', gemini: '88.7%', bloomberg: '95.4%', isScore: true },
  { name: 'Risk Scoring Accuracy', levarqo: '95.1%', gpt4o: '78.6%', claude: '80.2%', gemini: '76.9%', bloomberg: '89.8%', isScore: true },
  { name: 'Fraud Pattern Detection', levarqo: '94.3%', gpt4o: '74.8%', claude: '76.1%', gemini: '72.5%', bloomberg: '88.3%', isScore: true },
  { name: 'Offline / Air-Gapped Deploy', levarqo: true, gpt4o: false, claude: false, gemini: false, bloomberg: false, isScore: false },
  { name: 'On-Premise Hardware Option', levarqo: true, gpt4o: false, claude: false, gemini: false, bloomberg: false, isScore: false },
  { name: 'Your Data Stays On-Site', levarqo: true, gpt4o: false, claude: false, gemini: false, bloomberg: false, isScore: false },
];

function BenchmarkCell({ value, isScore, isHighlight }) {
  if (isScore) {
    return <td className={isHighlight ? 'highlight score best' : 'score'}>{value}</td>;
  }
  return value
    ? <td className={isHighlight ? 'highlight check' : 'check'}>&#10003; Yes</td>
    : <td className="cross">&#10005; No</td>;
}

export default function ModelSection() {
  return (
    <section className="model-section" id="model">
      <div className="container">
        <div className="model-header reveal">
          <div className="section-label">Our Model</div>
          <h2 className="section-title">Built for finance.<br />Not adapted — purpose-trained.</h2>
          <p className="section-desc">Levarqo v1 is our proprietary model trained specifically on financial data, regulatory frameworks, and institutional workflows.</p>
        </div>

        <div className="model-showcase reveal">
          <div className="model-showcase-inner">
            <div className="model-info">
              <div className="model-version">Levarqo v1 — Latest</div>
              <h3>Purpose-built for <em>finance</em></h3>
              <p>Unlike general-purpose LLMs adapted for finance, Levarqo v1 was trained from the ground up on financial documents, regulatory filings, audit reports, balance sheets, and institutional workflows. It understands financial context natively.</p>
              <div className="model-stats">
                <div className="model-stat">
                  <div className="model-stat-val">98.2%</div>
                  <div className="model-stat-label">Fin. Accuracy</div>
                </div>
                <div className="model-stat">
                  <div className="model-stat-val">3.1s</div>
                  <div className="model-stat-label">Avg Response</div>
                </div>
                <div className="model-stat">
                  <div className="model-stat-val">128K</div>
                  <div className="model-stat-label">Context Window</div>
                </div>
              </div>
            </div>
            <div className="model-capabilities">
              {capabilities.map((cap) => (
                <div className="model-cap" key={cap.name}>
                  <div className="model-cap-header">
                    <span className="model-cap-name">{cap.name}</span>
                    <span className="model-cap-score">{cap.score}</span>
                  </div>
                  <div className="model-cap-bar">
                    <div className="model-cap-fill" style={{ width: cap.width }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="comparison reveal">
          <h3 className="comparison-title">How Levarqo v1 compares to general-purpose models</h3>
          <p className="comparison-sub">Benchmarked on financial-domain tasks. Higher is better unless noted.</p>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Benchmark</th>
                  <th className="highlight">Levarqo v1</th>
                  <th>GPT-4o</th>
                  <th>Claude 3.5</th>
                  <th>Gemini 1.5</th>
                  <th>BloombergGPT</th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <BenchmarkCell value={row.levarqo} isScore={row.isScore} isHighlight />
                    <BenchmarkCell value={row.gpt4o} isScore={row.isScore} />
                    <BenchmarkCell value={row.claude} isScore={row.isScore} />
                    <BenchmarkCell value={row.gemini} isScore={row.isScore} />
                    <BenchmarkCell value={row.bloomberg} isScore={row.isScore} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-note">Benchmarks based on internal evaluation across 12,000+ financial documents. Contact us for detailed methodology.</p>
        </div>
      </div>
    </section>
  );
}
