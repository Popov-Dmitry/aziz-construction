"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useBreakpoints } from "@/hooks/use-breakpoints";
import styles from "./timeline-section.module.css";
import { timelineData } from "@/data";
import TimelineCard from "@/components/elements/timeline-card/TimelineCard";
import Image from "next/image";

const TimelineSection = () => {
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
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (lineRef.current) {
      setTimelinePosition(lineRef.current.getBoundingClientRect().top + window.scrollY);
    }
  }, []);

  return (
    <div className={styles.timelineBlock}>
      {timelineData.map((item, index) => (
        <div className={styles.timelineRow} key={item.title}>
          <div className={styles.timelineCardWrapper}>
            <TimelineCard
              title={item.title}
              description={item.description}
              arrowDirection={(index % 2 === 0 && breakpoint === "lg") ? "right" : "left"}
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
        At Aziz Construction, we understand that your construction project is not just a structure; it’s an
        investment in your future. We are here to turn your vision into reality, create spaces that inspire, and
        build a foundation for generations to come. Contact us today to discuss your project and let us be a part
        of your journey.
      </div>
    </div>
  );
};

export default TimelineSection;