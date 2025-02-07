import ProjectCard from "./ProjectCard"
import project from '../../data/Projects.json';
import styles from './projects.module.css';

const Projects = () => {
  return (
    <section id="project" className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {
                project.map((project,id)=>{
                  return(
                    <ProjectCard key={ id } project={project}/>
                  )

                })
              }
          </div>
                  
      </section>
    )
  }
  

export default Projects
