import React from "react";
import "../../css/anotacionesResum.css";
import "../../App.css";

const AnotacionesResum = () => {
  return (
    <div className="anotaciones--position">
      <p className="anotaciones-text">Anotaciones:</p>
      <textarea className="container anotaciones-container mt-5 mb-5 "></textarea>
    </div>
  );
};

export default AnotacionesResum;
