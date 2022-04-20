import React from 'react'
import '../App.css';
import '../css/page-menu.css'
import Tabmenu from '../components/Tabmenu';
import NavBar from '../components/Nav';

const Menu = () => {
  return (
    <div className='container-menu--color'>
      <NavBar />
      <div className='container-menu'>
        <div className='container-fluid d-flex flex-column justify-content-center '>
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
      </div>
    </div>
  )
}

export default Menu