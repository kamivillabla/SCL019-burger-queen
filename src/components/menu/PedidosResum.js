import React from "react";
import "../../css/resumen.css";
import "../../App.css";

const PedidosResum = () => {
  return (
    <>
      <div className="d-flex justify-content-around align-items-center mt-5 container-pedido">
        <span className="circle"></span>
        <h3>Pizza Vegetariana</h3>
        <h4>$3999</h4>
        <i class="fa-solid fa-trash-arrow-up resumen-icons"></i>
      </div>
      <hr className="resumen-border mt-2" />
    </>
  );
};

export default PedidosResum;
