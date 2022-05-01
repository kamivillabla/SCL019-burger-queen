import React, { useState } from "react";

import PizzaProduct from "./PizzaProduct";
import DrinksProduct from "./DrinksProduct";
import FormNameandTable from "./FormNameandTable";
/* Estilos css */
import "../../css/menuProducts.css";

const MenuProducts = () => {
  // Estado actual y la función que la actualiza
  const [tabState, settabState] = useState(1);

  const tabValue = (index) => {
    settabState(index);
  };
  return (
    <>
      <article className="d-flex justify-content-center">
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
      </article>
      {/* Componente form */}
      <FormNameandTable />

      <div className={tabState === 1 ? "content  active-content" : "content"}>
        {/* Convertir a archivo .json para mostrarlo */}
        <PizzaProduct />
      </div>

      <div className={tabState === 2 ? "content  active-content" : "content"}>
        <DrinksProduct />
      </div>
    </>
  );
};

export default MenuProducts;
