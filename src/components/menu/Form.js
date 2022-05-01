import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
import "../../css/form.css";

const Form = () => {
  const { name, setName, mesa, setMesa } = useContext(Context);
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
              value={name.slice(0, 20)}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-control form-num-mesa"
              name="mesa"
              id="number"
              value={mesa}
              onChange={(e) => setMesa(e.target.value)}
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
