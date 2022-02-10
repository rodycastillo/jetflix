import React from "react";
import CardPlan from "./CardPlan";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// images
import plan1 from "../assets/img/img-plan1.png";
import plan2 from "../assets/img/img-plan2.png";

const plans = [
  {
    id: 1,
    title: "Standar Edition",
    description: ["Elden Ring", "Adventure Guide", "Bonus Gesture"],
    price: 69.99,
    img: plan1,
  },
  {
    id: 2,
    title: "Deluxe Edition",
    description: [
      "Elden Ring",
      "Digital Artbook & Original",
      "Adventure Guide",
      "Bonus Gesture",
    ],
    price: 89.99,
    img: plan2,
  },
  {
    id: 3,
    title: "Deluxe Edition",
    description: [
      "Elden Ring",
      "Digital Artbook & Original",
      "Adventure Guide",
      "Bonus Gesture",
    ],
    price: 89.99,
    img: plan1,
  },
  {
    id: 4,
    title: "Deluxe Edition",
    description: [
      "Elden Ring",
      "Digital Artbook & Original",
      "Adventure Guide",
      "Bonus Gesture",
    ],
    price: 89.99,
    img: plan2,
  },
];

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
        {plans.map((item, index) => (
          <SwiperSlide className="text-center mx-auto" key={index}>
            <CardPlan key={item.title} plan={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
