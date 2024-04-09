import React from "react";
import styles from "./get-a-quote.module.css";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import Contacts from "@/components/contacts/Contacts";
import TextArea from "@/components/text-area/TextArea";
import { joinClassNames } from "@/utils/join-class-names";

const GetAQuote = ({ className }) => {
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
      <form className={styles.form}>
        <div className={styles.row}>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
        </div>
        <div className={styles.row}>
          <Input placeholder="Phone" />
          <Input placeholder="Subject" />
        </div>
        <Input placeholder="Your Address" />
        <TextArea className={styles.textArea} placeholder="Message" />
        <Button className={styles.button} text="Send Message" type="submit" />
      </form>
    </div>
  );
};

export default GetAQuote;