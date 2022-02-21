import React, { useContext } from "react";
import CardPlan from "./CardPlan";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import listPlans from "./list-plans";
import { Navigation } from "swiper";
import { TablePlan } from "./TablePlan";
import { RegisterDetailsContext } from "../pages/Register";

export const RegisterStep2 = (props) => {
  const { registerDetails, setRegisterDetails } = useContext(RegisterDetailsContext)
  const nextStep = () => {
    props.onSetStep(props.step+1);
  }

  return (
    <div className="content-step">
        <div
            className="mt-36 left-0 right-0 mx-auto"
            style={{ maxWidth: "350px" }}
            >
            <strong>PASO 2 DE 3</strong>
            <h3>
            Selecciona el plan ideal para ti<br />
            </h3>
            <p>Puedes cambiar el plan o cancelar cuando quieras.</p>
        </div>
        <div className="px-2 sm:px-6 sm:mx-8 lg:px-8 my-16">
            <TablePlan/>
            <button
                onClick={()=>nextStep()}
                type="submit"
                className="w-full bg-red-600 p-3 font-medium mt-12 text-white">
                Siguiente
            </button>
        </div>
    </div>
  );
};