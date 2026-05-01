import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919325832543?text=Hello%2C%20I%20want%20to%20inquire%20about%20Mandap%20Decoration"
      className={styles.btn}
      target="_blank"
      rel="noreferrer"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      💬
    </a>
  );
}
