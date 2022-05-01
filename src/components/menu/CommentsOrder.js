import React from "react";
/* Estilos css */
import "../../css/commentsOrder.css";

const CommentsOrder = () => {
  return (
    <div className="commentsOrder--position">
      <p className="commentsOrder__text">Anotaciones:</p>
      <textarea className="container commentsOrder__comment mt-5 mb-5 "></textarea>
    </div>
  );
};

export default CommentsOrder;
