import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Original National Printers</div>
      <p>मंडप डेकोरेशन · Mandap Decoration</p>
      <p>📞 <a href="tel:9325832543">9325832543</a></p>
      <p className={styles.copy}>© {new Date().getFullYear()} Original National Printers. All rights reserved.</p>
      <nav className={styles.links}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
        <a href="https://wa.me/919325832543" target="_blank" rel="noreferrer">WhatsApp</a>
      </nav>
    </footer>
  );
}
