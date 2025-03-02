import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mamta Thakur</h1>
        <p className={styles.description}>
          I am a frontend developer Who loves to build the dynamic and
          responsive websites ensuring to give best exprience to user{" "}
        </p>
        <a className={styles.contactBtn} target="blank" href="mailto:nehata2345@gmail.com">
          contact me
        </a>
      </div>

      <img
        className={styles.heroImg}
        src="../../../assets/hero/heroImage.png"
        alt="heroimg"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
