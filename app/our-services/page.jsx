import React from "react";
import styles from "./our-services.module.css";
import OurServicesSection from "@/components/sections/our-services-section/OurServicesSection";
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";

export async function generateMetadata({ params }) {
  return {
    title: "Our Services - Aziz Construction",
    description: "Our Services",
    openGraph: {
      title: "Our Services - Aziz Construction",
      url: "https://azizconstruction.com/our-services/"
    },
    twitter: {
      title: "Our Services - Aziz Construction",
      description: "Our Services"
    }
  };
}

const OurServices = () => {
  return (
    <div className={styles.container}>
      <Breadcrumbs useDefaultContainer />
      <div className={styles.wrapper}>
        <OurServicesSection />
      </div>
    </div>
  );
};

export default OurServices;