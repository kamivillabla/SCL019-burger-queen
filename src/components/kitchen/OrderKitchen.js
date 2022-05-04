import React, { useEffect, useContext } from "react";
import { Context } from "../../context/UseContext";
import OrderKitchenProducts from "./OrderKitchenProducts";
import CommentKitchen from "./CommentKitchen";
import "../../css/page-kitchen.css";
import { db } from "../../firebase/configfirebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
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

  return (
    <>
      {orderKitchen.map((order) => (
        <article key={order.id} className="orderKitchen mx-3 my-4">
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
            <>
              <OrderKitchenProducts
                id={item.id}
                name={item.name}
                count={item.count}
              />
            </>
          ))}
          <hr className="borderHr mt-3" />
          {/*  <CommentKitchen /> */}
          <CommentKitchen comment={order.comment} />
        </article>
      ))}
      ;
    </>
  );
};

export default OrderKitchen;
