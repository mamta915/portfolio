import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { imageSrc, title, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="blank">
          Demo
        </a>
        <a href={source} className={styles.link}target="blank" >  
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
