import React from "react";
import AnotacionesResum from "./AnotacionesResum";
import "../App.css";
import "../css/resumen.css";

const Resumen = () => {
  return (
    <>
      <div className="container resumen-container mt-5">
        <div className="d-flex resumen-cliente mt-4">
          <h3>Cliente:</h3>
          <p>Karla Jara</p>
        </div>
        <div className="d-flex resumen-mesa">
          <h3>Mesa:</h3>
          <p>6</p>
        </div>
        <hr className="resumen-border" />
        {/* Iterable */}
        <div className="d-flex justify-content-around align-items-center mt-5 container-pedido">
          <span className="circle"></span>
          <h3>Pizza Vegetariana</h3>
          <h4>$3999</h4>
          <i class="fa-solid fa-trash-arrow-up resumen-icons"></i>
        </div>
        <div className="d-flex justify-content-around align-items-center mt-5 container-pedido">
          <span className="circle"></span>
          <h3>Pizza Vegetariana</h3>
          <h4>$3999</h4>
          <i class="fa-solid fa-trash-arrow-up resumen-icons"></i>
        </div>
        <div className="d-flex justify-content-around align-items-center mt-5 container-pedido">
          <span className="circle"></span>
          <h3>Pizza Vegetariana</h3>
          <h4>$3999</h4>
          <i class="fa-solid fa-trash-arrow-up resumen-icons"></i>
        </div>
        <hr className="resumen-border mt-2" />
        {/* Total */}
        <div className="d-flex justify-content-end">
          <p>Total: $23500</p>
        </div>
        <AnotacionesResum />
      </div>
      <button className="button-resumen">Enviar a cocina</button>
    </>
  );
};

export default Resumen;
