import React from "react";
import styles from "./get-a-quote.module.css";
import GetAQuote from "@/components/get-a-quote/GetAQuote";

const GetAQuotePage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Get A Quote</h2>
      <GetAQuote />
    </div>
  );
};

export default GetAQuotePage;