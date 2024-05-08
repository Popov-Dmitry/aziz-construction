"use client";

import React from "react";
import styles from "./page-header.module.css";
import Image from "next/image";
import { joinClassNames } from "@/utils/join-class-names";
import Button from "@/components/elements/button/Button";
import { useBreakpoints } from "@/hooks/use-breakpoints";

const PageHeader = ({ title, subtitle, description, src, contactUsId }) => {
  const breakpoint = useBreakpoints();

  const onClick = () => {
    document.getElementById(contactUsId).scrollIntoView({
      behavior: "smooth",
      block: breakpoint === "lg" ? "center" : "start",
      inline: "nearest"
    });
  };

  return (
    <div className={styles.pageHeader}>
      <div className={styles.pageHeaderColumn}>
        <div className={styles.pageHeaderTitle}>{title}</div>
        <div className={styles.pageHeaderSubtitle}>{subtitle}</div>
        <div className={styles.pageHeaderDescription}>{description}</div>
        {contactUsId && (
          <Button
            className={styles.pageHeaderButton}
            text="Get a Quote"
            onClick={onClick}
          />
        )}
      </div>
      <div className={joinClassNames(styles.pageHeaderImage, styles.pageHeaderColumn)}>
        <Image src={src} alt={title} fill className={styles.fitCover} />
      </div>
    </div>
  );
};

export default PageHeader;