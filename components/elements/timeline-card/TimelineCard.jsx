import React from "react";
import styles from "./timeline-card.module.css";

const TimelineCard = ({ title, description, arrowDirection = "left" }) => {
  return (
    <div className={styles.timelineCard}>
      <div className={styles.timelineCardTitle}>
        {title}
      </div>
      <div className={styles.timelineCardDescription}>
        {description}
      </div>
      <div className={arrowDirection === "left" ? styles.timelineCardArrowLeft : styles.timelineCardArrowRight} />
    </div>
  );
};

export default TimelineCard;