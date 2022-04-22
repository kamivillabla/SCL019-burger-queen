import React, { createContext, useState } from "react";

import menu from "../dataJson/menu.json";

/* Llamada de archivo.js de mi menu */
const listMenu = menu;
console.log(listMenu.pizzas);

export const Context = createContext();

export const DatosContext = ({ children }) => {
  const [producto, setProductos] = useState({
    menu: listMenu,
  });
  const [name, setName] = useState("");
  const [mesa, setMesa] = useState("");

  return (
    <>
      <Context.Provider
        value={{ producto, setProductos, name, setName, mesa, setMesa }}
      >
        {children}
      </Context.Provider>
    </>
  );
};
