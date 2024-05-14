import React from "react";
import styles from "./about-us.module.css";
import Image from "next/image";
import GoogleReviewsSection from "@/components/sections/google-reviews-section/GoogleReviewsSection";
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";
import TimelineSection from "@/components/sections/timeline-section/TimelineSection";
import PageHeader from "@/components/sections/page-header/PageHeader";
import ContactUsSection from "@/components/sections/contact-us-section/ContactUsSection";
import OurServicesSection from "@/components/sections/our-services-section/OurServicesSection";
import TeamSection from "@/components/sections/team-section/TeamSection";

export async function generateMetadata() {
  return {
    title: "Reliable General Construction Services in San Francisco, Bay Are | Aziz Construction",
    description: "Aziz Construction - Your trusted partner for general construction services in San Francisco, Bay Area. Call now for quality craftsmanship & customized solutions",
    openGraph: {
      title: "Reliable General Construction Services in San Francisco, Bay Are | Aziz Construction",
      description: "Aziz Construction - Your trusted partner for general construction services in San Francisco, Bay Area. Call now for quality craftsmanship & customized solutions",
      url: "https://azizconstruction.com/about-us/",
      type: "article",
      images: [{
        url: "https://azizconstruction.com/about-us/cover.jpeg",
        width: 800,
        height: 534,
        alt: "About Us",
        type: "image/jpeg"
      }]
    },
    twitter: {
      title: "Reliable General Construction Services in San Francisco, Bay Are | Aziz Construction",
      description: "Aziz Construction - Your trusted partner for general construction services in San Francisco, Bay Area. Call now for quality craftsmanship & customized solutions",
      images: ["https://azizconstruction.com/about-us/cover.jpeg"]
    },
    alternates: {
      canonical: "https://azizconstruction.com/about-us/"
    }
  };
}

const jsonLd = {
  "@context": "http://schema.org/",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://azizconstruction.com/about-us/"
  },
  "author": {
    "@type": "Organization",
    "name": " Aziz Construction"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Aziz Construction",
    "logo": {
      "@type": "ImageObject",
      "url": "https://azizconstruction.com/image/lOGO-01.png"
    }
  },
  "headline": "General Contractor in San Francisco Bay Area, CA | Aziz Construction",
  "image": "https://azizconstruction.com/image/lOGO-01.png",
  "datePublished": "2022-03-17",
  "dateModified": "2024-04-30"
};

const AboutUs = () => {
  return (
    <div>
      <Breadcrumbs useDefaultContainer />
      <div>
        <PageHeader
          title="About Us"
          subtitle="Let's Make Your Dream Home a Reality"
          description="When it comes to choosing construction services in San Francisco, Bay Area, Aziz Construction stands out as the premier choice. Our dedication to superior quality, careful attention to detail, and utmost respect for our client’s needs allow us to consistently exceed their dreams. We provide a wide variety of services, including general contracting, kitchen and bathroom remodeling, electrical services, and flooring, all of which may be customized to fit your unique requirements. We are committed to delivering the highest standard of work, ensuring that every project is a testament to our unwavering commitment to quality. We prioritize transparent communication, providing you with peace of mind as we keep you informed at every step of the process. Choose our services, and let us transform your vision into reality with unmatched craftsmanship and an unwavering commitment to quality."
          src="/about-us/cover.jpg"
          contactUsId="contact-us"
        />
        <div className={styles.block}>
          <div className={styles.blockWrapper}>
            <TeamSection />
          </div>
        </div>
        <div className={styles.block}>
          <TimelineSection />
        </div>
        <div className={styles.block}>
          <div className={styles.benefitsBlock}>
            <div className={styles.benefitsLeftColumn}>
              <div className={styles.title}>About Us</div>
              <div className={styles.subtitleSmall}>Benefits of Choosing Us</div>
              <div className={styles.benefitsText}>
                When it comes to choosing construction services in San Francisco, Bay Area, Aziz Construction stands out
                as the premier choice. Our dedication to superior quality, meticulous attention to detail, and total
                concern for our client’s needs allow us to exceed their wildest dreams consistently. We provide a wide
                variety of services, including general contracting, kitchen and bathroom remodeling, electrical
                services, and flooring, all of which may be customized to fit your unique requirements. We prioritize
                transparent communication, providing you with peace of mind as we keep you informed at every step of the
                process. Choose our services, and let us transform your vision into reality with unmatched craftsmanship
                and an unwavering commitment to quality.
              </div>
            </div>
            <div className={styles.benefitsPhoto}>
              <Image
                src="/about-us/benefits-of-choosing-us.jpeg"
                alt=""
                fill
                className={styles.fitCover}
              />
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <GoogleReviewsSection />
        </div>
        <div className={styles.block}>
          <div className={styles.blockWrapper}>
            <OurServicesSection />
          </div>
        </div>
        <div className={styles.block}>
          {/*<div className={styles.flipCardsBlock}>*/}
          {/*  <div className={styles.flipCardsLeft}>*/}
          {/*    <div className={styles.flipCardsTitle}>*/}
          {/*      GENERAL CONTRACTING SERVICES IN SAN FRANCISCO BAY AREA*/}
          {/*    </div>*/}
          {/*    <Button*/}
          {/*      text="GET A QUOTE"*/}
          {/*      variant="outlined"*/}
          {/*      className={styles.flipCardsButton}*/}
          {/*      href="/contact-us"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  {flipCardsData.map((item) => (*/}
          {/*    <FlipCard key={item.title} {...item} />*/}
          {/*  ))}*/}
          {/*</div>*/}
          <div className={styles.blockWrapper} id="contact-us">
            <ContactUsSection />
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default AboutUs;