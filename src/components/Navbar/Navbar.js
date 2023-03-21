import React from 'react'
import {NavLink,Link} from "react-router-dom"
import "../../App.css";

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-light mb-4">
  <div className="container">
  <Link className="fs-3 ubuntu navbar-brand">Rick and Morty <span className="text-primary">Wiki</span> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      
      <style jsx>
    {`
    button[aria-expanded="false"] > .close {
        display: none
    }

    button[aria-expanded="true"] > .open {
        display: none
    }
    `}
      </style>

      <i className='fas fa-bars open text-dark'></i>
      <i className='fas fa-times close text-dark'></i>

    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav fs-5 fw-bold text-secondary">
        <NavLink activeClassName="active" to="/" className="nav-link  " aria-current="page" href="#">Characters</NavLink>
        <NavLink to="/episode" className="nav-link  " href="#">Episode</NavLink>
        <NavLink to="/location" className="nav-link   " href="#">Location</NavLink>
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar