import React from "react";
import Navbar from "../components/general/NavBar";
import OrderKitchen from "../components/kitchen/OrderKitchen";
import Footer from "../components/general/Footer";
import "../css/page-kitchen.css";

import "../App.css";

const Kitchen = () => {
  return (
    <div className="container--color ">
      <main className="min-vh-100 pb-5">
        <Navbar />
        <h1 className="text-center text-white my-5">Cocina</h1>

        <div className="">
          <div className="d-flex flex-wrap justify-content-center">
            <OrderKitchen />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kitchen;
