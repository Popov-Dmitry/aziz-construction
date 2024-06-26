import React from "react";
import styles from "./youtube-reviews-section.module.css";
import { YouTubeEmbed } from "@next/third-parties/google";

const jsonLd1 = {
  "@context": "http://schema.org/",
  "@type": "VideoObject",
  "name": "Full House Renovation Testimonial",
  "description": "\"Exciting news for our valued clients! We've just posted a comprehensive video on YouTube showcasing our latest whole-house remodeling project. Dive in to witness the transformation and gather inspiration for your own home. Don't forget to subscribe and share!\"",
  "thumbnailUrl": "https://i.ytimg.com/vi/uop_Ps-PBlA/default.jpg",
  "uploadDate": "2023-09-25T04:21:58Z",
  "duration": "PT1M21S",
  "embedUrl": "https://www.youtube.com/embed/uop_Ps-PBlA",
  "interactionCount": "20"
};

const jsonLd2 = {
  "@context": "http://schema.org/",
  "@type": "VideoObject",
  "name": "Kitchen Remodel Testimonial in  San Jose",
  "description": "Welcome to our latest kitchen remodel showcase in San Jose, presented by Aziz Construction. Our team's expertise shines in creating custom spaces tailored to our clients' visions. Dive into this video to witness our detailed transformation process. If you're in San Jose  and considering a renovation, trust in our unmatched professionalism and quality. Contact Aziz Construction for a consultation today.  For exclusive insights and expert transformations, subscribe to our channel.",
  "thumbnailUrl": "https://i.ytimg.com/vi/vKwVM8xMsW8/default.jpg",
  "uploadDate": "2023-09-25T04:37:50Z",
  "duration": "PT1M44S",
  "embedUrl": "https://www.youtube.com/embed/vKwVM8xMsW8",
  "interactionCount": "22"
};

const YoutubeReviewsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Clients Feedback</div>
        <div className={styles.subtitle}>Our Clients Reviews</div>
      </div>
      <div className={styles.twoColsFlex}>
        <div className={styles.video}>
          <YouTubeEmbed videoid="uop_Ps-PBlA" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }}
          />
        </div>
        <div className={styles.video}>
          <YouTubeEmbed videoid="vKwVM8xMsW8" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
          />
        </div>
      </div>
    </div>
  );
};

export default YoutubeReviewsSection;