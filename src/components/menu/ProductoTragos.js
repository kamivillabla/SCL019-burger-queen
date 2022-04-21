import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import "../../css/productos.css";
import "../../App.css";
/* ({}) = desestructuración seria igual que poner props.nombre */
function ProductosTragos() {
  const { producto } = useContext(Context);
  const menuTragos = producto.menu.tragos;

  return (
    <>
      {menuTragos.map((tragos) => {
        return (
          <button className="row mt-5 productos-container p-4" key={tragos.id}>
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={tragos.image}
                    alt={`Imagen ${tragos.name}`}
                  />{" "}
                  *
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
