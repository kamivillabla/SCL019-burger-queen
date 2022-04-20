import React from "react";
import "../App.css";
import "../css/page-menu.css";
import Tabmenu from "../components/Tabmenu";
import Resumen from "../components/Resumen";
import NavBar from "../components/Nav";

const Menu = () => {
  return (
    <div className="container-color">
      <NavBar />
      <div className="container-fluid container-menu d-flex flex-column align-items-center">
        <div className="container row">
          {/* Menú */}
          <div className="col-12 col-md-6 container-tabmenu">
            <Tabmenu />F
          </div>
          {/* Pedido total */}
          <div className="col-12 col-md-6 d-flex flex-column container-resumen">
            <h2 className="text-center resumen-text">Resumen</h2>
            <Resumen />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
