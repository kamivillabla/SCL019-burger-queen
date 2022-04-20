import React from "react";
import "../css/form.css";

const Form = () => {
  return (
    <>
      <form>
        <div className="row mt-4">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control form-nombre-cliente"
              id="text"
              placeholder="Nombre cliente"
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-control form-num-mesa"
              name="mesa"
              id="number"
            >
              <option disabled>N° Mesa</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
