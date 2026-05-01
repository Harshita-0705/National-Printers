import styles from './WhyUs.module.css';

const reasons = [
  { icon: '🏆', title: 'Experienced Team', desc: 'Over 20 years of expertise across hundreds of successful events.' },
  { icon: '🎨', title: 'Custom Designs', desc: 'Every decoration is customized to your theme, color preference, and budget.' },
  { icon: '⏰', title: 'On-Time Delivery', desc: 'We ensure everything is set up well before your event begins.' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Premium quality at competitive prices — no compromise on your dream event.' },
  { icon: '📍', title: 'Local & Reliable', desc: 'Locally rooted in Ichalkaranji with a strong community reputation.' },
];

export default function WhyUs() {
  return (
    <section id="whyus" className={styles.section}>
      <div className={styles.header}>
        <p className="section-tag" style={{ color: 'var(--gold-light)' }}>Why Us</p>
        <h2 className="section-title" style={{ color: 'var(--white)' }}>
          Why Choose <span>Us?</span>
        </h2>
      </div>
      <div className={styles.grid}>
        {reasons.map((r) => (
          <div key={r.title} className={styles.card}>
            <div className={styles.icon}>{r.icon}</div>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
