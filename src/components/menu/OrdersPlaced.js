import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
/* Estilos css */
import "../../css/menuOrder.css";

const OrdersPlaced = () => {
  const { productFood, setProductFood } = useContext(Context);

  // sumar producto
  const moreProductos = (id) => {
    const arrCard = productFood.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setProductFood(arrCard);
  };

  // Restar producto
  const subtractProducts = (id) => {
    const arrCard = productFood.map((item) =>
      item.id === id ? { ...item, count: item.count - 1 } : item
    );
    setProductFood(arrCard);
  };

  // Eliminar producto:
  const deleteProducts = (element) => {
    const elimProduct = productFood.find((item) => item.id === element.id);
    if (elimProduct.count) {
      setProductFood(productFood.filter((item) => item.id !== element.id));
    }
  };

  return (
    <>
      {productFood.map((element, index) => (
        <div
          key={index}
          className="d-flex align-items-center orderPlaced__container justify-content-evenly "
        >
          <p className="justify-self-start orderPlaced__nameProducts">
            <span className="circleIcons">
              <i className="fa-solid fa-circle"></i>
            </span>
            {element.name}
          </p>
          <p>${element.price}</p>
          <div className="d-flex orderPlaced__width justify-content-around align-items-center">
            <span
              onClick={() => subtractProducts(element.id)}
              className="orderPlaced__btnCount"
            >
              -
            </span>
            <p className="orderPlaced__paragraph">{element.count}</p>
            <span
              onClick={() => moreProductos(element.id)}
              className="orderPlaced__btnCount"
            >
              +
            </span>
          </div>
          <span onClick={() => deleteProducts(element)}>
            <i className="fa-solid fa-trash-arrow-up resumen-icons"></i>
          </span>
        </div>
      ))}
    </>
  );
};

export default OrdersPlaced;
