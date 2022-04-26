import {
  Box,
  Button,
  FilledInput,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import NavbarAdmin from "./NavbarAdmin";

import { useFormik } from "formik";
import * as yup from "yup";
import { EditMovie } from "./EditMovie";
import axios from "axios";

export const HomeAdmin = (props) => {
  const [values, setValues] = useState({
    title: "",
    desc: "",
    year: "",
    limit: null,
    genre: "",
  });
  const validationSchema = yup.object({
    title: yup.string("Ingrese el titulo"),
    description: yup
      .string("Ingrese la descripción")
      .min(8, "La descripción debe tener más de 8 carácteres"),
    year: yup.string("Ingrese el año de estreno"),
    limit: yup.number("Ingrese el limite"),
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  //   const formik = useFormik({
  //     initialValues: {
  //       title: "",
  //       description: "",
  //       year: "",
  //       limit: null,
  //       genre: "",
  //     },
  //     validationSchema: validationSchema,
  //     onSubmit: (values) => {
  //       console.log(values);
  //     },
  //   });
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(JSON.stringify(values, null, 4));
    const { accessToken } = JSON.parse(localStorage.getItem("user"));
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/movies/`,
        values,
        {
          headers: {
            token: `Bearer ${accessToken}`,
          },
        }
      );
      setValues({
        title: "",
        desc: "",
        year: "",
        limit: null,
        genre: "",
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  let validEditMovie = true;
  if (props.typeFormat == "movie") {
    validEditMovie = false;
  }

  return (
    <>
      <div className="header-navbar">
        <NavbarAdmin typeFormat={props.typeFormat} />
      </div>
      {validEditMovie ? (
        <EditMovie />
      ) : (
        <Grid container spacing={2} className="view-admin">
          <Grid item xs={2} md={3}></Grid>
          <Grid item xs={8} md={6}>
            <h1 className="text-white text-center text-4xl font-semibold">
              Vista Admin
            </h1>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                border: "1px dashed grey",
                backgroundColor: "white",
                margin: "5px",
                padding: "10px",
              }}
            >
              <form autoComplete="off" onSubmit={handleSubmit}>
                <h1 className="text-center font-bold">Ingresar Pelicula</h1>
                <div className="pt-3">
                  <TextField
                    label="Titulo"
                    id="title"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    sx={{ m: 1, width: "25ch" }}
                    variant="standard"
                  />
                </div>
                <div className="pt-3">
                  <FormControl fullWidth>
                    <TextField
                      id="description"
                      label="Descripción"
                      name="desc"
                      value={values.desc}
                      onChange={handleChange}
                      multiline
                      rows={4}
                    />
                  </FormControl>
                </div>
                <div className="pt-3">
                  <TextField
                    label="Limite"
                    id="limit"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="limit"
                    value={values.limit}
                    onChange={handleChange}
                    sx={{ m: 1, width: "25ch" }}
                    variant="standard"
                  />
                </div>
                <div className="pt-3">
                  <TextField
                    label="Año de estreno"
                    id="year"
                    value={values.year}
                    name="year"
                    onChange={handleChange}
                    sx={{ m: 1, width: "25ch" }}
                    variant="standard"
                  />
                </div>
                <div className="pt-3">
                  {/* <FormControl fullWidth>
                    <InputLabel id="select-genre-label">Genero</InputLabel>
                    <Select
                      labelId="select-genre-label"
                      id="genre"
                      value={values.genre}
                      onChange={handleChange}
                      label="Genero"
                    >
                      <MenuItem value={10}>Acción</MenuItem>
                      <MenuItem value={20}>Comedia</MenuItem>
                      <MenuItem value={30}>Drama</MenuItem>
                    </Select>
                  </FormControl> */}
                  <TextField
                    label="Genero"
                    id="genre"
                    value={values.genre}
                    name="genre"
                    onChange={handleChange}
                    sx={{ m: 1, width: "25ch" }}
                    variant="standard"
                  />
                </div>
                <div className="pt-3 pb-3">
                  <Button variant="contained" component="label">
                    Subir Imagen
                    <input type="file" hidden />
                  </Button>
                </div>
                <div className="pt-3 pb-3">
                  <Button variant="contained" component="label">
                    Subir Trailer
                    <input type="file" hidden />
                  </Button>
                </div>
                <div className="pt-3 pb-3">
                  <Button variant="contained" component="label">
                    Subir Video
                    <input type="file" hidden />
                  </Button>
                </div>
                <div className="pt-3 pb-3 text-center">
                  <button
                    type="submit"
                    className="h-11 px-4 bg-cyan-600 text-center text-white"
                  >
                    Subir pelicula
                  </button>
                </div>
              </form>
            </Box>
          </Grid>
          <Grid item xs={2} md={3}></Grid>
        </Grid>
      )}
    </>
  );
};
