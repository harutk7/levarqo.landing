import CheckIcon from './CheckIcon';
import ArrowIcon from './ArrowIcon';

const trustItems = [
  'Air-gapped & offline capable',
  'Proprietary Levarqo v1 model',
  'SOC 2 Type II compliant',
  'On-premise hardware included',
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Your data never leaves your walls
        </div>
        <h1>Analyze your financial data with <em>AI that stays private</em></h1>
        <p className="hero-sub">
          Levarqo brings powerful AI financial analysis to your firm — on your own hardware, inside your network, with your data never exposed. Or choose our secure cloud. You decide.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Request a Demo
            <ArrowIcon />
          </a>
          <a href="#deployment" className="btn-secondary">See Deployment Options</a>
        </div>
        <div className="hero-trust">
          {trustItems.map((item) => (
            <div className="trust-item" key={item}>
              <CheckIcon />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
