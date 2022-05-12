import React, { useEffect, useContext } from "react";
import { Context } from "../../context/UseContext";
import OrderProducts from "../general/OrderProducts";
import Comment from "../general/Comment";
import "../../css/page-kitchen.css";
import "../../css/btnSendTo.css";
import { db } from "../../firebase/configfirebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

const OrderKitchen = () => {
  const { orderKitchen, setOrderKitchen } = useContext(Context);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "order"), orderBy("order", "asc")),
      (snapshot) => {
        const products = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setOrderKitchen(products);
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

  // Filtrado de pedidos Pendientes y/o listo para delivery
  let ordersReadyKitchen = orderKitchen.filter((order) => {
    return order.state === "Pendiente" || order.state === "Listo para delivery";
  });

  return (
    <>
      {ordersReadyKitchen.length > 0 ? (
        ordersReadyKitchen.map((order) => (
          <article key={order.id} className="mt-3">
            <form onSubmit={updateStatus} className="orderKitchen ">
              <div className="orderKitchen__cliente pt-2">
                <h4>Cliente: {order.clientName}</h4>
              </div>
              <div className="orderKitchen__cliente">
                <h4>Mesa:{order.clientTable}</h4>
              </div>
              <p>{order.time}</p>
              <hr className="borderHr mt-3" />
              {/* Los pedidos iterables */}
              {order.order.map((item, index) => (
                <OrderProducts
                  key={index}
                  name={item.name}
                  count={item.count}
                />
              ))}
              <hr className="borderHr mt-3" />
              <Comment comment={order.comment} />
              <p
                className={
                  order.state !== "Pendiente"
                    ? "orderKitchen--colorGreen"
                    : "orderKitchen--colorRed"
                }
              >
                <span className="orderKitchen__titleState">Estado:</span>
                {order.state === "Listo para delivery"
                  ? " Pedido Listo"
                  : " " + order.state}
              </p>
            </form>
            <button
              type="submit"
              className="ordersKitchen__btn mt-1"
              onClick={(e) => updateStatus(e, "Listo para delivery", order.id)}
            >
              Listo
            </button>
          </article>
        ))
      ) : (
        <article>
          <h2 className="text-white mt-5">No hay pedidos en cocina</h2>
        </article>
      )}
    </>
  );
};

export default OrderKitchen;
