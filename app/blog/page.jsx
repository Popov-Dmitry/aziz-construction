import React from "react";
import styles from "./blog.module.css";
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";
import { getAllPosts, getCategories } from "@/lib/api";
import PostCard from "@/components/elements/post-card/PostCard";
import Category from "@/components/elements/category/Category";

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
}

const Blog = async () => {
  const posts = await getAllPosts();
  const categories = await getCategories();

  return (
    <>
      <Breadcrumbs useDefaultContainer />
      <div className={styles.container}>
        <div className={styles.categoriesContainer}>
          <div className={styles.categoriesTitle}>Categories</div>
          <div className={styles.categories}>
            {categories.filter((category) => category.showOnBlogPage).map((category) => (
              <Category key={category.slug} {...category}/>
            ))}
          </div>
        </div>
        <div className={styles.posts}>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              {...post}
              categorySlug={post.categoriesCollection.items[0].slug}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;