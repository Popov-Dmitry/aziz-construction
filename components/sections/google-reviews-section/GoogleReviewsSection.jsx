import React from "react";
import styles from "./googlereviews-section.module.css";
import Reviews from "@/components/elements/reviews/reviews";
import { reviewsData } from "@/data";
import { joinClassNames } from "@/utils/join-class-names";
import Link from "next/link";

const GoogleReviewsSection = ({ className }) => {
  return (
    <div className={joinClassNames(styles.container, className)}>
      <div className={styles.header}>
        <div className={styles.title}>Our Testimonials</div>
        <div className={styles.subtitle}>What Our Clients Says About Us</div>
      </div>
      <Reviews reviews={reviewsData} className={styles.reviews} />
      <Link href="https://maps.app.goo.gl/63AE7NpeyVnuYKk88" target="_blank" className={styles.raitingSummary}>
        <span className={styles.raitingSummaryBold}>Google</span> rating score: <span className={styles.raitingSummaryBold}>5.0</span> of 5, based on <span className={styles.raitingSummaryBold}>45</span> reviews
      </Link>
    </div>
  );
};

export default GoogleReviewsSection;