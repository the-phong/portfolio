import { projects } from '../../data/portfolioData.js'
import styles from './Projects.module.css'

function Projects() {
  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-heading">
      <div className={`container ${styles.layout}`}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>Projects</p>
          <h2 id="projects-heading">A few things I have built</h2>
          <p className={styles.introduction}>
            I am still growing my project portfolio, so I keep this section focused on a
            small number of projects that reflect what I have actually worked on.
          </p>
        </header>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <article className={styles.project} key={project.name}>
              <a
                className={styles.projectLink}
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.projectHeading}>
                  <span className={styles.projectNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{project.name}</h3>
                  <span className={styles.externalIndicator} aria-hidden="true">
                    ↗
                  </span>
                </div>

                <p className={styles.description}>{project.description}</p>

                <ul className={styles.technologies} aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
