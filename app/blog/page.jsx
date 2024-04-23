import React from "react";
import styles from "./blog.module.css";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

export async function generateMetadata({ params }) {
  return {
    title: "Blog - Aziz Construction",
    openGraph: {
      title: "Blog - Aziz Construction",
      url: "https://azizconstruction.com/blog/"
    },
    twitter: {
      title: "Blog - Aziz Construction"
    }
  };
};

const Blog = () => {
  return (
    <>
      <Breadcrumbs useDefaultContainer />
      <div className={styles.container}>
        <h1 className={styles.title}>Archives</h1>
      </div>
    </>
  );
};

export default Blog;