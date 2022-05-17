import React from "react";
import { Link } from "react-router-dom";
/* Estilos css */
import "../../css/navbar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar__container">
        <div className="navbar__link-center d-flex justify-content-center">
          <Link className="navbar__link fw-bold" to="/menu">
            Menú
          </Link>
          <Link className="navbar__link fw-bold" to="/cocina">
            Cocina
          </Link>
          <Link className="navbar__link fw-bold" to="/entregar">
            Pedidos Listos
          </Link>
        </div>
        <div className="d-flex justify-content-end navbar__link-end">
          <Link to="/">
            <i className="fa-solid fa-arrow-left nav__icons "></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
