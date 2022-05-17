import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import menu from "../../dataJson/menu.json";
/* Estilos css */
import "../../css/productsFood.css";

/* ({}) = desestructuración seria igual que poner props.nombre */

function PizzaProduct() {
  const { productFood, setProductFood } = useContext(Context);
  const menuPizzas = menu.pizzas;

  const addProductFood = (product) => {
    const productsExist = productFood.find((item) => item.id === product.id);
    if (productsExist) {
      setProductFood(
        productFood.map((item) =>
          item.id === product.id
            ? { ...productsExist, count: productsExist.count + 1 }
            : item
        )
      );
    } else {
      setProductFood([...productFood, { ...product, count: 1 }]);
    }
  };
  return (
    <>
      {menuPizzas.map((pizza) => {
        return (
          <button
            className="row mt-5 productFood__container p-4"
            key={pizza.id}
            onClick={() => addProductFood(pizza)}
          >
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={pizza.image}
                    alt={`Imagen ${pizza.name}`}
                  />
                </div>
                <div className="col-7">
                  <h3>{pizza.name}</h3>
                  <p>{pizza.description}.</p>
                </div>
                <div className="col-2">
                  <p className="fw-bold">
                    ${pizza.price.toLocaleString("es-CL")}
                  </p>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </>
  );
}

export default PizzaProduct;
