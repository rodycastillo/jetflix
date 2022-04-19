import React, { useEffect, useRef, useState, Component } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { HomeAdmin } from "../../components/HomeAdmin";

import {
  faHome,
  faCircleInfo,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import ReactPlayer from "react-player";
import { Modal } from "react-responsive-modal";
import ModalVideo from "react-modal-video";
import { ListCards } from "../../components/ListCards";

export const Home = () => {
  const [open, setOpen] = useState(false);

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

  const adminLog = JSON.parse(localStorage.getItem("user")).isAdmin;

  return (
    <>
      {adminLog ? (
        <HomeAdmin />
      ) : (
        <>
          <div className="header-navbar">
            <Navbar />
          </div>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={open}
            videoId="L61p2uyiMSo"
            onClose={() => setOpen(false)}
          />
          <div className="header">
            <video autoPlay loop muted className="video-header">
              <source
                src="https://raw.githack.com/beercss/beercss/v1.1.0/dist/dance.mp4"
                type="video/mp4"
              ></source>
            </video>
            <div className="info-header left-shadow absolute">
              <div className="p-5">
                <h5 className="font-bold text-white">Started in 1983</h5>
                <div className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="buttons-header mt-4">
                  <button className="large bg-white rounded-md p-2 px-4 mr-3">
                    <FontAwesomeIcon icon={faPlay} />
                    <span className="text-black ml-2">Watch</span>
                  </button>
                  <button className="large border-white border-solid border-2 rounded-md p-2 px-4 mx-3">
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      style={{ color: "white" }}
                    />
                    <span className="text-white ml-2">More info</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ListCards title={"Continuar Viendo..."} />
          <ListCards title={"Populares en Jetflix"} />
          <ListCards title={"Tendencias"} />
          <ListCards title={"Series Premiadas"} />
          <div>
            <h5 className="font-bold text-white p-3">Series Premiadas</h5>
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
                  <div className="card m-2" onClick={() => setOpen(true)}>
                    <a className="card-wave">
                      <img
                        className="card-img pt-3"
                        src={item.img}
                        alt="image"
                      ></img>
                    </a>
                    <div className="play-button">
                      <div className="absolute">
                        <button className="large bg-black rounded-full p-2 px-4 mr-3">
                          <FontAwesomeIcon icon={faPlay} />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="card-title" color="gray">
                        {item.title}
                      </div>
                      <div className="card-description"></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
