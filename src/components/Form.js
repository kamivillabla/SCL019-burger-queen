import React from 'react'
import '../css/form.css'

const Form = () => {
  return (
    <>
   <form>
    <div class="row mt-4">
        <div class="col-md-8">
            <input type="text" className="form-control form-nombre-cliente" id="text" placeholder="Nombre cliente" />
        </div>
        <div class="col-md-4">
            <select className="form-control form-num-mesa" name='mesa' id="number">
                <option disabled selected>N° Mesa</option>
                <option value="mesa-1">1</option>
                <option value="mesa-2">2</option>
                <option value="mesa-3">3</option>
                <option value="mesa-4">4</option>
                <option value="mesa-5">5</option>
            </select>
        </div>
     </div>
    </form>
    </>
  )
}

export default Form