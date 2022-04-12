import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
// import CardPlan from "./CardPlan";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useMercadoPago from "../hooks/useMercadoPago";
// import listPlans from "./list-plans";
// import { Navigation } from "swiper";
// import { TablePlan } from "./TablePlan";
import { RegisterDetailsContext } from "../pages/register/Register";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const initial_state_card = {
  cvc: "",
  cardExpirationMonth: "",
  cardExpirationYear: "",
  focus: "cardNumber",
  cardholderName: "",
  cardNumber: "",
  issuer: "",
  installments: 1,
}

export const RegisterStep3 = (props) => {
  const { registerDetails, setRegisterDetails } = useContext(
    RegisterDetailsContext
  );
  const { username, email, planSelected, password } = registerDetails;
  const history = useHistory();


  const previousStep = () => {
    props.onSetStep(props.step - 1);
  };

  const register = async () => {
    const data = { username, email, planSelected, password };
    try {
      await axios.post("http://localhost:2005/api/auth/register", data);
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  
  const [state, setState] = useState(initial_state_card);
  const resultPayment = useMercadoPago(planSelected.price);

  const handleInputChange = (e) => {
    setState({
        ...state,
        [e.target.dataset.name || e.target.name]: e.target.value,
      });
  };

  const handleInputFocus = (e) => {
      setState({ ...state, focus: e.target.dataset.name || e.target.name });
  };

  if (resultPayment){
    if ( 'status' in resultPayment){
      if (resultPayment.status=='approved') {
        register();
      }
    }
  }
  
  return (
    <div className="content-step">
      <div
        className="mt-36 left-0 right-0 mx-auto"
        style={{ maxWidth: "350px" }}
      >
        <strong>PASO 3 DE 3</strong>
        <div className=" mt-2">Detalles de la compra:</div>
        <ul className="mb-2">
          <li>Nombre: {username}</li>
          <li>Correo: {email}</li>
          <li>Plan: {planSelected.title} </li>
        </ul>
        <p>
          Puedes{" "}
          <u onClick={() => previousStep()} style={{ cursor: "pointer" }}>
            cambiar el plan
          </u>{" "}
          o cancelar cuando quieras.
        </p>
      </div>
      <div className="px-2 sm:px-6 sm:mx-8 lg:px-8 my-16">
        <div className="container-credit-card container">
            <Card
                cvc={state.cvc}
                expiry={state.cardExpirationMonth + state.cardExpirationYear}
                name={state.cardholderName}
                number={state.cardNumber}
                focused={state.focus}
                brand={state.issuer}
            />

            <form id="form-checkout" className="credit-card-form">
                <div className="form-control">
                    <input
                        type="tel"
                        name="cardNumber"
                        id="form-checkout__cardNumber"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="form-control">
                    <input
                        type="tel"
                        name="cardExpirationMonth"
                        id="form-checkout__cardExpirationMonth"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="tel"
                        name="cardExpirationYear"
                        id="form-checkout__cardExpirationYear"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="tel"
                        name="cvc"
                        id="form-checkout__securityCode"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="cardholderName"
                        id="form-checkout__cardholderName"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="email"
                        name="cardholderEmail"
                        id="form-checkout__cardholderEmail"
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="form-control">
                    <select
                        name="issuer"
                        id="form-checkout__issuer"
                        on
                    ></select>
                    <select
                        name="identificationType"
                        id="form-checkout__identificationType"
                    ></select>
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="identificationNumber"
                        id="form-checkout__identificationNumber"
                    />
                </div>
                <div className="form-control">
                    <select
                        name="installments"
                        id="form-checkout__installments"
                    ></select>
                </div>
                <div className="form-control">
                    <button type="submit" id="form-checkout__submit">
                        Pagar
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};
