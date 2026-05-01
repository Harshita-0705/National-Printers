import styles from './Services.module.css';

const services = [
  { icon: '🕌', title: 'Mandap Decoration', desc: 'Traditional and modern mandap setups with rich fabric draping, floral elements, and lighting.' },
  { icon: '🌸', title: 'Ceiling Decoration', desc: 'Stunning overhead canopies with fabric roses, geometric patterns, and colorful cloth arrangements.' },
  { icon: '🚪', title: 'Entrance & Gate Décor', desc: 'Grand entrance setups with draped fabric, floral accents, and welcoming arch designs.' },
  { icon: '🎪', title: 'Tent & Shamiana', desc: 'Full shamiana and tent decoration for outdoor events with color-coordinated themes.' },
  { icon: '💐', title: 'Stage Decoration', desc: 'Eye-catching stage backdrops, throne setups, and seating arrangements for the couple.' },
  { icon: '🎉', title: 'Custom Events', desc: 'Birthdays, engagements, namkaran, griha pravesh — all celebrations decorated with dedication.' },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.header}>
        <p className="section-tag">What We Offer</p>
        <h2 className="section-title">Our <span>Services</span></h2>
        <p className={styles.subtitle}>Every occasion deserves spectacular decoration. End-to-end services for all your celebrations.</p>
      </div>
      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.title} className={styles.card}>
            <div className={styles.icon}>{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
