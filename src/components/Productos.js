import React from 'react'
import '../css/productos.css'
import '../App.css'

function productos(props) {
  return (
    <div className="row mt-5 productos-container p-4">
      <div className="col-12">
        <div className="row">
          <div className="col-3">
            <img className='producto-imagen img-fluid' src={require(`../img/pizza-productos.png`)} alt="Imagen de producto Pizza" />
          </div>
          <div className="col-6">
            <h3>{props.nombre}</h3>
            <p>{props.ingredientes}.</p>
          </div>
          <div className="col-3">
            <p className='fw-bold'>{props.precio}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default productos


