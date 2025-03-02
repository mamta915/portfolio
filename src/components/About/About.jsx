import React from "react";
import styles from "./about.module.css";
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>About</h1>
      <div className={styles.content}>
        {/* <img src={getImageurl("about/aboutImage.png")} alt='mesitting with laptop'/> */}
        <img
          src="../../../assets/about/aboutImage.png"
          alt="aboutimg"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="../../../assets/about/cursorIcon.png" alt="aboutimg" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I'm a Frontend Developer who loves to build responsive website</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="../../../assets/about/serverIcon.png" alt="aboutimg" />
            <div className={styles.aboutItemText}>
              <h3>Backend DEveloper</h3>
              <p>I also have a good hand in backend using Node, Express and Mongo , SQL as databases</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="../../../assets/about/uiIcon.png" alt="aboutimg" />
            <div className={styles.aboutItemText}>
              <h3>UI Design</h3>
              <p>Also have knowledge about FIGMA to create and appply cool UI designs</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
