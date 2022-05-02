import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
export const CardMovieToEdit = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    title: "",
    desc: "",
    year: "",
    limit: null,
    genre: "",
  });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const validationSchema = yup.object({
    title: yup.string("Ingrese el titulo"),
    description: yup
      .string("Ingrese la descripción")
      .min(8, "La descripción debe tener más de 8 carácteres"),
    year: yup.string("Ingrese el año de estreno"),
    limit: yup.number("Ingrese el limite"),
  });

  const formik = useFormik({
    initialValues: values,
    validationSchema: validationSchema,
    onSubmit: (_) => {
      console.log(values);
    },
  });
  const { accessToken } = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, desc, year, limit, genre } = values;
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/movies/${values._id}`,
        { title, desc, year, limit, genre },
        {
          headers: {
            token: `Bearer ${accessToken}`,
          },
        }
      );
      setValues(data);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteMovie = async (item) => {
    console.log(item);
    try {
      const resp = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/movies/${values._id}`,
        {
          headers: {
            token: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleOpenModal = () => setOpen(true);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    setValues(item);
  }, []);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h1 className="text-center font-bold">Editar Pelicula</h1>
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
                name="limit"
                InputLabelProps={{
                  shrink: true,
                }}
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
                  onChange={formik.handleChange("genre")}
                  label="Genero"
                >
                  <MenuItem value={"Action"}>Acción</MenuItem>
                  <MenuItem value={"Comedy"}>Comedia</MenuItem>
                  <MenuItem value={"Drama"}>Drama</MenuItem>
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
                className="h-11 px-4 bg-cyan-600 text-center text-white rounded-md"
              >
                Actualizar
              </button>
            </div>
          </form>
        </Box>
      </Modal>
      <Box p={1} m={1} sx={{ maxWidth: 275 }}>
        <Card>
          <CardMedia
            component="img"
            height="194"
            image={item.img}
            alt={item.imgTitle}
          />
          <CardContent>
            <Typography variant="h5" component="">
              {item.title}
            </Typography>
            {/* <Typography variant="body2">{item.desc}</Typography> */}
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleOpenModal(item)}>
              Editar
            </Button>
            <Button
              size="small"
              className="text-white bg-red-500"
              onClick={() => handleDeleteMovie(item._id)}
            >
              Eliminar
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};
