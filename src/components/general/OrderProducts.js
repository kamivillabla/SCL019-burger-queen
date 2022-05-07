const OrderProducts = ({ name, count }) => {
  return (
    <div className="d-flex justify-content-between px-5 mt-3">
      <p>
        <span className="circleIcons">
          <i className="fa-solid fa-circle"></i>
        </span>
        {name}
      </p>
      <p>x{count}</p>
    </div>
  );
};

export default OrderProducts;
