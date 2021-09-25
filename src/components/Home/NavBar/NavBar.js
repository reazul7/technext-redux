import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/"><img src="https://technext.it/assets/img/technext/techenxt-logo.png" alt="logo" style={{height:"40px", width:"40px"}}/> </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto fw-bold fs-5">
                        <li class="nav-item">
                            <Link to="/"class="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about"class="nav-link">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/services"class="nav-link">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" class="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;