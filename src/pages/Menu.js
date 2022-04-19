import React from 'react'
import '../App.css';
import '../css/page-menu.css'
import Form from '../components/Form';
import Tabmenu from '../components/Tabmenu';

const Menu = () => {
  return (
    <div className='container-fluid d-flex flex-column justify-content-center container-menu'>
      <div className="container row">
        {/* Menú */}
        <div className="col-12 col-md-6">
          <Tabmenu />
        </div>
        {/* Pedido total */}
        <div className="col-12 col-md-6">

        </div>
      </div>
    </div>
  )
}

export default Menu