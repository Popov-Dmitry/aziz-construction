import React from "react";
import styles from "./faq-section.module.css";
import AccordionsGroup from "@/components/elements/accordions-group/AccordionsGroup";
import { faqData } from "@/data";
import Image from "next/image";

const FaqSection = ({ data = faqData, accordionClassname }) => {
  const jsonLd = {
    "@context ": "http://schema.org/",
    "@type": "FAQPage",
    "mainEntity": data.map((value) => ({
      "@type": "Question",
      "name": value.title,
      "acceptedAnswer": {
        "@type ": "Answer",
        "text": value.description
      }
    }))
  };

  return (
    <div className={styles.twoColsFlex}>
      <div className={styles.leftColumn}>
        <div className={styles.title}>Ask Questions</div>
        <div className={styles.subtitle}>Frequently Asked Questions</div>
        <AccordionsGroup data={data} accordionClassname={accordionClassname} />
      </div>
      <div className={styles.photo}>
        <Image src="/home/faq.jpeg" alt="" fill objectFit="cover" />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default FaqSection;