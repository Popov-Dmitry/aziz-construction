"use client";

import React, { useEffect, useRef } from "react";
import styles from "./get-a-quote-section.module.css";
import Input from "@/components/elements/input/Input";
import Button from "@/components/elements/button/Button";
import Contacts from "@/components/elements/contacts/Contacts";
import TextArea from "@/components/elements/text-area/TextArea";
import { joinClassNames } from "@/utils/join-class-names";
import { useFormState, useFormStatus} from "react-dom";
import { submitData } from "@/lib/airtable";
import Image from "next/image";

const Form = ({ result }) => {
  const { pending } = useFormStatus();

  return (
    <>
      <div className={styles.row}>
        <Input
          placeholder="Name"
          name="Name"
          required
        />
        <Input
          placeholder="Email"
          name="Email"
          type="email"
          required
        />
      </div>
      <div className={styles.row}>
        <Input
          placeholder="Phone"
          name="Phone"
          type="tel"
        />
        <Input
          placeholder="ZIP code"
          name="ZIP code"
        />
      </div>
      <TextArea
        className={styles.textArea}
        placeholder="How we may help you?"
        name="Message"
      />
      <div className={styles.row}>
        <Button
          className={styles.button}
          text="Send Message"
          type="submit"
          disabled={pending}
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

const GetAQuoteSection = ({ className }) => {
  const [result, dispatch] = useFormState(submitData);
  const ref = useRef();

  useEffect(() => {
    if (result === true) {
      ref.current.reset();
    }
  }, [result]);

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
      <form className={styles.form} action={dispatch} ref={ref}>
        <Form result={result} />
      </form>
    </div>
  );
};

export default GetAQuoteSection;