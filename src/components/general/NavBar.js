import React from "react";
import { Link } from "react-router-dom";
/* Estilos css */
import "../../css/navbar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar__container">
        <div className="container-fluid d-flex justify-content-end">
          <Link to="/">
            <i className="fa-solid fa-arrow-left navbar__icons"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
