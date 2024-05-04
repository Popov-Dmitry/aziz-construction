import React from "react";
import styles from "./contact-us.module.css";
import GetAQuoteSection from "@/components/sections/get-a-quote-seection/GetAQuoteSection";
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";

export async function generateMetadata({ params }) {
  return {
    title: "Contact Us - Aziz Construction",
    description: "Get A Quote",
    openGraph: {
      title: "Contact Us - Aziz Construction",
      description: "Home remodel inquiries, other inquiries, our office location in San Francisco, and where to find Aziz Construction online and on social media",
      url: "https://azizconstruction.com/contact-us/",
      type: "article",
      images: [{
        url: "https://azizconstruction.com/contact-us.jpeg",
        width: 1366,
        height: 519,
        alt: "Contact Us",
        type: "image/jpeg"
      }]
    },
    twitter: {
      title: "Contact Us - Aziz Construction",
      description: "Home remodel inquiries, other inquiries, our office location in San Francisco, and where to find Aziz Construction online and on social media",
      image: "https://azizconstruction.com/contact-us.jpeg"
    },
    alternates: {
      canonical: "https://azizconstruction.com/contact-us/",
    }
  };
}

const jsonLd = {
  "@context": "http://schema.org/",
  "@type": "LocalBusiness",
  "name": "",
  "image": "",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": " 530 Lytton Ave 2nd Floor",
    "addressLocality": "Palo Alto",
    "addressRegion": "CA",
    "postalCode": "94301",
    "addressCountry": "United States"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Wednesday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Thursday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  ],
  "sameAs": ["https://www.facebook.com/aziz.construction12/", "https://www.instagram.com/azizconstruction12/", "https://youtube.com/@azizconstruction?si=sBsemdUwGbPuPByY"]
};

const ContactUs = () => {
  return (
    <div>
      <Breadcrumbs useDefaultContainer />
      <GetAQuoteSection className={styles.container} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d810040.7799306354!2d-122.3594841!3d37.5262686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc5c2c91c9196b3b%3A0x116a5550123731a4!2sAziz%20Construction!5e0!3m2!1sen!2s!4v1686243373424!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default ContactUs;