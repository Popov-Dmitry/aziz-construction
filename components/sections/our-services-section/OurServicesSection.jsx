import React from "react";
import styles from "./our-services-section.module.css";
import ServiceCard from "@/components/elements/service-card/ServiceCard";
import { getServices } from "@/lib/api";

const OurServicesSection = async () => {
  const services = await getServices();

  if (!services) {
    return;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Our Services</div>
      <div className={styles.subtitle}>What We Offer</div>
      <div className={styles.services}>
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            src={service.cover?.url}
            title={service.name}
            description={service.shortDescription}
            href={`/our-services/${service.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServicesSection;