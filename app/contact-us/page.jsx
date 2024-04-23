import React from "react";
import styles from "./contact-us.module.css";
import GetAQuote from "@/components/sections/get-a-quote/GetAQuote";
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";

export async function generateMetadata({ params }) {
  return {
    title: "Contact Us - Aziz Construction",
    description: "Get A Quote",
    openGraph: {
      title: "Contact Us - Aziz Construction",
      url: "https://azizconstruction.com/contact-us/"
    },
    twitter: {
      title: "Contact Us - Aziz Construction",
      description: "Get A Quote"
    }
  };
};

const ContactUs = () => {
  return (
    <div>
      <Breadcrumbs useDefaultContainer />
      <GetAQuote className={styles.container} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d810040.7799306354!2d-122.3594841!3d37.5262686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc5c2c91c9196b3b%3A0x116a5550123731a4!2sAziz%20Construction!5e0!3m2!1sen!2s!4v1686243373424!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ContactUs;