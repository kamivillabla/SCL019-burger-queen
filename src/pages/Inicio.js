import React from 'react'
import '../css/page-inicio.css'
import '../App.css'
import { Link } from 'react-router-dom'

const inicio = () => {
    return (
        <div className='container-fluid vh-100 container-inicio d-flex flex-column justify-content-evenly'>
            <div className='d-flex justify-content-center'>
                <img className='img-logo' src={require('../img/pizza-otrologo.png')} alt="Imagen pizza Logo" />
            </div>
            <div className="contenedor d-flex justify-content-center ">
                <Link className='button-inicio' to="/Menu">Mesas</Link>
                <button className='button-inicio'>Cocina</button>
                <button className='button-inicio'>Pedidos listos</button>
            </div>
            
        </div>
    )
}

export default inicio