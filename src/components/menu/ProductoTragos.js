import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import "../../css/productos.css";
import "../../App.css";
import menu from "../../dataJson/menu.json";
import Productospizza from "./ProductoPizza";
/* ({}) = desestructuración seria igual que poner props.nombre */
function ProductosTragos() {
  const { producto, setProductos } = useContext(Context);

  const menuTragos = menu.tragos;

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
      {menuTragos.map((tragos) => {
        return (
          <button
            className="row mt-5 productos-container p-4"
            key={tragos.id}
            onClick={() =>
              agregarProducto(tragos.id, tragos.name, tragos.price)
            }
          >
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={tragos.image}
                    alt={`Imagen ${tragos.name}`}
                  />{" "}
                </div>
                <div className="col-7">
                  <h3>{tragos.name}</h3>
                  <p>{tragos.description}.</p>
                </div>
                <div className="col-2">
                  <p className="fw-bold">${tragos.price}</p>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </>
  );
}

export default ProductosTragos;
