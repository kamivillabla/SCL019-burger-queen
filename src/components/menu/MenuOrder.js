import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import { db } from "../../firebase/configfirebase";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import CommentsOrder from "./CommentsOrder";
import OrdersPlaced from "./OrdersPlaced";
import BtnSendToKitchen from "./BtnSendToKitchen";
/* Estilos css */
import "../../css/menuOrder.css";
const MenuOrder = () => {
  const { clientName, table, productFood } = useContext(Context);

  // Suma total productos
  const totalProducts = productFood.reduce(
    (total, product) => (total = total + product.price * product.count),
    0
  );
  const total = totalProducts.toLocaleString("es-CL");

  /* Agregar a base de datos de firebase */
  const addOrder = async (e) => {
    e.preventDefault();
    console.log("Funciona aaaa!!");
    try {
      const docRef = await addDoc(collection(db, "order"), {
        clientName: clientName,
        clientTable: table,
        total: total,
        order: productFood,
        state: "cocinando",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <form onSubmit={(e) => addOrder(e)}>
        <article className="container menuOrder__container mt-5">
          <div className="d-flex menuOrder__clientName pt-5">
            <h3>Cliente:</h3>
            <input
              className="menuOrder__formClient"
              type="text"
              placeholder="Nombre cliente"
              value={clientName}
              readOnly
            />
          </div>
          <div className="d-flex menuOrder__clientTable">
            <h3>Mesa:</h3>
            <input
              className="menuOrder__formClient"
              type="text"
              value={table}
            />
          </div>
          <hr className="menuOrder__border mt-3" />
          {/* Los pedidos iterables */}
          <OrdersPlaced />
          {/* Total */}
          <div className="d-flex justify-content-center">
            <p className="menuOrder__total">Total: $ {total}</p>
          </div>
          <CommentsOrder />
        </article>
        <BtnSendToKitchen />
      </form>
    </>
  );
};

export default MenuOrder;
