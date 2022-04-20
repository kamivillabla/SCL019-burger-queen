import React from 'react'
import '../css/page-inicio.css'
import '../App.css'

const inicio = () => {
    return (
        <div className='container-fluid vh-100 container-inicio d-flex flex-column justify-content-evenly'>
            <div className='d-flex justify-content-center'>
                <img className='img-logo' src={require('../img/pizza-otrologo.png')} alt="Imagen pizza Logo" />
            </div>
            <div className="contenedor d-flex justify-content-center ">
                <button className='button-inicio'>Mesas</button>
                <button className='button-inicio'>Cocina</button>
                <button className='button-inicio'>Pedidos listos</button>
            </div>
        </div>
    )
}

export default inicio