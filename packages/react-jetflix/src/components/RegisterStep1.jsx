import React, { useContext, useEffect } from "react";
import CardPlan from "./CardPlan";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import listPlans from "./list-plans";
import { Navigation } from "swiper";
import { TablePlan } from "./TablePlan";

import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import { RegisterDetailsContext } from "../pages/register/Register";
import { Redirect } from "react-router-dom";

const BlackTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
});

export const RegisterStep1 = (props) => {
  const { registerDetails, setRegisterDetails } = useContext(
    RegisterDetailsContext
  );
  const validationSchema = yup.object({
    username: yup
      .string("Ingrese su nombre")
      .required("El nombre es obligatorio"),
    password: yup
      .string("Ingrese su contraseña")
      .min(8, "La contraseña debe tener más de 8 carácteres")
      .required("La contraseña es obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { username, password } = values;
      const { email } = registerDetails;
      setRegisterDetails({ username, email, password });
      props.onSetStep(props.step + 1);
    },
  });

  const getEmail = () => {
    const e = sessionStorage.getItem("email");
    if (!e) {
      return <Redirect to="/" />;
    }
    setRegisterDetails((prev) => ({
      ...prev,
      email: JSON.parse(e),
    }));
    document.title = "Jetflix | Registro";
  };

  useEffect(() => {
    getEmail();
  }, []);

  return (
    <div
      className="mt-36 absolute left-0 right-0 mx-auto"
      style={{ maxWidth: "350px" }}
    >
      <strong>PASO 1 DE 3</strong>
      <h3>
        ¡Hola de nuevo! <br /> Suscribirte a Jetflix es fácil.
      </h3>
      <p>Ingresa tu nombre y contraseña para comenzar a ver al instante.</p>
      <form
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        className="text-yellow-50 mt-8"
      >
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          disabled
          value={registerDetails.email}
        />
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Name"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <BlackTextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <button
          type="submit"
          className="w-full bg-cyan-600 p-3 font-medium mt-12 text-white"
        >
          Siguiente
        </button>
      </form>
    </div>
  );
};
