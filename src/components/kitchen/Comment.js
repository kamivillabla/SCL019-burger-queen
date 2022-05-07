import "../../css/commentsOrder.css";
const Comment = ({ comment }) => {
  return (
    <>
      <p className="mx-5 mt-3">
        <span
          className="circleIcons"
          style={{ display: comment !== "" ? "inline-block" : "none" }}
        >
          <i className="fa-solid fa-circle"></i>
        </span>
        {comment}
      </p>
    </>
  );
};

export default Comment;
