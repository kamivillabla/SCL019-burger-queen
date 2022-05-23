import React from "react";
import { Link } from "react-router-dom";
import "../../css/navbar.css";

const NavbarChef = () => {
  return (
    <>
      <nav className="navbar navbar__container d-flex justify-content-end navbar__link-end">
        <div className="">
          <Link to="/">
            <i className="fa-solid fa-arrow-left nav__icons "></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarChef;
