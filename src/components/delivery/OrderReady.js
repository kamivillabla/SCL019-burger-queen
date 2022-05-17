import React, { useEffect, useContext } from "react";
import { Context } from "../../context/UseContext";
import OrderProducts from "../general/OrderProducts";
import Comment from "../general/Comment";
import { deliveredToTable } from "../../function/errorManagement";
import "../../css/page-kitchen.css";
import "../../css/btnSendTo.css";

import { db } from "../../firebase/configfirebase";

import {
  collection,
  onSnapshot,
  query,
  updateDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

const OrderReady = () => {
  const { orderDelivery, setOrderDelivery } = useContext(Context);

  // Hora producto entregado a cliente
  const customerDeliveryTime = () => {
    let currentTime = new Date();
    return `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  };

  useEffect(() => {
    onSnapshot(
      query(collection(db, "order")),
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

  const updateStatus = async (e, state, time, id) => {
    e.preventDefault();
    deliveredToTable();
    try {
      await updateDoc(doc(db, "order", id), {
        state: state,
        customerDeliveryTime: time,
      });
      console.log("El pedido fue enviado a delivery con exito");
    } catch (error) {
      console.log("Error al actualizar el pedido");
      console.log(error);
    }
  };

  // Filtrado de pedidos listos
  let ordersReady = orderDelivery.filter((order) => {
    return order.state === "Listo para delivery" || order.state === "Entregado";
  });

  // Ordenar hora pedido
  const orderProductTime = ordersReady.sort((a, b) => {
    if (a.endTime < b.endTime) {
      return 1;
    }
    if (a.endTime > b.endTime) {
      return -1;
    }
    return 0;
  });

  return (
    <>
      {ordersReady.length > 0 ? (
        orderProductTime.map((order) => (
          <article key={order.id} className="mt-3">
            <form onSubmit={updateStatus} className="orderKitchen">
              <p className="orderKitchen__time pt-2">
                Hora entregado a garzón/a: {order.endTime}
              </p>
              <p className="orderKitchen__time">
                Hora entregado cliente: {order.customerDeliveryTime}
              </p>
              <div className="orderKitchen__cliente pt-2">
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
              <p
                className={
                  order.state !== "Listo para delivery"
                    ? "orderKitchen--colorGreen"
                    : "orderKitchen--colorRed"
                }
              >
                <span className="orderKitchen__titleState">Estado:</span>
                {order.state === "Listo para delivery"
                  ? " A espera de ser entregado"
                  : " Entregado a cliente"}
              </p>
            </form>
            <button
              type="submit"
              className="ordersKitchen__btn mt-1"
              onClick={(e) =>
                updateStatus(e, "Entregado", customerDeliveryTime(), order.id)
              }
            >
              Entregar
            </button>
          </article>
        ))
      ) : (
        <article>
          <h2 className="text-white mt-5">
            <mark className="markColor">
              No hay pedidos para entregar a las mesas
            </mark>
          </h2>
        </article>
      )}
      ;
    </>
  );
};

export default OrderReady;
