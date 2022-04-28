import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import menu from "../../dataJson/menu.json";
import "../../css/productos.css";
import "../../App.css";
/* ({}) = desestructuración seria igual que poner props.nombre */

function Productospizza() {
  const { producto, setProductos } = useContext(Context);
  const menuPizzas = menu.pizzas;

  /*  const agregarProducto = (element) => {
    return setProductos({
      ...producto,

      listOrder: [...producto.listOrder, { ...element, count: 1 }],
    });
  }; */

  const agregarProducto = (id, name, price) => {
    if (producto.length === 0) {
      setProductos([{ id: id, name: name, price: price, count: 1 }]);
    } else {
      const nuevoProducto = [...producto];
      // Compruebo si ya existe el producto
      const arrCard = nuevoProducto.some((element) => {
        return element.id === id;
      });
      //Si ya existe lo aumento
      if (arrCard) {
        nuevoProducto.forEach((element, index) => {
          if (element.id === id) {
            // Solo el valor del producto con el mismo id
            const count = nuevoProducto[index].count;
            nuevoProducto[index] = {
              id: id,
              name: name,
              price: price,
              count: count + 1,
            };
          }
        });
      } else {
        //Si no existe lo creo
        nuevoProducto.push({
          id: id,
          name: name,
          price: price,
          count: 1,
        });
      }
      //valor final del carrito
      setProductos(nuevoProducto);
    }
  };

  return (
    <>
      {menuPizzas.map((pizza) => {
        return (
          <button
            className="row mt-5 productos-container p-4"
            key={pizza.id}
            onClick={() => agregarProducto(pizza.id, pizza.name, pizza.price)}
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
