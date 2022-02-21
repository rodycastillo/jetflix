import React, { useContext } from "react";
import CardPlan from "./CardPlan";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import listPlans from "./list-plans";
import { Navigation } from "swiper";
import { TablePlan } from "./TablePlan";
import { RegisterDetailsContext } from "../pages/Register";

export const RegisterStep3 = (props) => {
  const { registerDetails, setRegisterDetails } = useContext(RegisterDetailsContext)

  const previousStep = () => {
    props.onSetStep(props.step - 1);
  }
  return (
    <div className="content-step">
      <div
        className="mt-36 left-0 right-0 mx-auto"
        style={{ maxWidth: "350px" }}
      >
        <strong>PASO 3 DE 3</strong>
        <h3>
          Pagar por el plan: {registerDetails.planSelected} <br />
        </h3>
        <p>Puedes 
          <u onClick={()=>previousStep()} style={{cursor:"pointer"}}>
             cambiar el plan</u> o cancelar cuando quieras.</p>
      </div>
      <div className="px-2 sm:px-6 sm:mx-8 lg:px-8 my-16">
        <button
            onClick={()=>nextStep()}
            type="submit"
            className="w-full bg-red-600 p-3 font-medium mt-12">
                  Pagar
        </button>
      </div>
    </div>
  );
};