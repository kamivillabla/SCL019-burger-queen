import React from "react";
import { Route, Routes } from "react-router-dom";
import { DatosContext } from "./context/UseContext";
import Inicio from "./pages/Inicio";
import Menu from "./pages/Menu";
import Kitchen from "./pages/Kitchen";
import Delivery from "./pages/Delivery";
import Error404 from "./pages/Error404";

/* ES6 */

const App = () => {
  return (
    <DatosContext>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Cocina" element={<Kitchen />} />
        <Route path="Entregar" element={<Delivery />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </DatosContext>
  );
};

export default App;
