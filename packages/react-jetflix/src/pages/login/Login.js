import React, { useContext } from "react";
import { NavbarLogOut } from "../../components/NavbarLogOut";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from '@material-ui/core/TextField';
import { styled } from "@material-ui/core/styles";
import { AuthContext } from "../../auth/AuthContext";
import {login} from "../../auth/ApiCalls";


const WhiteTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#ffa00a',
  },
  '& .MuiInput-underline': {
    color:'white',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },

  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ffa00a',
    },
  },
});

export const Login = () => {
  const { dispatch } = useContext(AuthContext)

  const validationSchema = yup.object({
    email: yup
      .string('Ingrese su correo electronico')
      .email('Ingrese un correo electronico correcto')
      .required('El correo electronico es requerido'),
    password: yup
      .string('Ingrese su  contraseña')
      .min(4, 'La contraseña debería tener como mínimo 8 caracteres')
      .required('La contraseña es requerida'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        const { email, password } = values
        login({email, password}, dispatch)
      }, 10);
    },
  });
  document.title="Jetflix | Login"
  return (
    <div className="relative h-screen">
      <NavbarLogOut />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9737377e-a430-4d13-ad6c-874c54837c49/83addbb8-ba8a-49c7-8dff-aecd54b66669/PE-es-20220111-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        className=" absolute top-0 w-screen opacity-50 h-screen"
        alt="bg login"
      />
      <form autoComplete="off" onSubmit={formik.handleSubmit} className="absolute text-yellow-50 mt-48 p-8 mx-auto left-0 right-0 login-form"
      >
        <WhiteTextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <WhiteTextField
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
        <button type="submit" className=" w-full bg-cyan-600 p-3 font-medium rounded-md mt-12">
          Submit
        </button>
        <p className="mt-2 text-center">No tiene cuenta? 
          <a href="register"><u> Regístrese ahora!</u>
          </a>
        </p>
      </form>
    </div>
  );
};
