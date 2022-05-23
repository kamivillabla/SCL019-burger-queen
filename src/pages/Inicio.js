import React, { useContext } from "react";
import { Context } from "../context/UseContext";
import "../css/page-inicio.css";
import { Link } from "react-router-dom";
import Footer from "../components/general/Footer";

import "../App.css";

const Inicio = () => {
  const { setUser } = useContext(Context);

  const userChange = (name) => {
    setUser(name);
  };

  return (
    <div className=" container--color d-flex flex-column ">
      <main className="container-fluid vh-100 d-flex flex-column  justify-content-evenly">
        <div className="d-flex justify-content-center">
          <img
            className="img-logo"
            src={require("../img/pizza-otrologo.png")}
            alt="Imagen pizza Logo"
          />
        </div>
        <div className="d-flex justify-content-center ">
          <Link
            onClick={() => userChange("meserx")}
            className="button-inicio"
            to="/Menu"
          >
            Meserx
          </Link>
          <Link
            onClick={() => userChange("chef")}
            className="button-inicio"
            to="/Cocina"
          >
            Chef
          </Link>
          {/*           <Link className="button-inicio" to="/Entregar">
            Pedidos Listos
          </Link> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Inicio;
