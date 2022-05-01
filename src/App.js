import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Menu from "./pages/Menu";
import Error404 from "./pages/Error404";
import { DatosContext } from "./context/UseContext";
/* ES6 */

const App = () => {
  return (
    <DatosContext>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </DatosContext>
  );
};

export default App;
