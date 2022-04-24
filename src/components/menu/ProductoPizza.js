import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import "../../css/productos.css";
import "../../App.css";
/* ({}) = desestructuración seria igual que poner props.nombre */
function Productospizza() {
  const { producto, setProductos } = useContext(Context);
  const menuPizza = producto.menu.pizzas;
  /*   const image = producto.menu.tragos[2].image;
  console.log(image); */

  const agregarProducto = (element) => {
    return setProductos({
      ...producto,
      // Some comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
      listOrder: producto.listOrder.some((product) => product.id === element.id)
        ? producto.listOrder.map((product) =>
            product.id === element.id
              ? { ...product, count: product.count + 1 }
              : product
          )
        : [...producto.listOrder, { ...element, count: 1 }],
    });
  };

  return (
    <>
      {menuPizza.map((pizza) => {
        return (
          <button
            className="row mt-5 productos-container p-4"
            onClick={() => agregarProducto(pizza)}
            key={pizza.id}
          >
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    key={pizza.id}
                    src={pizza.image}
                    alt={`Imagen ${pizza.name}`}
                  />
                </div>
                <div className="col-7">
                  <h3>{pizza.name}</h3>
                  <p>{pizza.description}.</p>
                </div>
                <div className="col-2">
                  <p className="fw-bold">${pizza.price}</p>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </>
  );
}

export default Productospizza;
