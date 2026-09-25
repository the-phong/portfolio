import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <div className={`container ${styles.layout}`}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>Contact</p>
          <h2 id="contact-heading">Let&apos;s build something useful.</h2>
          <p className={styles.location}>Based in Hanoi, Vietnam.</p>
        </header>

        <div className={styles.actions}>
          <a
            className={`${styles.button} ${styles.primaryButton}`}
            href="mailto:phong245ntp@gmail.com"
          >
            Contact me
          </a>
          <a
            className={`${styles.button} ${styles.secondaryButton}`}
            href="https://github.com/the-phong"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
