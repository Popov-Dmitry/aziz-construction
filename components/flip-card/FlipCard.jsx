import React from "react";
import styles from "./flip-card.module.css";
import Image from "next/image";

const FlipCard = ({ src, title, description }) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <Image src={src} alt="" fill />
        </div>
        <div className={styles.flipCardBack}>
          <div className={styles.flipCardBackContent}>
            <div className={styles.flipCardBackTitle}>{title}</div> 
            <div className={styles.flipCardBackDescription}>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;