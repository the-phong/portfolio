import { journeyItems } from '../../data/portfolioData.js'
import styles from './Journey.module.css'

function Journey() {
  return (
    <section id="journey" className={styles.journey} aria-labelledby="journey-heading">
      <div className={`container ${styles.layout}`}>
        <header className={styles.introPanel}>
          <p className={styles.eyebrow}>Journey</p>
          <h2 id="journey-heading">How I got here</h2>
          <p>
            My path has been shaped by university study, self-learning, and practical
            projects that helped me connect software development with cybersecurity.
          </p>
        </header>

        <ol className={styles.timeline}>
          {journeyItems.map((item, index) => (
            <li key={item.stage}>
              <div className={styles.stageMarker}>
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <p>{item.stage}</p>
              </div>
              <div className={styles.stageContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Journey
