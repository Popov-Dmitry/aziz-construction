"use client";

import React from "react";
import { useFormState } from 'react-dom';
import styles from "./contact-us-section.module.css";
import Input from "@/components/elements/input/Input";
import TextArea from "@/components/elements/text-area/TextArea";
import Button from "@/components/elements/button/Button";
import Image from "next/image";
import { submitData } from "@/lib/airtable";

const ContactUsSection = () => {
  const [_, dispatch] = useFormState(submitData);

  return (
    <div className={styles.twoColsFlex}>
      <div className={styles.leftColumn}>
        <div className={styles.contactUsTitle}>Contact Us</div>
        <div className={styles.subtitle}>Get A Quote</div>
        <form className={styles.contactUsForm} action={dispatch}>
          <div className={styles.contactUsRow}>
            <Input
              className={styles.contactUsInput}
              placeholder="Name"
              name="Name"
            />
            <Input
              className={styles.contactUsInput}
              placeholder="Email"
              name="Email"
              type="email"
            />
          </div>
          <div className={styles.contactUsRow}>
            <Input
              className={styles.contactUsInput}
              placeholder="Phone"
              name="Phone"
              type="tel"
            />
            <Input
              className={styles.contactUsInput}
              placeholder="Your Address"
              name="Address"
            />
          </div>
          <TextArea
            className={styles.contactUsTextArea}
            placeholder="Message"
            name="Message"
          />
          <Button
            className={styles.contactUsButton}
            text="Send Message"
            type="submit"
          />
        </form>
      </div>
      <div className={styles.photo}>
        <Image src="/home/contact-us.jpeg" alt="" fill objectFit="cover" />
      </div>
    </div>
  );
};

export default ContactUsSection;