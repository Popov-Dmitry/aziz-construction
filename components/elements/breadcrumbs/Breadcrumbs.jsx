"use client";

import React from "react";
import styles from "./breadcrumbs.module.css";
import { useBreadcrumbs } from "@/hooks/use-breadcrumbs";
import Link from "next/link";
import { joinClassNames } from "@/utils/join-class-names";

const Breadcrumbs = ({ useDefaultContainer }) => {
  const breadcrumbs = useBreadcrumbs();

  const jsonLd = {
    "@context": "http://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.title,
      "item": `https://azizconstruction.com/${breadcrumb.path}`
    }))
  };

  return (
    <div className={useDefaultContainer ? styles.breadcrumbsContainer : ""}>
      <div className={joinClassNames(styles.breadcrumbs, useDefaultContainer ? styles.breadcrumbsWrapper : "")}>
        {breadcrumbs.map((breadcrumb, index) => (
          <div key={breadcrumb.title} className={styles.breadcrumb}>
            <div>{index !== 0 ? ">" : ""}</div>
            <Link
              className={index === breadcrumbs.length - 1 ? styles.current : styles.title}
              href={breadcrumb.path}
            >
              {breadcrumb?.title}
            </Link>
          </div>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default Breadcrumbs;