import styles from './About.module.css';

const highlights = [
  { icon: '🎊', title: 'Weddings', desc: 'Grand mandap setups, stage decoration & floral design' },
  { icon: '🏠', title: 'Outdoor Events', desc: 'Full tent & canopy decoration for open venues' },
  { icon: '🎨', title: 'Custom Designs', desc: 'Tailored color themes and fabric arrangements' },
  { icon: '⚡', title: 'Quick Setup', desc: 'Professional team for fast, reliable installation' },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className="section-tag">About Us</p>
          <h2 className="section-title">Crafting <span>Celebrations</span><br />with Heart &amp; Soul</h2>
          <p>Welcome to <strong>Original National Printers</strong> — your trusted partner for breathtaking Mandap decorations and event setups in Ichalkaranji.</p>
          <p>From wedding mandaps adorned with intricate fabric designs to colorful ceiling installations — our team handles every detail so you can focus on celebrating.</p>
          <div className={styles.highlights}>
            {highlights.map((h) => (
              <div key={h.title} className={styles.card}>
                <h4>{h.icon} {h.title}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imgGrid}>
          <img src="/images/banner.jpeg" alt="National Printers Banner" />
        </div>
      </div>
    </section>
  );
}
