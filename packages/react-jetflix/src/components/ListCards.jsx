import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardView } from "./CardView";

export const ListCards = ({ title }) => {
  const movie = {
    _id: "620749097554ff3e21e1a340",
    title: "Superman",
    desc: "test Desc",
    img: "https://media.revistagq.com/photos/6050e0cc267aa4eef01d2e77/4:3/w_1124,h_843,c_limit/henry-cavill-entrenamiento-superman.jpeg",
    imgTitle: "Superman",
    imgSm:
      "https://media.revistagq.com/photos/6050e0cc267aa4eef01d2e77/4:3/w_112,h_84,c_limit/henry-cavill-entrenamiento-superman.jpeg",
    trailer: "https://www.youtube.com/embed/T6DJcgm3wNY",
    video:
      "https://player.vimeo.com/video/52311932?h=50a5dac067&color=ff0179&byline=0&portrait=0&badge=0",
    year: "2021",
    limit: 16,
  };
  const movies = [];
  for (let i = 1; i <= 15; i++) {
    movies.push(movie);
  }
  return (
    <div className="my-4">
      <h5 className="font-bold text-white p-3">{title}</h5>
      <Swiper
        className="container-cards"
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
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {movies.map((item, index) => (
          <SwiperSlide key={index} className="text-center mx-auto">
            <CardView item={item} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
