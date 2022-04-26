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
        <div>
          <button onClick={() => setIsOpen(false)}>
            {" "}
            <FontAwesomeIcon icon={faTimesCircle} />
            Close
          </button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            excepturi!
            <br />
            {item._id}
          </p>
          <Link to={`/watch/${item._id}`}>
            <button className=" bg-green-400 border-b-green-400 text-white">
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
