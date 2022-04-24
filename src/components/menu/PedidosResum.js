import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import "../../css/resumen.css";
import "../../App.css";

const PedidosResum = () => {
  const { producto } = useContext(Context);

  return (
    <>
      {producto.listOrder.map((element) => (
        <div
          key={element.id}
          className="d-flex justify-content-around align-items-center mt-5 container-pedido"
        >
          <span className="circle"></span>
          <h4>${element.name}</h4>
          <p>${element.price}</p>
          <button className="button-contador">-</button>
          <p>2</p>
          <button className="button-contador">+</button>
          <i className="fa-solid fa-trash-arrow-up resumen-icons"></i>
        </div>
      ))}
    </>
  );
};

export default PedidosResum;
