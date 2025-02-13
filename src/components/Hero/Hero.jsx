import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Narendra</h1>
        <p className={styles.description}>
        I am a frontend developer with skills in HTML, CSS, 
        JavaScript, and React. I enjoy creating responsive and easy-to-use websites. 
        I also have a strong foundation in Java and C/C++, which helps me solve problems effectively. 
        I am eager to learn and grow in the tech industry.
        </p>
        <a href="mailto:rachhanarendra123@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};