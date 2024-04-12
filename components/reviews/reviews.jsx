"use client";

import React from "react";
import styles from  "./reviews.module.css";
import ReviewCard from "@/components/review-card/ReviewCard";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { joinClassNames } from "@/utils/join-class-names";
import Image from "next/image";

const Reviews = ({ reviews, className }) => {
  return (
    <div className={styles.reviewsContainer}>
      <Image
        src="/arrow-left.svg"
        alt=""
        height={40}
        width={40}
        className={styles.leftNavigationButton}
      />
      <Swiper
      className={joinClassNames(styles.reviews, className)}
      autoHeight
      autoplay={5000}
      spaceBetween={16}
      loop
      loopedSlides={3}
      slidesPerView={3}
      navigation={{
        nextEl: `.${styles.rightNavigationButton}`,
        prevEl: `.${styles.leftNavigationButton}`
      }}
      mousewheel={true}
      modules={[Controller, Navigation, Pagination, Scrollbar, A11y]}
      centerInsufficientSlides={true}
    >
      {reviews.map((item) => (
        <SwiperSlide>
          <ReviewCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper> 
    <Image
        src="/arrow-right.svg"
        alt=""
        height={40}
        width={40}
        className={styles.rightNavigationButton}
      />
    </div>
  );
};

export default Reviews;