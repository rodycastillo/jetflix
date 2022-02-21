import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { NavbarLogOut } from "../components/NavbarLogOut";

import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import { RegisterStep2 } from "../components/RegisterStep2";
import { RegisterStep3 } from "../components/RegisterStep3";
import { RegisterStep1 } from "../components/RegisterStep1";



export const RegisterDetailsContext = React.createContext({});

export const Register = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  
  const initDetails = {
    email: 'homero@gmial.com',
    password: 'pass',
    planSelected: 3,
  }
  
  const [registerDetails, setRegisterDetails] = useState(initDetails); 
  
  return (
    <div className="h-screen bg-slate-50 relative">
      <RegisterDetailsContext.Provider value={{registerDetails,setRegisterDetails}}>
        <NavbarLogOut />
        {step === 2 ? 
        <RegisterStep2 step={step} onSetStep={(step)=> setStep(step)}/>
        : (step === 3 ?
          <RegisterStep3 step={step} onSetStep={(step)=> setStep(step)}/>:
          <RegisterStep1 step={step} onSetStep={(step)=> setStep(step)}/>
        )}
      </RegisterDetailsContext.Provider>
    </div>
  );
};
