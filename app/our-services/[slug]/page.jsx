import React from "react";
import styles from "./service.module.css";
import { unslug } from "@/utils/unslug";
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";
import GoogleReviewsSection from "@/components/sections/google-reviews-section/GoogleReviewsSection";
import FaqSection from "@/components/sections/faq-section/FaqSection";
import YoutubeReviewsSection from "@/components/sections/youtube-reviews-section/YoutubeReviewsSection";
import ContactUsSection from "@/components/sections/contact-us-section/ContactUsSection";
import { redirect } from "next/navigation";
import PageHeader from "@/components/sections/page-header/PageHeader";
import { getService } from "@/lib/api";
import ServiceRow from "@/components/elements/service-row/ServiceRow";

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

const Service = async ({ params }) => {
  const service = await getService(params.slug)
  if (!service) {
    redirect("/our-services");
  }

  return (
    <div>
      <Breadcrumbs useDefaultContainer />
      <PageHeader
        title={service.name}
        subtitle={service.heading}
        description={service.description}
        src={service.cover?.url}
        contactUsId="contact-us"
      />
      <div>
        <ServiceRow
          className={styles.row}
          title={service.fIrstSectionHeading}
          description={service.firstSectionDescription}
          src={service.firstSectionImage?.url}
        />
        <ServiceRow
          className={styles.row}
          title={service.secondSectionTitle}
          description={service.secondSectionDescription}
          src={service.secondSectionImage?.url}
        />
        <ServiceRow
          className={styles.row}
          title={service.thirdSectionTitle}
          description={service.thirdSectionDescription}
          src={service.thirdSectionImage?.url}
        />
        <ServiceRow
          className={styles.row}
          title={service.fourthSectionTitle}
          description={service.fourthSectionDescription}
          src={service.fourthSectionImage?.url}
        />
        <ServiceRow
          className={styles.row}
          title={service.fifthSectionTitle}
          description={service.fifthSectionDescription}
          src={service.fifthSectionImage?.url}
        />
        <div className={styles.row}>
          <div className={styles.bottom}>
            <GoogleReviewsSection />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.bottom}>
            <FaqSection
              accordionClassname={styles.accordion}
              data={service.faqSectionCollection.items}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.bottom}>
            <YoutubeReviewsSection />
          </div>
        </div>
        <div className={styles.row} id="contact-us">
          <div className={styles.bottom}>
            <ContactUsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;