import CheckIcon from './CheckIcon';

const onPremiseFeatures = [
  '100% offline — no internet required',
  'Dedicated GPU hardware provided by us',
  'Levarqo v1 model runs locally on device',
  'Full analysis platform installed on-site',
  'On-site setup + training by our engineers',
  'Ideal for regulated firms & classified data',
];

const cloudFeatures = [
  'End-to-end encryption at rest & in transit',
  'Dedicated tenant — no shared resources',
  'Same Levarqo v1 model, cloud-hosted',
  'Start analyzing in under 24 hours',
  'Auto-scaling for peak workloads',
  'Ideal for firms without hardware preference',
];

export default function Deployment() {
  return (
    <section className="deployment" id="deployment">
      <div className="container">
        <div className="deploy-header reveal">
          <div className="section-label">Deployment</div>
          <h2 className="section-title">Your infrastructure,<br />your rules</h2>
          <p className="section-desc">Choose how you want Levarqo to run. Full offline hardware deployment or managed cloud — both powered by Levarqo v1.</p>
        </div>
        <div className="deploy-grid">
          {/* ON-PREMISE */}
          <div className="deploy-card featured reveal">
            <div className="deploy-badge">
              <svg viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="3" /></svg>
              Most Secure
            </div>
            <div className="deploy-icon hardware">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="8" rx="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" />
                <circle cx="7" cy="6" r="1" />
                <circle cx="7" cy="18" r="1" />
                <path d="M17 6h.01M17 18h.01" />
              </svg>
            </div>
            <h3>On-Premise Hardware</h3>
            <p>We install a dedicated Levarqo appliance inside your data center. Fully air-gapped. Zero data leaves your building — ever.</p>
            <ul className="deploy-features">
              {onPremiseFeatures.map((f) => (
                <li key={f}><CheckIcon /> {f}</li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary btn-dark">Contact for On-Premise Setup</a>
          </div>
          {/* CLOUD */}
          <div className="deploy-card reveal">
            <div className="deploy-icon cloud">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
              </svg>
            </div>
            <h3>Managed Cloud</h3>
            <p>Access Levarqo through our encrypted, SOC 2 compliant cloud infrastructure. Quick setup, no hardware needed.</p>
            <ul className="deploy-features">
              {cloudFeatures.map((f) => (
                <li key={f}><CheckIcon /> {f}</li>
              ))}
            </ul>
            <a href="#pricing" className="btn-secondary">See Cloud Plans</a>
          </div>
        </div>
      </div>
    </section>
  );
}
