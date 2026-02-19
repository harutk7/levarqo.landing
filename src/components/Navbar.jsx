import { useEffect, useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div className="container">
        <a href="#" className="logo">
          <img src="/liftapp.png" alt="Levarqo" className="logo-img" />
        </a>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#deployment" onClick={closeMenu}>Deployment</a></li>
          <li><a href="#model" onClick={closeMenu}>Our Model</a></li>
          <li><a href="#features" onClick={closeMenu}>Features</a></li>
          <li><a href="#pricing" onClick={closeMenu}>Pricing</a></li>
          <li><a href="#contact" className="nav-cta" onClick={closeMenu}>Book a Demo</a></li>
        </ul>
        <button
          className={`mobile-menu-btn${menuOpen ? ' active' : ''}`}
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
