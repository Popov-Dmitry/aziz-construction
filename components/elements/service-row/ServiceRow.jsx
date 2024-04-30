import React from "react";
import styles from "./service-row.module.css";
import Image from "next/image";

const ServiceRow = ({ title, src, description, className }) => {
  return (
    <div className={className}>
      <div className={styles.column}>
        <Image
          src={src}
          alt=""
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.column}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default ServiceRow;