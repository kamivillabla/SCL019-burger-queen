import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import "../../css/productos.css";
import "../../App.css";
/* ({}) = desestructuración seria igual que poner props.nombre */
function Productospizza() {
  const { producto } = useContext(Context);
  const menuPizza = producto.menu.pizzas;

  return (
    <>
      {menuPizza.map((pizza) => {
        return (
          <button className="row mt-5 productos-container p-4" key={pizza.id}>
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={pizza.image}
                    alt={`Imagen ${pizza.name}`}
                  />
                  *
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
