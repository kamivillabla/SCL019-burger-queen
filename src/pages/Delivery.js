import React from "react";
import Navbar from "../components/general/NavBar";
import OrderReady from "../components/delivery/OrderReady";
import Footer from "../components/general/Footer";

import "../App.css";

const Delivery = () => {
  return (
    <div className="container--color">
      <main className=" min-vh-100 pb-5">
        <Navbar />
        <h1 className="text-center text-white my-5">
          Pedidos listos para servir y/o entregar
        </h1>
        <section className="d-flex justify-content-center  flex-wrap">
          {/* OrdenDelivery */}
          <OrderReady />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Delivery;
