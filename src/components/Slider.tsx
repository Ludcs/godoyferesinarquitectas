"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { images } from "@/libs/images";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

export default function Slider() {
  return (
    <div className="relative w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((el, index) => (
          <SwiperSlide key={index}>
            <div className="flex w-full items-center justify-center overflow-hidden">
              <Image
                src={el.src}
                alt={el.alt}
                className="w-full object-cover"
                priority={true}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
