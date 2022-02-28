import React from "react";
import { AuthContext } from "../../auth/AuthContext";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const Home = () => {
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
