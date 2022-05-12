import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import menu from "../../dataJson/menu.json";
/* Estilos css */
import "../../css/productsFood.css";

/* ({}) = desestructuración seria igual que poner props.nombre */
function DrinksProduct() {
  const { productFood, setProductFood } = useContext(Context);

  const menuDrinks = menu.drinks;

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
      {menuDrinks.map((drinks) => {
        return (
          <button
            className="row mt-5 productFood__container p-4"
            key={drinks.id}
            onClick={() => addProductFood(drinks)}
          >
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={drinks.image}
                    alt={`Imagen ${drinks.name}`}
                  />{" "}
                </div>
                <div className="col-7">
                  <h3>{drinks.name}</h3>
                  <p>{drinks.description}.</p>
                </div>
                <div className="col-2">
                  <p className="fw-bold">
                    ${drinks.price.toLocaleString("es-CL")}
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

export default DrinksProduct;
