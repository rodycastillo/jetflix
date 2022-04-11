import { Box, Button, FilledInput, FormControl, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Navbar from "./Navbar";

import { useFormik } from "formik";
import * as yup from "yup";

export const HomeAdmin = () => {

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
    return (
        <>
        <div className="header-navbar">
            <Navbar  />
        </div>
        <Grid container spacing={2} className="view-admin">
            <Grid item xs={6} md={3}></Grid>
            <Grid item xs={6} md={6}>
                <h1 className="text-white text-center text-4xl font-semibold">Vista Admin</h1>
                <Box sx={{ display: 'flex', flexDirection: 'column', 
                border: '1px dashed grey' , backgroundColor: 'white',
                margin: '5px', padding: '10px' }}>
                    <form autoComplete="off"
                         onSubmit={formik.handleSubmit}>
                        <h1 className="text-center font-bold">Ingresar pelicula</h1>
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
                        <button type="submit" 
                        className="h-11 px-4 bg-cyan-600 text-center">
                            Subir pelicula
                        </button>
                    </form>
                </Box>
            </Grid>
            <Grid item xs={6} md={3}></Grid>
        </Grid>
        
        </>
    );
};