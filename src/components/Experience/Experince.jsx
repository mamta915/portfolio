import skill from '../../data/skills.json';
import history from '../../../src/data/history.json';
import styles from './experience.module.css';
const Experience = () => {
    return (
        <section className={styles.container} id="experience" >
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                    <div className={styles.skills}>
                        {
                             skill.map((skill, id) => {
                                return (
                                    <div key={id} className={styles.skill}>
                                        <div className={styles.skillImageContainer}>
                                            {
                                                <img src={skill.imageSrc} alt={skill.title} />
                                            }
                                        </div>
                                        <p>{skill.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                




                <ul className={styles.history}>
                    {
                        history.map((history, id) => {
                            return (
                                <li key={id} className={styles.historyItem}>

                                    <img src={history.imageSrc} alt={`${history.organisation} logo`} />
                                    {/* <img src='../../../assets/history/google.png.png' alt='googleimg' /> */}

                                    <div className={styles.historyItemDetails}>
                                        <h3>{`${history.role}, ${history.organisation}`}</h3>
                                        <p>{`${history.startDate}, ${history.enddate}`}</p>
                                        <ul>
                                            {history.experinces.map((experinces, id) => {
                                                return (
                                                    <li key={id}>
                                                        {experinces}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    );
};

export default Experience;
