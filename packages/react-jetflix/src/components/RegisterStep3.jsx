import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
// import CardPlan from "./CardPlan";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import listPlans from "./list-plans";
// import { Navigation } from "swiper";
// import { TablePlan } from "./TablePlan";
import { RegisterDetailsContext } from "../pages/register/Register";

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
    // e.preventDefault();
    const data = { username, email, planSelected, password };
    try {
      await axios.post("http://localhost:2005/api/auth/register", data);
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="content-step">
      <div
        className="mt-36 left-0 right-0 mx-auto"
        style={{ maxWidth: "350px" }}
      >
        <strong>PASO 3 DE 3</strong>
        <h3>
          Pagar por el plan: {planSelected} <br />
        </h3>
        <div className=" mt-2">Detalles de la compra:</div>
        <ul className="mb-2">
          <li>Nombre: {username}</li>
          <li>Correo: {email}</li>
          <li>Plan: </li>
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
        <div className="flip-container" id="flip-toggle">
          <div className="flipper">
            <div className="card-payment front">
              <div className="card-provider">
                <div className="visa c-image">
                  <img src="https://i.imgur.com/NN9t7UH.png" alt="visa" />
                </div>

                <div className="mastercard c-image">
                  <img src="https://i.imgur.com/bma7TBS.png" alt="mastercard" />
                </div>
              </div>

              <div className="card-number-wrap">
                <label className="input-title" for="c-number">
                  Card Number*
                </label>
                <input
                  type="text"
                  name="c-number"
                  id="c-number"
                  className="input-field card-number"
                  placeholder="XXXX XXXX XXXX XXXX"
                  maxLength="16"
                  required
                />
              </div>

              <div className="cardholder-name-wrap">
                <label for="c-name" className="input-title cardholder-name">
                  Name on card*
                </label>
                <input
                  type="text"
                  name="c-number"
                  id="c-name"
                  className="input-field cardholder-name"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="card-expiry-wrap">
                <label className="input-title">Expiry Date*</label>
                <div className="custom-dropdown">
                  <select name="month" className="input-field options">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                </div>

                <div className="custom-dropdown">
                  <select name="year" className="input-field options">
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>24</option>
                    <option>25</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card back">
              <div className="black-stripe"></div>
              <div className="cvv-wrap">
                <label for="cvv-code" className="input-title">
                  CVV Code*
                </label>
                <input
                  type="text"
                  className="input-field cvv-code"
                  id="cvv-code"
                  placeholder="000"
                  maxLength="3"
                  required
                />
              </div>
              <div className="disclaimer">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br />
                *Champs obligatoires
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => register()}
          type="submit"
          className="w-full bg-cyan-600 p-3 font-medium mt-12 text-white"
        >
          Pagar
        </button>
      </div>
    </div>
  );
};
