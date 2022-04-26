import { Box, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { CardMovieToEdit } from "./CardMovieToEdit";

export const EditMovie = () => {
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
    <>
      <Grid container spacing={2} className="view-admin">
        <div style={{ width: "100%" }}>
          <h1 className="text-white text-center text-4xl font-semibold">
            Vista Admin
          </h1>
          <Box display="flex" flexWrap="wrap" p={1} m={1}>
            {movies && (
              <>
                {movies.map((item, index) => (
                  <CardMovieToEdit item={item} key={index} />
                ))}
              </>
            )}
          </Box>
        </div>
      </Grid>
    </>
  );
};
