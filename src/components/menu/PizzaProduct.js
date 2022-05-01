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

  /*  const agregarProducto = (element) => {
    return setProductos({
      ...producto,

      listOrder: [...producto.listOrder, { ...element, count: 1 }],
    });
  }; */

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
      {menuPizzas.map((pizza) => {
        return (
          <button
            className="row mt-5 productFood__container p-4"
            key={pizza.id}
            onClick={() => addProductFood(pizza.id, pizza.name, pizza.price)}
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
