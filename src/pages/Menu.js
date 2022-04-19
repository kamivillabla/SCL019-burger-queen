import React from 'react'
import '../App.css';
import '../css/page-menu.css'
import Form from '../components/Form';
import Productos from '../components/Productos';
/* import Productos from '../components/Productos'; */

const Menu = () => {
  return (
    <div className='container vh-100'>
      <div className="row">
        {/* Menú */}
        <div className="col-12 col-md-6">
          <div className='d-flex justify-content-center'>
            <button type="button" className="buttonComponente">Pizzas</button>
            <button type="button" className="buttonComponente">Bebidas</button>
          </div>
          <div>
            <Form />
            <Productos 
            nombre='Pizza Vegetariana'
            ingredientes='Aceituna, piña, acelga'
            precio='$7.990'
            />
          </div>
        </div>
        {/* Pedido total */}
        <div className="col-12 col-md-6">
          <p>hola</p>
        </div>
      </div>
    </div>
  )
}

export default Menu