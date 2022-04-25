import React, { useState } from "react";
import { faTimesCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const CardView = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        ariaHideApp={false}
        style={{
          content: {
            width: "30rem",
            height: "30%",
            margin: "auto",
            borderRadius: "30px",
          },
          overlay: {
            backgroundColor: "#fffbfbc2",
            // opacity: "0.2",
            zIndex: "20",
          },
        }}
      >
        <div className="flex flex-col justify-between align-middle h-full">
          <button onClick={() => setIsOpen(false)} className=" text-right">
            {" "}
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
          <div className="text-center">
            <h2 className="text-black font-semibold text-lg">{item.title}</h2>
            <p>{item.desc}</p>
          </div>
          <Link to={`/watch/${item._id}`} className="text-center">
            <button className=" bg-cyan-600 text-white p-2 rounded-md">
              Ver la pelicula
            </button>
          </Link>
        </div>
      </ReactModal>
      <div className="card m-2" onClick={() => setIsOpen(true)}>
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
