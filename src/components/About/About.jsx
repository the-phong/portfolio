import { quickInfo } from '../../data/portfolioData.js'
import styles from './About.module.css'

function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <div className={`container ${styles.layout}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>About</p>
          <h2 id="about-heading">Curious by nature, practical by choice.</h2>
          <p className={styles.lead}>
            I learn best when I can connect knowledge with a real problem. My approach is
            to understand the context, study relevant materials, observe the problem
            carefully, and then apply what I have learned to build a solution.
          </p>

          <div className={styles.aboutMe}>
            <h3>About Me</h3>
            <p>
              I am a proactive learner who enjoys exploring new knowledge through
              practical problems. One of my strongest qualities is the ability to learn
              independently, search for useful information, and observe a problem from
              different perspectives. When facing something difficult, I usually begin by
              studying related materials, connecting the important ideas, and then
              applying them step by step. I can work both independently and in a team, and
              I value feedback because it helps me improve the way I think and build.
            </p>
          </div>
        </div>

        <aside className={styles.quickInfo} aria-labelledby="quick-info-heading">
          <div className={styles.quickInfoHeading}>
            <span aria-hidden="true">01</span>
            <h3 id="quick-info-heading">Quick Info</h3>
          </div>

          <dl className={styles.infoList}>
            {quickInfo.map((item) => (
              <div className={styles.infoRow} key={item.label}>
                <dt>{item.label}</dt>
                <dd>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}

export default About
