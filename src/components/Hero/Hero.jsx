import { useState } from 'react'
import styles from './Hero.module.css'

function Hero() {
  const [imageStatus, setImageStatus] = useState('loading')

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.layout}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Personal Portfolio</p>

          <h1 id="hero-heading" className={styles.title}>
            <span>Hello,</span>
            <span>
              I am <strong>The Phong</strong>,
            </span>
            <span>Software Developer &amp;</span>
            <span>Cybersecurity Student</span>
          </h1>

          <p className={styles.introduction}>
            I am a fourth-year Information Security student at PTIT, currently
            strengthening my software development and cybersecurity skills through
            hands-on learning and practical projects. I enjoy understanding how things
            work, exploring problems from different angles, and turning what I learn into
            solutions that can be applied in practice.
          </p>

          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.primaryButton}`} href="mailto:phong245ntp@gmail.com">
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

        <div className={styles.portraitArea}>
          <div className={styles.dots} aria-hidden="true">
            <span className={`${styles.dot} ${styles.dotOne}`} />
            <span className={`${styles.dot} ${styles.dotTwo}`} />
            <span className={`${styles.dot} ${styles.dotThree}`} />
            <span className={`${styles.dot} ${styles.dotFour}`} />
            <span className={`${styles.dot} ${styles.dotFive}`} />
          </div>

          <div className={styles.portraitFrame}>
            {imageStatus !== 'error' && (
              <img
                className={`${styles.portraitImage} ${imageStatus === 'loaded' ? styles.portraitImageLoaded : ''}`}
                src="/assets/profile.jpg"
                alt="Portrait of Nguyen The Phong"
                aria-hidden={imageStatus !== 'loaded'}
                onLoad={() => setImageStatus('loaded')}
                onError={() => setImageStatus('error')}
              />
            )}

            {imageStatus !== 'loaded' && (
              <div
                className={styles.imageFallback}
                role={imageStatus === 'error' ? 'img' : undefined}
                aria-label={imageStatus === 'error' ? 'Portrait placeholder for Nguyen The Phong' : undefined}
                aria-hidden={imageStatus === 'loading'}
              >
                <span className={styles.fallbackInitials}>NTP</span>
                <span className={styles.fallbackLabel}>Photo coming soon</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
