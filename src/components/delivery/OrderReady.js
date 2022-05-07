import React, { useEffect, useContext } from "react";
import { Context } from "../../context/UseContext";
import OrderProducts from "../general/OrderProducts";
import Comment from "../kitchen/Comment";
import "../../css/page-kitchen.css";
import { db } from "../../firebase/configfirebase";

import {
  collection,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

const OrderReady = () => {
  const { orderDelivery, setOrderDelivery } = useContext(Context);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "order"), orderBy("order", "asc")),
      (snapshot) => {
        const products = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setOrderDelivery(products);
      },
      (err) => {
        console.log(err);
      }
    );
  });

  const updateStatus = async (e, state, id) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "order", id), {
        state: state,
      });
      console.log("El pedido fue enviado a delivery con exito");
    } catch (error) {
      console.log("Error al actualizar el pedido");
      console.log(error);
    }
  };

  // Filtrado de pedidos listos
  let ordersReady = orderDelivery.filter((order) => {
    return order.state === "Listo";
  });

  return (
    <>
      {ordersReady.map((order) => (
        <article key={order.id} className="orderKitchen">
          <form onSubmit={updateStatus}>
            <div className="orderKitchen__cliente pt-5">
              <h4>Cliente: {order.clientName}</h4>
            </div>
            <div className="orderKitchen__cliente">
              <h4>Mesa:{order.clientTable}</h4>
            </div>
            <p>{order.time}</p>
            <hr className="borderHr mt-3" />
            {/* Los pedidos iterables */}
            {order.order.map((item) => (
              <OrderProducts
                key={item.id}
                name={item.name}
                count={item.count}
              />
            ))}
            <hr className="borderHr mt-3" />
            {/*  <CommentKitchen /> */}
            <Comment comment={order.comment} />
            <p className="text-center">Estado: {order.state}...</p>
            <button
              type="submit"
              className="btnSendToKitchen__btn"
              onClick={(e) => updateStatus(e, "Entregado", order.id)}
            >
              Listo para servir
            </button>
          </form>
        </article>
      ))}
      ;
    </>
  );
};

export default OrderReady;
