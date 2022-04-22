import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import "../../css/form.css";

const Form = () => {
  const { name, setName } = useContext(Context);
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
