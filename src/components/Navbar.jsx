import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        nav.style.boxShadow = window.scrollY > 50 ? '0 1px 8px rgba(0,0,0,0.04)' : 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <div className="container">
        <a href="#" className="logo">
          <div className="logo-mark"></div>
          Levarqo
        </a>
        <ul className="nav-links">
          <li><a href="#deployment">Deployment</a></li>
          <li><a href="#model">Our Model</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact" className="nav-cta">Book a Demo</a></li>
        </ul>
        <button className="mobile-menu-btn" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
