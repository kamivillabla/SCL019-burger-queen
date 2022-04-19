import React from 'react'
import '../css/productos.css'

function productos(props) {
  return (
    <div className='productos-container'>
        <img className='producto-imagen' src={require(`../img/pizzaProductos.png`)} alt="" />
        <div className='productos-nombreDescrip-container'>
            <h4>Pizza vegetariana</h4>
            <p>Lorem, ipsum, dolor, sit, amet.</p>
        </div>
        <div className='producto-precioAgregar-container'>
            <p className='producto-precio'>$7.990</p>
            <button className='producto-agregar-button'>Agregar</button>    
        </div>
    </div>
  )
}

export default productos