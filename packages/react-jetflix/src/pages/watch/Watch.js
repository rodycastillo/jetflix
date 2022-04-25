import React, { useEffect, useState } from "react";
import { ArrowBackIosOutlined } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import "./Watch.scss";
import axios from "axios";
export const Watch = () => {
  const [video, setVideo] = useState();
  const { id } = useParams();
  useEffect(async () => {
    const { accessToken } = JSON.parse(localStorage.getItem("user"));
    const BASE_URL = process.env.REACT_APP_BACKEND_URL;
    const { data } = await axios.get(`${BASE_URL}movies/${id}`, {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    });
    setVideo(data.video);
  }, []);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIosOutlined /> Home
        </div>
      </Link>
      <video className="video" autoPlay progress="true" controls src={video} />
    </div>
  );
};
