import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import img1 from "../../../dist/assets/about/MyImg.png"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={img1}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I'm a frontend developer with experience in building responsive and optimized sites.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimized back-end systems and APIs (Basic).</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Github</h3>
              <p>Open-source contributor, raising PRs to improve projects, passionate about clean UI & design systems.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
