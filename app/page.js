import Image from "next/image";
import styles from "./page.module.css";
import { whyChooseUsData, recentWorksData } from "@/data";
import AdvantageCard from "@/components/elements/advantage-card/AdvantageCard";
import Sns from "@/components/elements/sns/Sns";
import OurServicesSection from "@/components/sections/our-services-section/OurServicesSection";
import WorkCard from "@/components/elements/work-card/WorkCard";
import Button from "@/components/elements/button/Button";
import GoogleReviewsSection from "@/components/sections/google-reviews-section/GoogleReviewsSection";
import { joinClassNames } from "@/utils/join-class-names";
import FaqSection from "@/components/sections/faq-section/FaqSection";
import YoutubeReviewsSection from "@/components/sections/youtube-reviews-section/YoutubeReviewsSection";
import ContactUsSection from "@/components/sections/contact-us-section/ContactUsSection";
import AreasServedSection from "@/components/sections/areas-served-section/AreasServedSection";

const jsonLd = {
  "@context": "http://www.schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Aziz Construction",
  url: "https://azizconstruction.com/",
  logo: "https://azizconstruction.com/image/lOGO-01.png",
  description:
    "Looking for the best general contracting services in San Francisco bay area? Look no further than Aziz Construction. Contact us today for a free quote!",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fremont",
    addressRegion: "CA ",
    postalCode: "94538",
    addressCountry: "USA"
  },
  hasMap: "https://maps.app.goo.gl/UH3tS4oYdBFxRqwG6",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "(510) 478-3188",
    contactType: "Phone"
  }
};

const mainInfoBlock = () => (
  <div className={styles.main}>
    <div className={styles.slideshow} />
    <div className={styles.slideshow} />
    <div className={styles.slideshow} />
    <div className={styles.slideshow} />
    <div className={styles.slideshow} />
    <div className={styles.slideshow} />
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        {/*<Button className={styles.license} text="License# 1103807" />*/}
        <div className={styles.mainText1}>
          Top-notch construction solutions at competitive rates in San Francisco
          Bay Area
        </div>
        <div className={styles.mainDivider} />
        <div className={styles.mainText2}>
          Innovative Concepts, Creative Design, Flawless Execution
        </div>
        <div className={styles.mainText3}>
          We are a team of highly skilled professionals committed to delivering
          top-notch construction solutions to meet all your needs.
        </div>
        <div className={styles.mainButtons}>
          <Button
            text="Call Now"
            color="black"
            href="https://calendly.com/azizconstruction"
            newTab
            className={styles.callButton}
          />
          <Button
            text="Get A Quote"
            href="/contact-us"
            className={styles.getAQuoteButton}
          />
        </div>
      </div>
    </div>
  </div>
);

const aboutBlock = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div
        className={joinClassNames(styles.twoColsFlex, styles.aboutContainer)}
      >
        <div className={styles.leftColumn}>
          <div className={styles.title}>About Us</div>
          <h1 className={styles.aboutSlogan}>
            Constructive Partners in Building Your Future
          </h1>
          <div className={styles.aboutDescription}>
            Welcome to Aziz Construction, where craftsmanship and family legacy
            meet. With years of hands-on experience and guidance from industry
            experts, we have established a general contractor business that aims
            to stand the test of time. At Aziz Construction, we believe in
            creating a lasting reputation for excellence, delivering quality
            workmanship, and building a foundation for future generations.
          </div>
          <div className={styles.aboutDescription}>
            {"Let's build together!"}
          </div>
        </div>
        <div className={styles.aboutPhoto}>
          <Image src="/home/aziz.jpeg" alt="" fill className={styles.fitCover} />
        </div>
      </div>
    </div>
  </div>
);

const areasServedBlock = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <AreasServedSection />
    </div>
  </div>
);

const whyChooseUsBlock = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.subtitle}>Why Choose Us</div>
      <Sns fill="#D53446" size="lg" className={styles.sns} />
      <div className={styles.twoColsGrid}>
        {whyChooseUsData.map((item) => (
          <AdvantageCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  </div>
);

const servicesBlock = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <OurServicesSection />
    </div>
  </div>
);

const faqBlock = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <FaqSection />
    </div>
  </div>
);

const recentWorksBock = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Our Gallery</div>
        <div className={styles.subtitle}>Recent Works</div>
      </div>
      <div className={styles.recentWorks}>
        {recentWorksData.map((item) => (
          <WorkCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  </div>
);

const clientsFeedbackBlock = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <YoutubeReviewsSection />
    </div>
  </div>
);

const reviewsBlock = () => (
  <div className={styles.wrapper}>
    <GoogleReviewsSection />
  </div>
);

const contactUsBlock = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <ContactUsSection className={styles.contactUs} />
    </div>
  </div>
);

export default function Home() {
  return (
    <div className={styles.home}>
      {mainInfoBlock()}
      {areasServedBlock()}
      {aboutBlock()}
      {whyChooseUsBlock()}
      {servicesBlock()}
      {faqBlock()}
      {recentWorksBock()}
      {clientsFeedbackBlock()}
      {reviewsBlock()}
      {contactUsBlock()}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
