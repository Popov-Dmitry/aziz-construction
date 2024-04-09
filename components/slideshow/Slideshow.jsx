"use client";

import React from "react";
import styles from  "./slideshow.module.css";
import ReviewCard from "@/components/review-card/ReviewCard";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { joinClassNames } from "@/utils/join-class-names";
import Image from "next/image";

const Slideshow = ({ images, className }) => {
  return (
    <Swiper
      className={joinClassNames(styles.slideshow, className)}
      autoHeight
      autoplay={5000}
      spaceBetween={16}
      loop
      loopedSlides={3}
      slidesPerView={1}
      navigation
      mousewheel={true}
      modules={[Controller, Navigation, Pagination, Scrollbar, A11y]}
      centerInsufficientSlides={true}
    >
      {images.map((item) => (
        <SwiperSlide>
          <Image src={item} alt="" width={500} height={500} />
        </SwiperSlide>
      ))}
    </Swiper> 
  );
};

export default Slideshow;