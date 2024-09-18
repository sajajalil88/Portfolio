import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Mobile Application Developer</h3>
              <p>
                <br></br>
              As an iOS developer, I build applications using React Native and SwiftUI, integrating them with Firebase, Adjust, and ad platforms like Google Ads and AdMob. I also manage app testing and publishing on the Apple App Store.
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Full Stack Freelance Developer</h3>
              <br></br>

              <p>
              I specialize in full stack development using technologies such as the MERN stack, Laravel, PHP, Angular, MySQL, and more. I build dynamic web applications, design and integrate APIs, and provide end-to-end development solutions.

              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Software Engineer Intern</h3>
                              <br></br>
              <p>
              Contributed to the development of the Technical Architecture Portal by implementing features like sorting, filtering, and searching, while enhancing both technical and soft skills.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};