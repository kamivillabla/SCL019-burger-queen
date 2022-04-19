import React from 'react'
import '../css/productos.css'
import '../App.css'

function Productos(props) {
  return (
    /* Averiguar si lo puedo poner como button */
    <div className="row mt-5 productos-container p-4">
      <div className="col-12">
        <div className="row">
          <div className="col-3">
            <img className='img-fluid' src={require(`../img/pizza-${props.imagen}.png`)} alt="Imagen de producto Pizza" />
          </div>
          <div className="col-7">
            <h3>{props.nombre}</h3>
            <p>{props.ingredientes}.</p>
          </div>
          <div className="col-2">
            <p className='fw-bold'>{props.precio}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Productos


