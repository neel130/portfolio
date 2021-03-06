import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Neel</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link " aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/profile">Profile</Link>
        <Link className="nav-link" to="/resume">Resume</Link>
        <Link className="nav-link" to="/service">Service</Link>
       
      </div>
    </div>
  </div>
</nav>

        </div>
    )
}

export default NavBar ;
