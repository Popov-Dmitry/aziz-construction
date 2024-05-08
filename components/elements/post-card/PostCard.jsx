import React from "react";
import styles from "./post-card.module.css";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ title, slug, shortDescription, cover, categorySlug, publishDate, minutesToRead }) => {
  return (
    <div className={styles.postCard}>
      <Link href={`/blog/${categorySlug}/${slug}`} className={styles.postImage}>
        <Image src={cover.url} alt="" fill className={styles.fitCover} />
      </Link>
      <div className={styles.postContent}>
        <Link href={`/blog/${categorySlug}/${slug}`} className={styles.postTitle}>
          {title}
        </Link>
        <div className={styles.postDescription}>{shortDescription}</div>
        <div className={styles.postFooter}>
          <div>{new Date(publishDate).toLocaleDateString()}</div>
          <div>•</div>
          <div>{minutesToRead} min read</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;