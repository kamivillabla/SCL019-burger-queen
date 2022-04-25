import React from "react";
import "../App.css";
import "../css/page-menu.css";
import Tabmenu from "../components/menu/Tabmenu";
import Resumen from "../components/menu/Resumen";
import NavBar from "../components/Nav";

const Menu = () => {
  return (
    <div className="container--color">
      <NavBar />
      <main className="container-fluid container-menu d-flex flex-column align-items-center">
        <section className="container-fluid row">
          {/* Menú */}
          <article className="col-12 col-md-6 container-tabmenu">
            <Tabmenu />
          </article>
          {/* Pedido total */}
          <article className="col-12 col-md-6 d-flex flex-column container-resumen">
            <h2 className="text-center resumen-text">Resumen</h2>
            <Resumen />
          </article>
        </section>
      </main>
    </div>
  );
};

export default Menu;
