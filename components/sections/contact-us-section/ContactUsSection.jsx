"use client";

import React, { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./contact-us-section.module.css";
import Input from "@/components/elements/input/Input";
import TextArea from "@/components/elements/text-area/TextArea";
import Button from "@/components/elements/button/Button";
import Image from "next/image";
import { submitData } from "@/lib/airtable";

const Form = ({ result }) => {
  const { pending } = useFormStatus();

  return (
    <>
      <div className={styles.contactUsRow}>
        <Input
          className={styles.contactUsInput}
          placeholder="Name"
          name="Name"
          required
        />
        <Input
          className={styles.contactUsInput}
          placeholder="Email"
          name="Email"
          type="email"
          required
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
          placeholder="ZIP code"
          name="ZIP code"
        />
      </div>
      <TextArea
        className={styles.contactUsTextArea}
        placeholder="How we may help you?"
        name="Message"
      />
      <div className={styles.contactUsRow}>
        <Button
          className={styles.contactUsButton}
          text="Send Message"
          type="submit"
        />
        {pending && (
          <Image
            className={styles.spinner}
            src="/spinner.svg"
            alt=""
            width={48}
            height={48}
          />
        )}
        {(!pending && result === true) && (
          <Image src="/checkmark-circle.svg" alt="" width={48} height={48} />
        )}
        {result?.message && (
          <div className={styles.error}>{result?.message}</div>
        )}
      </div>
    </>
  );
};

const ContactUsSection = () => {
  const [result, dispatch] = useFormState(submitData);
  const ref = useRef();

  useEffect(() => {
    if (result === true) {
      ref.current.reset();
    }
  }, [result]);

  return (
    <div className={styles.twoColsFlex}>
      <div className={styles.leftColumn}>
        <div className={styles.contactUsTitle}>Contact Us</div>
        <div className={styles.subtitle}>Get A Quote</div>
        <form className={styles.contactUsForm} action={dispatch} ref={ref}>
          <Form result={result} />
        </form>
      </div>
      <div className={styles.photo}>
        <Image src="/home/contact-us.jpeg" alt="" fill objectFit="cover" />
      </div>
    </div>
  );
};

export default ContactUsSection;