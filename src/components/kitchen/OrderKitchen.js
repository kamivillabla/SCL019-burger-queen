import React, { useEffect, useContext } from "react";
import { Context } from "../../context/UseContext";
import OrderProducts from "../general/OrderProducts";
import Comment from "../general/Comment";
import { readyAndSentToDelivery } from "../../function/errorManagement";
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

const OrderKitchen = () => {
  const { orderKitchen, setOrderKitchen } = useContext(Context);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "order")),
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

  //Hora de terminado producto de cocinar:
  const endTime = () => {
    let currentTime = new Date();
    return `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  };

  const updateStatus = async (e, state, time, id) => {
    e.preventDefault();

    readyAndSentToDelivery();

    try {
      await updateDoc(doc(db, "order", id), {
        state: state,
        endTime: time,
      });
      console.log("El pedido fue enviado a delivery con exito");
    } catch (error) {
      console.log("Error al actualizar el pedido");
      console.log(error);
    }
  };

  // Filtrado de pedidos Pendientes y/o listo para delivery
  let ordersReadyKitchen = orderKitchen.filter((order) => {
    return (
      order.state === "Pendiente" ||
      order.state === "Listo para delivery" ||
      order.state === "Entregado"
    );
  });

  // Ordenar hora pedido
  const orderProductTime = ordersReadyKitchen.sort((a, b) => {
    if (a.checkInTime < b.checkInTime) {
      return 1;
    }
    if (a.checkInTime > b.checkInTime) {
      return -1;
    }
    return 0;
  });

  return (
    <>
      {ordersReadyKitchen.length > 0 ? (
        orderProductTime.map((order) => (
          <article key={order.id} className="mt-3">
            <form onSubmit={updateStatus} className="orderKitchen ">
              <p className="orderKitchen__time pt-2">
                Hora ingreso: {order.checkInTime}
              </p>
              <p className="orderKitchen__time">
                Hora termino: {order.endTime}
              </p>
              <div className="orderKitchen__cliente pt-2">
                <h4>Cliente: {order.clientName}</h4>
              </div>
              <div className="orderKitchen__cliente">
                <h4>Mesa:{order.clientTable}</h4>
              </div>

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
                  ? " Pedido Listo y enviado a garzón"
                  : " " + order.state}
              </p>
            </form>
            <button
              type="submit"
              className="ordersKitchen__btn mt-1"
              onClick={(e) =>
                updateStatus(e, "Listo para delivery", endTime(), order.id)
              }
            >
              Listo
            </button>
          </article>
        ))
      ) : (
        <article>
          <h2 className="text-white mt-5">
            <mark className="markColor">No hay pedidos en cocina</mark>
          </h2>
        </article>
      )}
    </>
  );
};

export default OrderKitchen;
