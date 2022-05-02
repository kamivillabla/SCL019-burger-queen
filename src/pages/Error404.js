import React from "react";
import "../css/page-error404.css";
import { Link } from "react-router-dom";
/* Estilos css */
import "../css/page-error404.css";

const Error404 = () => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center mb-5">
        <div className="row">
          <div className="col">
            <img
              className="img-fluid"
              src={require("../img/notfound.png")}
              alt=""
            />
            <h2 className="text-center">Vuelve al Inicio Haciendo click: </h2>
            <Link className="d-flex justify-content-center" to="/">
              <i className="fa-solid fa-arrow-left nav__icons"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
