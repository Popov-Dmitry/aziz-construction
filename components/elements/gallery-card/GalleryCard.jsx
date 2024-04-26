import React from "react";
import styles from "./gallery-card.module.css";
import Link from "next/link";
import Image from "next/image";

const GalleryCard = ({ title, src, href }) => {
  return (
    <Link href={href} className={styles.galleryCard}>
      <div className={styles.galleryCardImage}>
        <Image src={src} alt={title} fill />
      </div>
      <div className={styles.galleryCardTitle}>{title}</div>
    </Link>
  );
};

export default GalleryCard;