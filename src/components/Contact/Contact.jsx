import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" className="img" style={{width:'30px'}}/>
          <a href="saja.jalil20@gmail.com">saja.jalil20@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
            style={{width:'30px'}}
          />
          <a href="https://www.linkedin.com/in/saja-jalil-710586241/">linkedin.com/sajajalil</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"  style={{width:'30px'}} />
          <a href="https://www.github.com/sajajalil88">github.com/sajajalil88</a>
        </li>
      </ul>
    </footer>
  );
};