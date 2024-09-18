import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Saja</h1>
        <p className={styles.description}>
   A Software developer with a degree in cs from Antonine University, specializing in web and mobile development. I have experience with various technologies, including the MERN Stack, Laravel, React Native, Angular, and more. Feel free to reach out if you're interested in collaborating!
</p>

        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/me.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};