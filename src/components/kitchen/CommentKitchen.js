import React from "react";
import "../../css/commentsOrder.css";
const CommentKitchen = () => {
  return (
    <div className="commentsOrder--position">
      <p className="commentsOrder__text">Anotaciones:</p>
      <textarea
        readOnly="readonly"
        className="container commentsOrder__comment mt-5 mb-5"
      ></textarea>
    </div>
  );
};

export default CommentKitchen;
