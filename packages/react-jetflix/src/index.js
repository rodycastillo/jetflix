import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import "./assets/styles/css/credit-card.css";
import "./assets/styles/css/homepage.css";
import App from "./App";
import { AuthContextProvider } from "./auth/AuthContext";
import axios from "axios";
axios.defaults.baseURL= process.env.BASE_URL

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
