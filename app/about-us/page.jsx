import React from "react";
import styles from "./about-us.module.css";
import { flipCardsData } from "@/data";
import Image from "next/image";
import GoogleReviewsSection from "@/components/sections/google-reviews-section/GoogleReviewsSection";
import FlipCard from "@/components/elements/flip-card/FlipCard";
import Button from "@/components/elements/button/Button";
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";
import TimelineSection from "@/components/sections/timeline-section/TimelineSection";

export async function generateMetadata({ params }) {
  return {
    title: "Reliable General Construction Services in San Francisco, Bay Are | Aziz Construction",
    description: "Aziz Construction - Your trusted partner for general construction services in San Francisco, Bay Area. Call now for quality craftsmanship & customized solutions",
    openGraph: {
      title: "Reliable General Construction Services in San Francisco, Bay Are | Aziz Construction",
      url: "https://azizconstruction.com/about-us/"
    },
    twitter: {
      title: 'Reliable General Construction Services in San Francisco, Bay Are | Aziz Construction',
      description: 'Aziz Construction - Your trusted partner for general construction services in San Francisco, Bay Area. Call now for quality craftsmanship & customized solutions',
    },
  }
}

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <Breadcrumbs useDefaultContainer />
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <div className={styles.aboutUsBlock}>
            <div className={styles.title}>About Us</div>
            <div className={styles.subtitle}>General Construction Services in San Francisco, Bay Area</div>
            <div className={styles.aboutUsText}>
              Welcome to Aziz Construction, where craftsmanship and family legacy meet. With years of hands-on
              experience and guidance from industry experts, I have established a general contractor business in San
              Fransisco, Bay Area, that aims to stand the test of time. At Aziz Construction, we believe in creating a
              lasting reputation for excellence, delivering quality workmanship, and building a foundation for future
              generations.
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <TimelineSection />
        </div>
        <div className={styles.block}>
          <div className={styles.benefitsBlock}>
            <div className={styles.benefitsLeftColumn}>
              <div className={styles.title}>About Us</div>
              <div className={styles.subtitleSmall}>Benefits of Choosing Us</div>
              <div className={styles.benefitsText}>
                When it comes to choosing construction services in San Francisco, Bay Area, Aziz Construction stands out
                as the premier choice. Our dedication to superior quality, meticulous attention to detail, and total
                concern for our client’s needs allow us to exceed their wildest dreams consistently. We provide a wide
                variety of services, including general contracting, kitchen and bathroom remodeling, electrical
                services, and flooring, all of which may be customized to fit your unique requirements. We prioritize
                transparent communication, providing you with peace of mind as we keep you informed at every step of the
                process. Choose our services, and let us transform your vision into reality with unmatched craftsmanship
                and an unwavering commitment to quality.
              </div>
            </div>
            <div className={styles.benefitsPhoto}>
              <Image src="/about-us/benefits-of-choosing-us.jpeg" alt="" fill objectFit="cover" />
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <GoogleReviewsSection />
        </div>
        <div className={styles.block}>
          <div className={styles.flipCardsBlock}>
            <div className={styles.flipCardsLeft}>
              <div className={styles.flipCardsTitle}>
                GENERAL CONTRACTING SERVICES IN SAN FRANCISCO BAY AREA
              </div>
              <Button
                text="GET A QUOTE"
                variant="outlined"
                className={styles.flipCardsButton}
                href="/contact-us"
              />
            </div>
            {flipCardsData.map((item) => (
              <FlipCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;