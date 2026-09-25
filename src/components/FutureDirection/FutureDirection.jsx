import styles from './FutureDirection.module.css'

function FutureDirection() {
  return (
    <section id="future" className={styles.future} aria-labelledby="future-heading">
      <div className={`container ${styles.layout}`}>
        <div className={styles.primaryPanel}>
          <p className={styles.eyebrow}>Future Direction</p>
          <h2 id="future-heading">Building depth through real engineering work</h2>
          <p>
            I want to continue developing at the intersection of software development and
            cybersecurity. My goal is to become an engineer who can not only build useful
            systems, but also understand how those systems behave, where they can fail,
            and how to make them more reliable and secure.
          </p>
        </div>

        <div className={styles.goals}>
          <div className={`${styles.goal} ${styles.nearTerm}`}>
            <span aria-hidden="true">01</span>
            <h3>Near-term goal</h3>
            <p>
              Strengthen software engineering fundamentals, build more complete projects,
              and gain practical experience in professional development and cybersecurity
              environments.
            </p>
          </div>

          <div className={`${styles.goal} ${styles.longTerm}`}>
            <span aria-hidden="true">02</span>
            <h3>Long-term goal</h3>
            <p>
              Grow into a technically strong engineer with solid development and
              cybersecurity skills, capable of working on complex systems and
              continuously adapting to new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FutureDirection
