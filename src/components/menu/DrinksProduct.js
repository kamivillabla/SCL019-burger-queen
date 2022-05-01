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

  const addProductFood = (id, name, price) => {
    if (productFood.length === 0) {
      setProductFood([{ id: id, name: name, price: price, count: 1 }]);
    } else {
      const newProductFood = [...productFood];
      // Compruebo si ya existe el producto
      const arrCard = newProductFood.some((element) => {
        return element.id === id;
      });
      //Si ya existe lo aumento
      if (arrCard) {
        newProductFood.forEach((element, index) => {
          if (element.id === id) {
            // Solo el valor del producto con el mismo id
            const count = newProductFood[index].count;
            newProductFood[index] = {
              id: id,
              name: name,
              price: price,
              count: count + 1,
            };
          }
        });
      } else {
        //Si no existe lo creo
        newProductFood.push({
          id: id,
          name: name,
          price: price,
          count: 1,
        });
      }
      //valor final del carrito
      setProductFood(newProductFood);
    }
  };

  return (
    <>
      {menuDrinks.map((drinks) => {
        return (
          <button
            className="row mt-5 productFood__container p-4"
            key={drinks.id}
            onClick={() => addProductFood(drinks.id, drinks.name, drinks.price)}
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
