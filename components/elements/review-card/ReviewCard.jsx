import React from "react";
import styles from "./review-card.module.css";
import Image from "next/image";

const ReviewCard = ({ src, fullName, date, raiting, comment }) => {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Review",
    "author": { "@type": "Person", "name": fullName },
    "itemReviewed": { "@type": "Book", "name": "kitchen remodeling " },
    "reviewRating": { "@type": "Rating", "ratingValue": raiting },
    "reviewBody": comment,
    "name": "What Our Clients Say About Us",
    "datePublished": date,
    "publisher": { "@type": "Organization", "name": "Google" }
  };

  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewCardHeader}>
        <div className={styles.reviewCardHeaderLeft}>
          <Image
            className={styles.photo}
            src={src}
            alt={fullName?.charAt(0)}
            height={40}
            width={40}
          />
          <div className={styles.data}>
            <div className={styles.fullName}>{fullName}</div>
            <div className={styles.date}>{date}</div>
          </div>
        </div>
        <Image src="/google-color.svg" alt="" height={20} width={20} />
      </div>
      <div className={styles.reviewCardContent}>
        <div className={styles.raiting}>
          {[...Array(raiting)].map((_, index) => (
            <Image src="/star.svg" alt="" height={16} width={16} key={index} />
          ))}
        </div>
        <div className={styles.comment}>{comment}</div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default ReviewCard;