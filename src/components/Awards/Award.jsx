import React from "react";

import styles from "./Award.module.css";

import awards from "../../data/awards.json"
import { AwardCard } from "./AwardCard";

export const Award = () => {
  return (
    <section className={styles.container} id="award">
      <h2 className={styles.title}>Awards</h2>
      <div className={styles.projects}>
        {awards.map((award, id) => {
          return <AwardCard key={id} award={award} />;
        })}
      </div>
    </section>
  );
};