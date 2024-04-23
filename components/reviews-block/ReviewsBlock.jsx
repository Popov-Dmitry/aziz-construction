import React from "react";
import styles from "./reviews-block.module.css";
import Reviews from "@/components/reviews/reviews";
import { reviewsData } from "@/data";

const ReviewsBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Our Testimonials</div>
        <div className={styles.subtitle}>What Our Clients Says About Us</div>
      </div>
      <Reviews reviews={reviewsData} className={styles.reviews} />
      <div className={styles.raitingSummary}>
        <span className={styles.raitingSummaryBold}>Google</span> rating score: <span className={styles.raitingSummaryBold}>{(reviewsData.map((item) => item.raiting).reduce((prev, curr) => prev + curr) / reviewsData.length).toFixed(1)}</span> of 5, based on <span className={styles.raitingSummaryBold}>{reviewsData.length}</span> reviews
      </div>
    </div>
  );
};

export default ReviewsBlock;