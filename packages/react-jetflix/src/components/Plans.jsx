import React from "react";
import CardPlan from "./CardPlan";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import listPlans from "./list-plans";

export const Plans = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-16">
      <div className="title mt-4 mb-4">
        <h3 className="text-center text-3xl text-white">Planes</h3>
      </div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          568: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {listPlans.map((item, index) => (
          <SwiperSlide className="text-center mx-auto" key={index}>
            <CardPlan key={item.title} plan={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
