import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import {
  faHome,
  faCircleInfo,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardView = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={open}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
      <div className="card m-2" onClick={() => setOpen(true)}>
        <a className="card-wave">
          <img className="card-img pt-3" src={item.img} alt="image"></img>
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
    </>
  );
};
