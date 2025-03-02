import skill from '../../data/skills.json';
import history from '../../../src/data/history.json';
import styles from './Experience.module.css';
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
                        history.map((historyItem, id) => {
                            return (
                                <li key={id} className={styles.historyItem}>

                                    <img src={historyItem.imageSrc} alt={`${historyItem.role} ${historyItem.organisation}`} />
                                    {/* <img src='../../../assets/history/google.png.png' alt='googleimg' /> */}

                                    <div className={styles.historyItemDetails}>
                                        <h3>{`${historyItem.role}, at ${historyItem.organisation}`}</h3>
                                        <p>{`${historyItem.startDate}, at ${historyItem.enddate}`}</p>
                                        <ul>
                                            {historyItem.experinces.map((experinces, id) => {
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
