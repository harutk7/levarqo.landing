import ArrowIcon from './ArrowIcon';

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-inner reveal">
          <div className="section-label">Get Started</div>
          <h2 className="section-title">Ready to analyze your financial data with total privacy?</h2>
          <p className="section-desc">Book a 30-minute demo. We'll show you Levarqo v1 running on your type of documents — live.</p>
          <div className="cta-actions">
            <a href="mailto:hello@levarqo.ai" className="btn-primary">
              Book a Demo
              <ArrowIcon />
            </a>
            <a href="mailto:hello@levarqo.ai" className="btn-secondary">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
