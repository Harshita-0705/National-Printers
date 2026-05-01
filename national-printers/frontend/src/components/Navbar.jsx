import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Original National Printers
        <span>Mandap Decoration · Est. 2000+</span>
      </div>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        <li><a href="/#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="/#services" onClick={() => setOpen(false)}>Services</a></li>
        <li><a href="/#gallery" onClick={() => setOpen(false)}>Gallery</a></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>

      <div className={styles.right}>
        <a href="tel:9325832543" className={styles.cta}>📞 Call Now</a>
        <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
