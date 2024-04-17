"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from  "./about-us.module.css";
import { flipCardsData, timelineData } from "@/data";
import TimelineCard from "@/components/timeline-card/TimelineCard";
import Image from "next/image";
import ReviewsBlock from "@/components/reviews-block/ReviewsBlock";
import FlipCard from "@/components/flip-card/FlipCard";
import Button from "@/components/button/Button";
import { useBreakpoints } from "@/hooks/use-breakpoints";

const AboutUs = () => {
  const [timelinePosition, setTimelinePosition] = useState(0);
  const [lineOffset, setLineOffset] = useState(0);
  const lineRef = useRef();
  const iconsRef = useRef([]);
  const breakpoint = useBreakpoints();

  const handleScroll = useCallback(() => {
    const offset = window.scrollY -
      timelinePosition +
      document.getElementById("header")?.clientHeight +
      window.innerHeight / 2 -
      iconsRef?.current[0]?.offsetTop;
    setLineOffset(offset);
  }, [timelinePosition, iconsRef?.current[0]?.offsetTop]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
}, [handleScroll]);

  useEffect(() => {
    if (lineRef.current) {
      setTimelinePosition(lineRef.current.getBoundingClientRect().top + window.scrollY)
    }
  }, [lineRef.current]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <div className={styles.aboutUsBlock}>
            <div className={styles.title}>About Us</div>
            <div className={styles.subtitle}>General Construction Services in San Francisco, Bay Area</div>
            <div className={styles.aboutUsText}>
              Welcome to Aziz Construction, where craftsmanship and family legacy meet. With years of hands-on experience and guidance from industry experts, I have established a general contractor business in San Fransisco, Bay Area, that aims to stand the test of time. At Aziz Construction, we believe in creating a lasting reputation for excellence, delivering quality workmanship, and building a foundation for future generations.
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.timelineBlock}>
            {timelineData.map((item, index) => (
              <div className={styles.timelineRow} key={item.title}>
                <div className={styles.timelineCardWrapper}>
                  <TimelineCard
                    title={item.title}
                    description={item.description}
                    arrowDirection={breakpoint !== "lg" ? "left" : index % 2 === 0 ? "right" : "left"}
                  />
                </div>
                <div
                  className={
                    lineOffset > iconsRef?.current[index]?.offsetTop - iconsRef?.current[0]?.offsetTop
                      ? styles.timelineIconActive
                      : styles.timelineIcon
                  }
                  ref={el => iconsRef.current[index] = el}
                  >
                  <Image src={item.src} alt="" width={16} height={16} />
                </div>
              </div>
            ))}
            <div
              ref={lineRef}
              className={styles.timeline}
              style={{
                background: `linear-gradient(to bottom, #D53446 ${lineOffset}px, #e8e8f6 0)`,
                top: iconsRef?.current[0]?.offsetTop,
                height: iconsRef?.current[iconsRef?.current.length - 1]?.offsetTop - iconsRef?.current[0]?.offsetTop
              }}
            />
            <div className={styles.timelineBottomText}>
              At Aziz Construction, we understand that your construction project is not just a structure; it’s an investment in your future. We are here to turn your vision into reality, create spaces that inspire, and build a foundation for generations to come. Contact us today to discuss your project and let us be a part of your journey.
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.benefitsBlock}>
            <div className={styles.benefitsLeftColumn}>
              <div className={styles.title}>About Us</div>
              <div className={styles.subtitleSmall}>Benefits of Choosing Us</div>
              <div className={styles.benefitsText}>
                When it comes to choosing construction services in San Francisco, Bay Area, Aziz Construction stands out as the premier choice. Our dedication to superior quality, meticulous attention to detail, and total concern for our client’s needs allow us to exceed their wildest dreams consistently. We provide a wide variety of services, including general contracting, kitchen and bathroom remodeling, electrical services, and flooring, all of which may be customized to fit your unique requirements. We prioritize transparent communication, providing you with peace of mind as we keep you informed at every step of the process. Choose our services, and let us transform your vision into reality with unmatched craftsmanship and an unwavering commitment to quality.
              </div>
            </div>
            <div className={styles.benefitsPhoto}>
              <Image src="/about-us/benefits-of-choosing-us.jpeg" alt="" fill objectFit="cover" />
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <ReviewsBlock />
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
                href="/get-a-quote"
              />
            </div>
            {flipCardsData.map((item) => (
              <FlipCard {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;