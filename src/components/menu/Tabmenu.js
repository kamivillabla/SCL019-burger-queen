import React, { useState } from "react";
import "../../css/tabMenu.css";
import "../../App.css";
import Productospizza from "./ProductoPizza";
import ProductosTragos from "./ProductoTragos";
import Form from "./Form";

const Tabmenu = () => {
  // Estado actual y la función que la actualiza
  const [tabState, settabState] = useState(1);

  const tabValue = (index) => {
    settabState(index);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          className={
            tabState === 1
              ? "tabs-productos active-tabs-productos"
              : "tabs-productos"
          }
          onClick={() => tabValue(1)}
        >
          Pizzas
        </button>
        <button
          className={
            tabState === 2
              ? "tabs-productos active-tabs-productos"
              : "tabs-productos"
          }
          onClick={() => tabValue(2)}
        >
          Tragos
        </button>
      </div>
      {/* Componente form */}
      <Form />

      <div className={tabState === 1 ? "content  active-content" : "content"}>
        {/* Convertir a archivo .json para mostrarlo */}
        <Productospizza
          imagen="vegetariana"
          nombre="Vegetariana"
          ingredientes="Aceituna, piña, acelga"
          precio="$7.990"
        />
      </div>

      <div className={tabState === 2 ? "content  active-content" : "content"}>
        <ProductosTragos
          imagen="vegetariana"
          nombre="Mojito"
          ingredientes="de Frutilla"
          precio="$4000"
        />
      </div>
    </>
  );
};

export default Tabmenu;
