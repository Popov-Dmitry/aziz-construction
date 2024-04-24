import React from "react";
import styles from "./service.module.css";
import { newConstructionData } from "@/data";
import Image from "next/image";
import { unslug } from "@/utils/unslug";
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";
import GoogleReviewsSection from "@/components/sections/google-reviews-section/GoogleReviewsSection";
import FaqSection from "@/components/sections/faq-section/FaqSection";
import YoutubeReviewsSection from "@/components/sections/youtube-reviews-section/YoutubeReviewsSection";
import ContactUsSection from "@/components/sections/contact-us-section/ContactUsSection";

export async function generateMetadata({ params }) {
  return {
    title: `${unslug(params?.slug)} in San Francisco bay area | Aziz Construction`,
    description: `${unslug(params?.slug)} in San Francisco bay area`,
    openGraph: {
      title: `${unslug(params?.slug)} in San Francisco bay area | Aziz Construction`,
      url: `https://azizconstruction.com/our-services/${params?.slug}`
    },
    twitter: {
      title: `${unslug(params?.slug)} in San Francisco bay area | Aziz Construction`,
      description: `${unslug(params?.slug)} in San Francisco bay area`
    }
  };
}

const Service = ({ params }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url("/services/${params.slug}/cover.jpeg")` }}
    >
      <Breadcrumbs useDefaultContainer />
      <div className={styles.wrapper}>
        {newConstructionData[params.slug].map((value, index) => (
          <div key={value.title} className={styles.row}>
            <div className={styles.column}>
              <Image
                src={`/services/${params.slug}/${index + 1}.jpeg`}
                alt=""
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.column}>
              <div className={styles.title}>{value.title}</div>
              <div className={styles.description}>{value.description}</div>
            </div>
          </div>
        ))}
        <div className={styles.row}>
          <div className={styles.bottom}>
            <GoogleReviewsSection />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.bottom}>
            <FaqSection />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.bottom}>
            <YoutubeReviewsSection />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.bottom}>
            <ContactUsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;