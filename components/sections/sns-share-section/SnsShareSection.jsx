"use client";

import React from "react";
import styles from "./sns-share-section.module.css";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton
} from "next-share";
import { usePathname } from "next/navigation";

const SnsShareSection = ({ className }) => {
  const pathname = usePathname();

  return (
    <div className={className}>
      <div className={styles.title}>Share post</div>
      <div className={styles.row}>
        <FacebookShareButton url={`https://azizconstruction.com/${pathname}`}>
          <FacebookIcon size={36} round />
        </FacebookShareButton>
        <TwitterShareButton url={`https://azizconstruction.com/${pathname}`}>
          <TwitterIcon size={36} round />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default SnsShareSection;