import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import AnotacionesResum from "./AnotacionesResum";
import PedidosResum from "./PedidosResum";
import "../../App.css";
import "../../css/resumen.css";

const Resumen = () => {
  const { name, mesa, producto } = useContext(Context);

  // Suma total productos
  const totalProductos = producto.reduce(
    (total, product) => (total = total + product.price * product.count),
    0
  );
  const total = totalProductos;

  return (
    <>
      <article className="container resumen-container mt-5">
        <div className="d-flex resumen-cliente mt-4">
          <h3>Cliente:</h3>
          <input
            className="form-resumen"
            type="text"
            placeholder="Nombre cliente"
            value={name}
            readOnly
          />
        </div>
        <div className="d-flex resumen-mesa">
          <h3>Mesa:</h3>
          <input className="form-resumen" type="text" value={mesa} />
        </div>
        <hr className="resumen-border mt-3" />
        {/* Iterable */}
        <PedidosResum />

        {/* Total */}
        <div className="d-flex justify-content-end">
          <p>Total: {total}</p>
        </div>
        <AnotacionesResum />
      </article>
      <button type="submit" className="button-resumen">
        Enviar a cocina
      </button>
    </>
  );
};

export default Resumen;
