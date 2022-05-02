import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardView } from "./CardView";
import axios from "axios";

export const ListCards = ({ title }) => {
  const [movies, setMovies] = useState();

  useEffect(async () => {
    const { accessToken } = JSON.parse(localStorage.getItem("user"));
    const BASE_URL = process.env.REACT_APP_BACKEND_URL;
    const { data } = await axios.get(`${BASE_URL}/movies/`, {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    });
    setMovies(data);
  }, []);
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
        {movies && (
          <>
            {movies.map((item, index) => (
              <SwiperSlide key={index} className="text-center mx-auto">
                <CardView item={item} key={index} />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  );
};
