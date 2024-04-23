import React from "react";
import styles from "./category.module.css";
import Link from "next/link";

const Category = ({ name, slug }) => {
  return (
    <Link className={styles.category} href={`/blog/${slug}`}>
      {name}
    </Link>
  );
};

export default Category;