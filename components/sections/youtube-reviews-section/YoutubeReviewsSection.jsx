import React from "react";
import styles from "@/app/page.module.css";
import { YouTubeEmbed } from "@next/third-parties/google";

const YoutubeReviewsSection = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>Clients Feedback</div>
        <div className={styles.subtitle}>Our Clients Reviews</div>
      </div>
      <div className={styles.twoColsFlex}>
        <YouTubeEmbed videoid="uop_Ps-PBlA" width={600} />
        <YouTubeEmbed videoid="vKwVM8xMsW8" width={600} />
      </div>
    </div>
  );
};

export default YoutubeReviewsSection;