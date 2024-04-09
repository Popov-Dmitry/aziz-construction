import React from "react";
import Image from "next/image";
import styles from "./advantage-card.module.css";

const AdvantageCard = ({ src, title, description }) => {
  return (
    <div className={styles.advantageCard}>
      <Image src={src} alt="" width={64} height={64} />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default AdvantageCard;