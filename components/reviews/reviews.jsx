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

const Reviews = ({ reviews, className }) => {
  return (
    <Swiper
      className={joinClassNames(styles.reviews, className)}
      autoHeight
      autoplay={5000}
      spaceBetween={16}
      loop
      loopedSlides={3}
      slidesPerView={3}
      navigation
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
  );
};

export default Reviews;