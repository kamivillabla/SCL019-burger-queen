import React from "react";
import "../css/page-error404.css";
import { Link } from "react-router-dom";
/* Estilos css */
import "../App.css";

const Error404 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img
              className="img-fluid"
              src={require("../img/notfound.png")}
              alt=""
            />
            <h2 className="text-center">Vuelve al Inicio Haciendo click: </h2>
            <Link className="d-flex justify-content-center" to="/">
              <i className="fa-solid fa-arrow-left nav-icons"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
