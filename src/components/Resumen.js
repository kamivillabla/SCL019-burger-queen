import React from "react";
import AnotacionesResum from "./AnotacionesResum";
import PedidosResum from "./PedidosResum";
import "../App.css";
import "../css/resumen.css";

const Resumen = () => {
  return (
    <>
      <div className="container resumen-container mt-5">
        <div className="d-flex resumen-cliente mt-4">
          <h3>Cliente:</h3>
          <p>karla</p>
        </div>
        <div className="d-flex resumen-mesa">
          <h3>Mesa:</h3>
          <p>6</p>
        </div>
        <hr className="resumen-border" />
        {/* Iterable */}
        <PedidosResum />
        <PedidosResum />
        <PedidosResum />
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
