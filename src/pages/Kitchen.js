import React from "react";
import Navbar from "../components/general/NavBar";
import OrderKitchen from "../components/kitchen/OrderKitchen";

const Kitchen = () => {
  return (
    <>
      <main className="container--color min-vh-100 pb-5">
        <Navbar />
        <h1 className="text-center text-white my-5">Cocina</h1>
        <section className="d-flex justify-content-center flex-wrap">
          <OrderKitchen />
        </section>
      </main>
    </>
  );
};

export default Kitchen;
