import React from "react";
import styles from "./our-services-section.module.css";
import { servicesData } from "@/data";
import ServiceCard from "@/components/elements/service-card/ServiceCard";

const OurServicesSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Our Services</div>
      <div className={styles.subtitle}>What We Offer</div>
      <div className={styles.services}>
        {servicesData.map((service) => (
          <ServiceCard
            key={service.link}
            src={service.image}
            title={service.title}
            description={service.description}
            href={service.link}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServicesSection;