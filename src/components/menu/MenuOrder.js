import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import { db } from "../../firebase/configfirebase";
import {
  collection,
  addDoc,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import CommentsOrder from "./CommentsOrder";
import OrdersPlaced from "./OrdersPlaced";
import BtnSendToKitchen from "./BtnSendToKitchen";
import Swal from "sweetalert2";

/* Estilos css */
import "../../css/menuOrder.css";
const MenuOrder = () => {
  const { clientName, table, productFood, comment } = useContext(Context);

  // Suma total productos
  const totalProducts = productFood.reduce(
    (total, product) => (total = total + product.price * product.count),
    0
  );
  const total = totalProducts.toLocaleString("es-CL");

  /* Funcion Manejo de errores */
  const error = () => {
    Swal.fire({
      icon: "error",
      title: "Falta nombre de cliente y/o mesa",
      confirmButtonText: "Aceptar",
      background: "rgba(54, 57, 60, 0.8)",
      confirmButtonColor: "#595959",
      color: "#fff",
      titleColor: "#fff",
      width: "45rem",
      customClass: {
        confirmButton: "color",
      },
    });
  };
  const errorProducts = () => {
    Swal.fire({
      icon: "error",
      title: "No hay productos agregados",
      confirmButtonText: "Aceptar",
      background: "rgba(54, 57, 60, 0.8)",
      confirmButtonColor: "#595959",
      color: "#fff",
      titleColor: "#fff",
      width: "45rem",
    });
  };

  const correct = () => {
    Swal.fire({
      icon: "success",
      title: "La orden a sido enviada a la cocina correctamente",
      confirmButtonText: "Aceptar",
      background: "rgba(54, 57, 60, 0.8)",
      confirmButtonColor: "#595959",
      color: "#fff",
      titleColor: "#fff",
      width: "45rem",
    });
  };

  /* Agregar a base de datos de firebase */
  const addOrder = async (e) => {
    e.preventDefault();
    /* Alert & Manejo de errores */
    if (!clientName.trim() || !table.trim() || table === "N° Mesa") {
      return error();
    } else if (productFood.length === 0) {
      return errorProducts();
    }
    correct();

    try {
      const docRef = await addDoc(collection(db, "order"), {
        clientName: clientName,
        clientTable: table,
        total: total,
        order: productFood,
        comment: comment,
        dateTime: Timestamp.fromDate(new Date()),
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
            <p className="menuOrder__total pt-5">Total: $ {total}</p>
          </div>
          <CommentsOrder />
        </article>
        <BtnSendToKitchen />
      </form>
    </>
  );
};

export default MenuOrder;
