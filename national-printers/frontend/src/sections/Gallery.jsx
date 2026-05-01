import styles from './Gallery.module.css';

const items = [
  { src: '/images/gallery1.jpeg',  label: 'Ceiling Decoration' },
  { src: '/images/gallery2.jpeg',  label: 'Mandap Setup' },
  { src: '/images/gallery3.jpeg',  label: 'Wedding Decoration' },
  { src: '/images/gallery4.jpeg',  label: 'Event Décor' },
  { src: '/images/gallery5.jpeg',  label: 'Floral Canopy' },
  { src: '/images/gallery6.jpeg',  label: 'Stage Decoration' },
  { src: '/images/gallery7.jpeg',  label: 'Tent & Shamiana' },
  { src: '/images/gallery8.jpeg',  label: 'Mandap Decoration' },
  { src: '/images/gallery9.jpeg',  label: 'Ceiling Design' },
  { src: '/images/gallery10.jpeg', label: 'Entrance Décor' },
  { src: '/images/gallery11.jpeg', label: 'Wedding Setup' },
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.header}>
        <p className="section-tag" style={{ color: 'var(--gold-light)' }}>Our Work</p>
        <h2 className="section-title" style={{ color: 'var(--white)' }}>
          Photo <span style={{ color: 'var(--gold)' }}>Gallery</span>
        </h2>
        <p className={styles.subtitle}>A glimpse of our finest decoration work — each piece crafted with care.</p>
      </div>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <img src={item.src} alt={item.label} />
            <div className={styles.overlay}><span>{item.label}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}
