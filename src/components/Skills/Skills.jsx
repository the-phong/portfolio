import { skillGroups } from '../../data/portfolioData.js'
import styles from './Skills.module.css'

function Skills() {
  return (
    <section id="skills" className={styles.skills} aria-labelledby="skills-heading">
      <div className={`container ${styles.layout}`}>
        <header className={styles.heading}>
          <p>Skills &amp; Tools</p>
          <h2 id="skills-heading">Skills and tools</h2>
        </header>

        <div className={styles.skillCanvas}>
          {skillGroups.map((group) => (
            <div
              className={`${styles.skillGroup} ${styles[group.id]}`}
              key={group.id}
            >
              <h3>{group.label}</h3>
              <ul className={styles.skillList}>
                {group.skills.map((skill) => (
                  <li
                    className={`${styles.skillWord} ${styles[skill.emphasis]}`}
                    key={skill.name}
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
