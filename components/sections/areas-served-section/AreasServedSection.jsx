import React from "react";
import styles from "./areas-served-section.module.css";
import Image from "next/image";

const AreasServedSection = () => {
  return (
    <div className={styles.areasServedSection}>
      <div>
        <div className={styles.title}>Areas Served</div>
        <div className={styles.text}>
          Our geographical focus is servicing home owners within the San Francisco Peninsula Bay Area including:
        </div>
        <div className={styles.areas}>
          <li className={styles.area}>Atherton</li>
          <li className={styles.area}>Burlingame</li>
          <li className={styles.area}>Foster City</li>
          <li className={styles.area}>Half Moon Bay</li>
          <li className={styles.area}>Hillsborough</li>
          <li className={styles.area}>Menlo Park</li>
          <li className={styles.area}>Millbrae</li>
          <li className={styles.area}>Palo Alto</li>
          <li className={styles.area}>Redwood City</li>
          <li className={styles.area}>San Carlos</li>
          <li className={styles.area}>San Mateo</li>
        </div>
        <div className={styles.row}>
          <Image src="/clock.svg" alt="" width={18} height={18} />
          <div className={styles.boldText}>8:00 AM - 8:00 PM</div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1OXPRhfP98Ts_aZ70sJ6CHzuQEhvYIco&ehbc=2E312F&noprof=1"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default AreasServedSection;