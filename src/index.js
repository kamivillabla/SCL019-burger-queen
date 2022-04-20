import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
/* import Menu from './pages/Menu'; */
import Inicio from './pages/Inicio';
import Menu from './pages/Menu'
import Error404 from './pages/Error404'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="Menu" element={<Menu />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

