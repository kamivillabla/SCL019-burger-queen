import React from 'react'
import '../css/nav.css'
import '../App.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className='navbar navbar-container'>
                <div className="container-fluid d-flex justify-content-end">
                    <Link to="/"><i className="fa-solid fa-arrow-left nav-icons"></i></Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar