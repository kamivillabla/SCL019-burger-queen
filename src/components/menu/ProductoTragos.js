import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import "../../css/productos.css";
import "../../App.css";
/* ({}) = desestructuración seria igual que poner props.nombre */
function ProductosTragos() {
  const { producto, setProductos } = useContext(Context);
  const menuTragos = producto.menu.tragos;

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
      {menuTragos.map((tragos) => {
        return (
          <button
            className="row mt-5 productos-container p-4"
            onClick={() => agregarProducto(tragos)}
            key={tragos.id}
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
