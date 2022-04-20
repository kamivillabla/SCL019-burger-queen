import React, { useState } from 'react'
import '../css/tabMenu.css'
import '../App.css'
import Productos from './Productos'
import Form from './Form';

const Tabmenu = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <>
            <div className="d-flex justify-content-center">
                <button
                    className={toggleState === 1 ? 'tabs-productos active-tabs-productos' : 'tabs-productos'}
                    onClick={() => toggleTab(1)}>
                    Pizzas
                </button>
                <button
                    className={toggleState === 2 ? 'tabs-productos active-tabs-productos' : 'tabs-productos'}
                    onClick={() => toggleTab(2)}
                >Tragos
                </button>
            </div>
            <Form />

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? 'content  active-content' : 'content'}
                >
                    <Productos
                        imagen='productos'
                        nombre='Vegetariana'
                        ingredientes='Aceituna, piña, acelga'
                        precio='$7.990'
                    />
                    <Productos
                        imagen='productos'
                        nombre='Vegana meat not meat'
                        ingredientes='Carne Vegan, lorem, lorem '
                        precio='$7.990'
                    />
                    <Productos
                        imagen='productos'
                        nombre='Vegetariana'
                        ingredientes='Aceituna, piña, acelga'
                        precio='$7.990'
                    />
                </div>

                <div
                    className={toggleState === 2 ? 'content  active-content' : 'content'}
                >
                    <Productos
                        imagen='productos'
                        nombre='Mojito'
                        ingredientes='de Frutilla'
                        precio='$4000'
                    />
                    <Productos
                        imagen='productos'
                        nombre='Mojito'
                        ingredientes='de Frutilla'
                        precio='$4000'
                    />
                    <Productos
                        imagen='productos'
                        nombre='Mojito'
                        ingredientes='de Frutilla'
                        precio='$4000'
                    />
                </div>
            </div>
        </>
    );
}

export default Tabmenu