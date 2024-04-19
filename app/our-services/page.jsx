import React from "react";
import styles from "./our-services.module.css";
import Services from "@/components/services/Services";

export async function generateMetadata({ params }) {
  return {
    title: "Our Services - Aziz Construction",
    description: "Our Services",
    openGraph: {
      title: "Our Services - Aziz Construction",
      url: "https://azizconstruction.com/our-services/"
    },
    twitter: {
      title: 'Our Services - Aziz Construction',
      description: 'Our Services',
    },
  }
};

const OurServices = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.background}>
          <div className={styles.width}>
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;