import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.badge}>✨ Premium Mandap Decoration</div>
        <h1>Original <em>National</em><br />Printers</h1>
        <p className={styles.sub}>मंडप डेकोरेशन · Mandap Decoration</p>
        <p className={styles.desc}>
          Transforming your special moments into unforgettable memories. From grand wedding mandaps
          to vibrant event décor — we craft magic with fabric, color &amp; tradition.
        </p>
        <div className={styles.buttons}>
          <a href="tel:9325832543" className="btn-primary">📞 Call: 9325832543</a>
          <a href="#gallery" className="btn-outline">View Gallery</a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}><span className={styles.num}>500+</span><span className={styles.label}>Events Done</span></div>
          <div className={styles.stat}><span className={styles.num}>20+</span><span className={styles.label}>Years Experience</span></div>
          <div className={styles.stat}><span className={styles.num}>100%</span><span className={styles.label}>Satisfaction</span></div>
        </div>
      </div>
      <a href="#about" className={styles.scroll}>Scroll ↓</a>
    </section>
  );
}
