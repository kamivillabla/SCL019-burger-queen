import React, { createContext, useState } from "react";

/* import menu from "../dataJson/menu.json"; */

/* Llamada de archivo.js de mi menu */
/* const listMenu = menu; */

export const Context = createContext();

export const DatosContext = ({ children }) => {
  const [productFood, setProductFood] = useState([]);
  const [clientName, setClientName] = useState("");
  const [table, setTable] = useState("");
  const [comment, setComment] = useState("");
  const [orderKitchen, setOrderKitchen] = useState([]);
  const [orderDelivery, setOrderDelivery] = useState([]);

  return (
    <>
      <Context.Provider
        value={{
          productFood,
          setProductFood,
          clientName,
          setClientName,
          table,
          setTable,
          comment,
          setComment,
          orderKitchen,
          setOrderKitchen,
          orderDelivery,
          setOrderDelivery,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};
