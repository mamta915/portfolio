import styles from './about.module.css';
const About = () => {
    return (
        <section className={styles.container} id="about">
            <h1 className={styles.title}>About</h1>
            <div className={styles.content}>
                {/* <img src={getImageurl("about/aboutImage.png")} alt='mesitting with laptop'/> */}
                <img src='../../../assets/about/aboutImage.png' alt='aboutimg' className={styles.imageIcon}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src='../../../assets/about/cursorIcon.png' alt='aboutimg' 
     />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend DEveloper</h3>
                            <p>Frontend developer fresher</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src='../../../assets/about/serverIcon.png' alt='aboutimg'  />
                        <div className={styles.aboutItemText}>
                            <h3>backend DEveloper</h3>
                            <p>knowledge backend nodejs express api</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src='../../../assets/about/uiIcon.png' alt='aboutimg'  />
                        <div className={styles.aboutItemText}>
                            <h3>UI Design</h3>
                            <p>Frontend developer fresher</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
