import "../../css/commentsOrder.css";
const CommentKitchen = ({ comment }) => {
  return (
    <>
      <div className="commentsOrder--position">
        <p className="commentsOrder__text">Anotaciones:</p>
        <textarea
          readOnly="readonly"
          value={comment}
          className="container commentsOrder__comment mt-5 mb-5"
        ></textarea>
      </div>
    </>
  );
};

export default CommentKitchen;
