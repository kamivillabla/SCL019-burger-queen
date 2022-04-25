import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import "../../css/resumen.css";
import "../../App.css";

const PedidosResum = () => {
  const { producto, setProductos } = useContext(Context);

  // sumar producto
  const sumarElement = (id) => {
    const arrCard = producto.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setProductos(arrCard);
  };

  // Restar producto
  const quitarElement = (id) => {
    const arrCard = producto.map((item) =>
      item.id === id ? { ...item, count: item.count - 1 } : item
    );
    setProductos(arrCard);
  };

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
            <button
              onClick={() => quitarElement(element.id)}
              className="button-contador"
            >
              -
            </button>
            <p className="parrafo-contador">{element.count}</p>
            <button
              onClick={() => sumarElement(element.id)}
              className="button-contador"
            >
              +
            </button>
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
