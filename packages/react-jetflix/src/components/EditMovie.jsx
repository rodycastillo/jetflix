import { Box, Button, Card, CardActions, CardContent, CardMedia, FormControl, Grid, InputLabel, MenuItem, Modal, Select, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

import { useFormik } from "formik";
import * as yup from "yup";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export const EditMovie = () => {
    const [open, setOpen] = React.useState(false);
    const movieSelected = {
        title:"Superman",
        description:"test Desc",
        img:"https://media.revistagq.com/photos/6050e0cc267aa4eef01d2e77/4:3/w_1124,h_843,c_limit/henry-cavill-entrenamiento-superman.jpeg",
        imgTitle:"Superman",
        imgSm:"https://media.revistagq.com/photos/6050e0cc267aa4eef01d2e77/4:3/w_112,h_84,c_limit/henry-cavill-entrenamiento-superman.jpeg",
        trailer:"https://www.youtube.com/embed/T6DJcgm3wNY",
        video:"https://player.vimeo.com/video/52311932?h=50a5dac067&color=ff0179&byline=0&portrait=0&badge=0",
        year:"2021",
        limit:16,
        genre: 10,
      }
    const movies = [];
    for (let i = 1 ; i <= 15 ; i++) {
        movies.push(movieSelected)
    }
    const validationSchema = yup.object({
        title: yup
          .string("Ingrese el titulo"),
        description: yup
          .string("Ingrese la descripción")
          .min(8, "La descripción debe tener más de 8 carácteres"),
        year: yup
          .string("Ingrese el año de estreno"),
        limit: yup
          .number("Ingrese el limite"),
    });

    const formik = useFormik({
        initialValues: {
          title: "cgh",
          description:"",
          year: "",
          limit: 0,
          genre: ``,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    });

    const handleOpenModal = (movie) => {
        console.log(movie);
        formik.initialValues = movie;
        setOpen(true);
    }

    const handleClose = () => setOpen(false);
    
    return (
        <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                    <form autoComplete="off"
                         onSubmit={formik.handleSubmit}>
                        <h1 className="text-center font-bold">Editar Pelicula</h1>
                        <div className="pt-3">
                            <TextField
                                label="Titulo"
                                id="title"
                                value={formik.title}
                                onChange={formik.handleChange}
                                sx={{ m: 1, width: '25ch' }}
                                variant="standard"
                            />
                        </div>
                        <div className="pt-3">
                            <FormControl fullWidth>
                                <TextField
                                id="description"
                                label="Descripción"
                                value={formik.description}
                                onChange={formik.handleChange}
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
                                value={formik.limit}
                                onChange={formik.handleChange}
                                sx={{ m: 1, width: '25ch' }}
                                variant="standard"
                            />
                        </div>
                        <div className="pt-3">
                            <TextField
                                label="Año de estreno"
                                id="year"
                                value={formik.year}
                                onChange={formik.handleChange}
                                sx={{ m: 1, width: '25ch' }}
                                variant="standard"
                            />
                        </div>
                        <div className="pt-3">
                            <FormControl fullWidth>
                                <InputLabel id="select-genre-label">
                                    Genero</InputLabel>
                                <Select
                                    labelId="select-genre-label"
                                    id="genre"
                                    value={formik.genre}
                                    onChange={formik.handleChange("genre")}
                                    label="Genero"
                                    >
                                    <MenuItem value={10}>Acción</MenuItem>
                                    <MenuItem value={20}>Comedia</MenuItem>
                                    <MenuItem value={30}>Drama</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="pt-3 pb-3">
                            <Button
                                variant="contained"
                                component="label"
                                >
                                Subir Imagen
                                <input
                                    type="file"
                                    hidden
                                />
                            </Button>
                        </div>
                        <div className="pt-3 pb-3">
                            <Button
                                variant="contained"
                                component="label"
                                >
                                Subir Trailer
                                <input
                                    type="file"
                                    hidden
                                />
                            </Button>
                        </div>
                        <div className="pt-3 pb-3">
                            <Button
                                variant="contained"
                                component="label"
                                >
                                Subir Video
                                <input
                                    type="file"
                                    hidden
                                />
                            </Button>
                        </div>
                        <div className="pt-3 pb-3 text-center">
                            <button type="submit" 
                            className="h-11 px-4 bg-cyan-600 text-center text-white">
                                Editar pelicula
                            </button>
                        </div>
                    </form>
                </Box>
        </Modal>
        <Grid container spacing={2} className="view-admin">
            <div style={{ width: '100%' }}>
                <h1 className="text-white text-center text-4xl font-semibold">
                    Vista Admin
                </h1>
                <Box
                    display="flex"
                    flexWrap="wrap"
                    p={1}
                    m={1}
                >
                {movies.map((item, index) => (
                    <Box
                        p={1}
                        m={1}
                        key={index}
                        sx={{maxWidth: 275}}
                    >
                        <Card key={index}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={item.img}
                                alt={item.imgTitle}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" 
                                onClick={()=>handleOpenModal(item)}>
                                    Editar
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                ))}
                </Box>
            </div>
        </Grid>
        </>
    );
};