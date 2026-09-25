import { interests } from '../../data/portfolioData.js'
import styles from './PersonalSide.module.css'

function PersonalSide() {
  return (
    <section
      id="personal-side"
      className={styles.personalSide}
      aria-labelledby="personal-side-heading"
    >
      <div className={`container ${styles.layout}`}>
        <div className={styles.mainPanel}>
          <p className={styles.eyebrow}>Personal Side</p>
          <h2 id="personal-side-heading">Beyond the screen</h2>
          <p className={styles.introduction}>
            Technology is a major part of my life, but I also enjoy activities that help
            me stay curious, recharge, and see things from different perspectives.
          </p>

          <ul className={styles.interests} aria-label="Personal interests">
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>

        <aside className={styles.principles} aria-label="Working principles">
          <p className={styles.principlesLabel}>How I work</p>
          <ol>
            <li>
              <span aria-hidden="true">01</span>
              <p>Understand before building</p>
            </li>
            <li>
              <span aria-hidden="true">02</span>
              <p>Learn through practice</p>
            </li>
            <li>
              <span aria-hidden="true">03</span>
              <p>Open to feedback</p>
            </li>
          </ol>
        </aside>
      </div>
    </section>
  )
}

export default PersonalSide
