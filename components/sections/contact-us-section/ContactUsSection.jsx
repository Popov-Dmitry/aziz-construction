import React from "react";
import styles from "./contact-us-section.module.css";
import Input from "@/components/elements/input/Input";
import TextArea from "@/components/elements/text-area/TextArea";
import Button from "@/components/elements/button/Button";
import Image from "next/image";

const ContactUsSection = () => {
  return (
    <div className={styles.twoColsFlex}>
      <div className={styles.leftColumn}>
        <div className={styles.contactUsTitle}>Contact Us</div>
        <div className={styles.subtitle}>Get A Quote</div>
        <form className={styles.contactUsForm}>
          <div className={styles.contactUsRow}>
            <Input className={styles.contactUsInput} placeholder="Name" />
            <Input className={styles.contactUsInput} placeholder="Email" />
          </div>
          <div className={styles.contactUsRow}>
            <Input className={styles.contactUsInput} placeholder="Phone" />
            <Input className={styles.contactUsInput} placeholder="Your Address" />
          </div>
          <TextArea className={styles.contactUsTextArea} placeholder="Message" />
          <Button className={styles.contactUsButton} text="Send Message" type="submit" />
        </form>
      </div>
      <div className={styles.photo}>
        <Image src="/home/contact-us.jpeg" alt="" fill objectFit="cover" />
      </div>
    </div>
  );
};

export default ContactUsSection;