import React from "react";
import Navbar from "../components/general/NavBar";
import OrderReady from "../components/delivery/OrderReady";

import "../App.css";

const Delivery = () => {
  return (
    <>
      <main className="container--color min-vh-100 pb-5">
        <Navbar />
        <h1 className="text-center text-white my-5">
          Pedidos listos para servir y/o entregar
        </h1>
        <section className="d-flex justify-content-center  flex-wrap">
          {/* OrdenDelivery */}
          <OrderReady />
        </section>
      </main>
    </>
  );
};

export default Delivery;
