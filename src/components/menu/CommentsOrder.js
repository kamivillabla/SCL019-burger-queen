import React, { useContext } from "react";
import { Context } from "../../context/UseContext";
/* Estilos css */
import "../../css/commentsOrder.css";

const CommentsOrder = () => {
  const { comment, setComment } = useContext(Context);

  return (
    <div className="commentsOrder--position">
      <p className="commentsOrder__text">Anotaciones:</p>
      <textarea
        className="container commentsOrder__comment mt-5 mb-5 "
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
    </div>
  );
};

export default CommentsOrder;
