"use client";

import React from "react";
import styles from "./get-a-quote-section.module.css";
import Input from "@/components/elements/input/Input";
import Button from "@/components/elements/button/Button";
import Contacts from "@/components/elements/contacts/Contacts";
import TextArea from "@/components/elements/text-area/TextArea";
import { joinClassNames } from "@/utils/join-class-names";
import { useFormState } from "react-dom";
import { submitData } from "@/lib/airtable";

const GetAQuoteSection = ({ className }) => {
  const [_, dispatch] = useFormState(submitData);

  return (
    <div className={joinClassNames(styles.container, className)}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Get A Quote</div>
        <div className={styles.header}>Contact Us.</div>
        <div className={styles.text}>
          Feel free to reach us directly or complete the form provided.<br />
          We’re eager to learn about your project & provide you with our top-notch services.
        </div>
        <Contacts size="lg" />
      </div>
      <form className={styles.form} action={dispatch}>
        <div className={styles.row}>
          <Input placeholder="Name" name="Name" />
          <Input placeholder="Email" name="Email" type="email" />
        </div>
        <div className={styles.row}>
          <Input placeholder="Phone" name="Phone" type="tel" />
          <Input placeholder="Subject" name="Subject" />
        </div>
        <Input placeholder="Your Address" name="Address" />
        <TextArea className={styles.textArea} placeholder="Message" name="Message" />
        <Button className={styles.button} text="Send Message" type="submit" />
      </form>
    </div>
  );
};

export default GetAQuoteSection;