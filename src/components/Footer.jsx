const footerLinks = {
  Product: [
    { label: 'Deployment', href: '#deployment' },
    { label: 'Levarqo v1', href: '#model' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'API Docs', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Compliance', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              <div className="logo-mark"></div>
              Levarqo
            </a>
            <p>Secure AI financial data analysis. On your hardware or ours. Your data never leaves your control.</p>
          </div>
          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div className="footer-col" key={category}>
                <h4>{category}</h4>
                <ul>
                  {links.map((link) => (
                    <li key={link.label}><a href={link.href}>{link.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Levarqo. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
