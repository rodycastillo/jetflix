import React, { useEffect, useState } from "react";
import { NavbarLogOut } from "../../components/NavbarLogOut";

import "./register.scss";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { RegisterStep2 } from "../../components/RegisterStep2";
import { RegisterStep3 } from "../../components/RegisterStep3";
import { RegisterStep1 } from "../../components/RegisterStep1";
import listPlans from "../../components/list-plans";

export const RegisterDetailsContext = React.createContext({});

const insideStyles = {
  background: "transparent",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

export const Register = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [step, setStep] = useState(1);

  const initDetails = {
    email: "",
    password: "",
    username: "",
    planSelected: listPlans.filter((obj) => obj.id == 3)[0],
  };

  const [registerDetails, setRegisterDetails] = useState(initDetails);
  const validationSchema = yup.object({
    email: yup
      .string("Ingrese su email")
      .email("Ingrese un email válido")
      .required("Email es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setRegisterDetails({ ...registerDetails, email: values.email });
      sessionStorage.setItem("email", JSON.stringify(values.email));
      setShowRegister(!showRegister);
    },
  });

  return (
    <>
      {showRegister ? (
        <div className="h-screen bg-slate-50 relative">
          <RegisterDetailsContext.Provider
            value={{ registerDetails, setRegisterDetails }}
          >
            <NavbarLogOut />
            {step === 2 ? (
              <RegisterStep2 step={step} onSetStep={(step) => setStep(step)} />
            ) : step === 3 ? (
              <RegisterStep3 step={step} onSetStep={(step) => setStep(step)} />
            ) : (
              <RegisterStep1 step={step} onSetStep={(step) => setStep(step)} />
            )}
          </RegisterDetailsContext.Provider>
        </div>
      ) : (
        <div className="relative register">
          <NavbarLogOut />
          <div>
            <div className="px-3" style={{ height: "100vh" }}>
              <div style={insideStyles} className="text-white text-center">
                <h1 className="text-6xl font-bold" data-aos="fade-up">
                  Películas y series <br /> ilimitadas y mucho más.
                </h1>
                <p className="text-xl my-2">
                  Ingresa tu email para crear una cuenta o reiniciar tu
                  membresía de Jetflix.
                </p>
                <form
                  className="mt-12"
                  autoComplete="off"
                  onSubmit={formik.handleSubmit}
                >
                  <TextField
                    type="email"
                    className="text-black bg-white w-7/12 h-11 px-2 rounded outline-none"
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  <button type="submit" className="h-11 px-4 bg-cyan-600">
                    Comenzar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
