import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import "../../css/resumen.css";
import "../../App.css";

const PedidosResum = () => {
  const { producto, setProductos } = useContext(Context);

  // Eliminar producto

  return (
    <>
      {producto.map((element, index) => (
        <div
          key={index}
          className="d-flex align-items-center container-pedido justify-content-evenly "
        >
          <span className="circle"></span>
          <p className="justify-self-start">{element.name}</p>
          <p>${element.price}</p>
          <div className="d-flex container-pedido--anchura justify-content-around">
            <button className="button-contador">-</button>
            <p className="parrafo-contador">2</p>
            <button className="button-contador">+</button>
          </div>
          <i
            className="fa-solid fa-trash-arrow-up resumen-icons"
            // ! onClick={() => deleteItem(element.id)}
          ></i>
          .
        </div>
      ))}
    </>
  );
};

export default PedidosResum;
