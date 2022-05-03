import React from "react";
import OrderKitchenProducts from "./OrderKitchenProducts";
import CommentKitchen from "./CommentKitchen";
import "../../css/page-kitchen.css";

const OrderKitchen = () => {
  return (
    <>
      <article className="orderKitchen mx-3 my-4">
        <div className="orderKitchen__cliente pt-5">
          <h4>Cliente:</h4>
        </div>
        <div className="orderKitchen__cliente">
          <h4>Mesa:</h4>
        </div>
        <hr className="borderHr mt-3" />
        {/* Los pedidos iterables */}
        <OrderKitchenProducts />
        <OrderKitchenProducts />
        <OrderKitchenProducts />
        <hr className="borderHr mt-3" />
        <CommentKitchen />
      </article>
    </>
  );
};

export default OrderKitchen;
