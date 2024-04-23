import React from "react";
import Image from "next/image";
import styles from "./work-card.module.css";
import Link from "next/link";

const WorkCard = ({ src, title, href }) => {
  return (
    <Link href={href} className={styles.workCard}>
      <div className={styles.workCardPhoto}>
        <Image
          src={src}
          alt=""
          fill
        />
      </div>
      <div className={styles.workCardTitleContainer}>
        <div className={styles.workCardTitle}>
          {title}
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;