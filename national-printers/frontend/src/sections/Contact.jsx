import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.header}>
        <p className="section-tag" style={{ color: '#0d1b2a' }}>Get In Touch</p>
        <h2 className="section-title" style={{ color: '#0d1b2a' }}>Contact <span style={{ color: '#e63946' }}>&amp; Location</span></h2>
      </div>
      <div className={styles.inner}>
        <div className={styles.info}>
          <div className={styles.item}>
            <div className={styles.iconBox}>📞</div>
            <div>
              <h4>Phone / WhatsApp</h4>
              <a href="tel:9325832543">9325832543</a>
              <div className={styles.btnRow}>
                <a href="tel:9325832543" className={styles.phoneBtn}>📞 Call Now</a>
                <a href="https://wa.me/919325832543?text=Hello%2C%20I%20want%20to%20inquire%20about%20Mandap%20Decoration" className={styles.waBtn} target="_blank" rel="noreferrer">💬 WhatsApp</a>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.iconBox}>📍</div>
            <div>
              <h4>Address</h4>
              <p>12/270 Bunglow Road,<br />Opposite IM Fit Club Galli,<br />Ichalkaranji, Maharashtra 416115</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.iconBox}>🕐</div>
            <div>
              <h4>Working Hours</h4>
              <p>Monday – Sunday: 9:00 AM – 9:00 PM</p>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.map}>
            <iframe
              src="https://maps.google.com/maps?q=12/270+Bunglow+Road+Club+Galli+Ichalkaranji+Maharashtra&output=embed&z=15"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shop Location"
            />
          </div>
          <div className={styles.mapBtns}>
            <a href="https://www.google.com/maps/search/Original+National+Printers+Ichalkaranji" target="_blank" rel="noreferrer" className={styles.mapBtn}>📍 Open Maps</a>
          </div>
        </div>
      </div>
    </section>
  );
}
