import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import AnotacionesResum from "./AnotacionesResum";
import PedidosResum from "./PedidosResum";
import "../../App.css";
import "../../css/resumen.css";

const Resumen = () => {
  const { name, setName } = useContext(Context);

  return (
    <>
      <div className="container resumen-container mt-5">
        <div className="d-flex resumen-cliente mt-4">
          <h3>Cliente:</h3>
          <input
            className="form-resumen"
            type="text"
            placeholder="Nombre cliente"
            readOnly
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
