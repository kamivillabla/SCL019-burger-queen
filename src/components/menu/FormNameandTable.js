import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UseContext";
/* Estilos css */
import "../../css/formNameandTable.css";

const FormNameandTable = () => {
  const { clientName, setClientName, table, setTable } = useContext(Context);
  return (
    <>
      <form className="form">
        <div className="row mt-4">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              id="text"
              placeholder="Nombre cliente"
              value={clientName.slice(0, 20)}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-control"
              name="mesa"
              id="number"
              value={table}
              onChange={(e) => setTable(e.target.value)}
            >
              <option>N° Mesa</option>
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

export default FormNameandTable;
