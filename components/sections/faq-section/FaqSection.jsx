import React from "react";
import styles from "./faq-section.module.css";
import AccordionsGroup from "@/components/elements/accordions-group/AccordionsGroup";
import { faqData } from "@/data";
import Image from "next/image";

const FaqSection = () => {
  return (
    <div className={styles.twoColsFlex}>
      <div className={styles.leftColumn}>
        <div className={styles.title}>Ask Questions</div>
        <div className={styles.subtitle}>Frequently Asked Questions</div>
        <AccordionsGroup data={faqData} />
      </div>
      <div className={styles.photo}>
        <Image src="/home/faq.jpeg" alt="" fill objectFit="cover" />
      </div>
    </div>
  );
};

export default FaqSection;