import React from "react";
import styles from "./areas-served-section.module.css";
import Image from "next/image";
import Map from "@/components/elements/map/Map";

const AreasServedSection = () => {
  return (
    <div className={styles.areasServedSection}>
      <div>
        <div className={styles.title}>Areas Served</div>
        <div className={styles.text}>
          Our geographical focus is servicing home owners within the San Francisco Peninsula Bay Area including:
        </div>
        <div className={styles.row}>
          <Image src="/clock.svg" alt="" width={18} height={18} />
          <div className={styles.boldText}>8:00 AM - 8:00 PM</div>
        </div>
        <div className={styles.areas}>
          <li>Atherton</li>
          <li>Burlingame</li>
          <li>Foster City</li>
          <li>Half Moon Bay</li>
          <li>Hillsborough</li>
          <li>Menlo Park</li>
          <li>Millbrae</li>
          <li>Palo Alto</li>
          <li>Redwood City</li>
          <li>San Carlos</li>
          <li>San Mateo</li>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default AreasServedSection;