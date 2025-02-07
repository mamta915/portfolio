
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I  Mamta</h1>
                <p className={styles.description}>I am a frontend developer and I have done internship in strategy for 6 month in React JS . React out if you like to more </p>
                 <a className={styles.contactbtn} href="https://nehata2345@gmail.com">contact me</a> 
            </div>
            
            <img className={styles.heroimg} src='../../../assets/hero/heroImage.png' alt="heroimg" />
            <div className={styles.topblur}>    </div>
            <div className={styles.bottomblur} />
        </section>
    )
}

export default Hero
