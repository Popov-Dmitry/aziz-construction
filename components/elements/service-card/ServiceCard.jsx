import React from "react";
import styles from "./service-card.module.css";
import Image from "next/image";
import Button from "@/components/elements/button/Button";

const ServiceCard = ({ src, title, description, href }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Image src={src} alt={title} fill className={styles.fitCover} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <Button text="Read more" href={href} className={styles.button} />
      </div>
    </div>
  );
};

export default ServiceCard;