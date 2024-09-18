import React from "react";

import styles from "./AwardCard.module.css";
import { getImageUrl } from "../../utils"

export const AwardCard = ({award: { title, imageSrc, description}}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        <a href={source} className={styles.link}>
          Link
        </a>
      </div>
    </div>
  );
};