import styles  from './Contact.module.css';

const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="../../../assets/contact/emailIcon.png" alt="emailIcon" />
                <a href="https://nehata2345@gmail.com">MyEmail.com</a>
            </li>
            <li className={styles.link}>
                <img src="../../../assets/contact/linkedinIcon.png" alt="LinkedinIcon" />
                <a href="https://www.linkedin.com/in/mamta-thakur-83787a2a9/">Linkedin.com</a>
            </li>
            <li className={styles.link}>
                <img src="../../../assets/contact/githubIcon.png" alt="gitHubIcon" />
                <a href="https://github.com/mamta915">github.com</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
