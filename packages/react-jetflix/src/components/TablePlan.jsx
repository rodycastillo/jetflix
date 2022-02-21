import React, { isValidElement, useContext, useState } from "react";
import CardPlan from "./CardPlan";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import listPlans from "./list-plans";
import { Navigation } from "swiper";
import { RegisterDetailsContext } from "../pages/Register";

export const TablePlan = () => {
  const { registerDetails, setRegisterDetails } = useContext(RegisterDetailsContext)
  
  const onChangeValue = (event) => {
    setRegisterDetails((prev) => ({
        ...prev,
        planSelected:event.target.value
    }));
  }

  return (
    <div>
        <div className="plan-header">
            <div className="container-selector" 
            onChange={onChangeValue}>
                { listPlans.map((item,index) => (

                    <label 
                    className="plan-selector" 
                    key={item.id}
                    for={item.id}>
                        <input type="radio" name="planChoice"
                        className="input-selector"
                        key={item.id}
                        id={item.id}
                        value={item.id}
                        ></input>
                        <span
                        className="title-selector" 
                        key={item.title}>
                            {item.title}
                        </span>
                    </label>
                ))}
            </div>
        </div>
        <table className="table-auto table-container">
            <tbody className="table-body">
                <tr className="table-row">
                    <td className="feature-title feature">Precio</td>
                    { listPlans.map((item,index) => (
                        <td 
                        className="feature-table feature" 
                        key={item.id}>
                            {item.price}
                        </td>
                    ))}
                </tr>
                <tr className="table-row">
                    <td className="feature-title feature">Calidad</td>
                    { listPlans.map((item,index) => (
                        <td 
                        className="feature-table feature" 
                        key={item.id}>
                            {item.quality}
                        </td>
                    ))}
                </tr>
                <tr className="table-row">
                    <td className="feature-title feature">Resolución</td>
                    { listPlans.map((item,index) => (
                        <td 
                        className="feature-table feature" 
                        key={item.id}>
                            {item.resolution}
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    </div>
  );
};