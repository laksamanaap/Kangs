"use client";
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" id="navbar">
            <span className="navbar-brand fw-medium">Maduran<span className="navbar-brand active">s.</span></span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="#navbarCollapse" aria-expanded="false" aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav d-flex gap-3 mx-auto mg-lg-0">
                    <li>
                        <a className="nav-link" aria-current="page" href="#">Package</a>
                    </li>
                    <li>
                        <a className="nav-link" aria-current="page" href="#">Services</a>
                    </li>
                    <li>
                        <a className="nav-link" aria-current="page" href="#">Blog</a>
                    </li>
                    <li>
                        <a className="nav-link" aria-current="page" href="#">FAQ</a>
                    </li>
                </ul>
                <div className="d-flex gap-3 align-items-center">
                    <Dropdown>
                        <Dropdown.Toggle className='primary' id="dropdown-basic">
                            Indonesia
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </nav>
    )
}

export default Navbar