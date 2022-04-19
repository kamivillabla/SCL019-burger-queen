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
            <select className="form-control form-num-mesa" id="number">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
            </select>
        </div>
     </div>
    </form>
    </>
  )
}

export default Form