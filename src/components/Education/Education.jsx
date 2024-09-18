import React from "react";
import styles from "./Education.module.css";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Bachelor in Computer Science At Antonine University</h3>
              <br></br>
              <p>
              Grade: 3.6/4
              </p>
              <br></br>
              <p>
                Graduated with Honors as 2024 Class Valedictorian
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Life Science High School Diploma at Haret Hreik High School</h3>
              <br></br>

              <p>
                Grade: 18/20
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};