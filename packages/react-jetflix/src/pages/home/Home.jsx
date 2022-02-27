import React, { useContext } from "react";
import { logout } from "../../auth/AuthActions";
import { AuthContext } from "../../auth/AuthContext";
// import { Navbar } from "../components/Navbar";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const Home = () => {
  const { dispatch } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <div className=" container">
        <h1 className="text-white">Welcome to Home</h1>
      </div>

      <Footer />
    </>
  );
};
