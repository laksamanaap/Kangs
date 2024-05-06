"use client";
import Image from 'next/image';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import inaFlag from "@/assets/indonesia.png";
import ukFlag from "@/assets/united-kingdom.png";
import chinaFlag from "@/assets/china.png";

const Navbars = () => {
    return (
        // <nav className="navbar navbar-expand-lg" id="navbar">
        //     <span className="navbar-brand fw-medium">Kang<span className="navbar-brand active">s.</span></span>
        //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="#navbarCollapse" aria-expanded="false" aria-label="Toggle Navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarCollapse">
        //         <ul className="navbar-nav d-flex gap-3 mx-auto mg-lg-0">
        //             <li>
        //                 <a className="nav-link" aria-current="page" href="#">Package</a>
        //             </li>
        //             <li>
        //                 <a className="nav-link" aria-current="page" href="#">Services</a>
        //             </li>
        //             <li>
        //                 <a className="nav-link" aria-current="page" href="#">Blog</a>
        //             </li>
        //             <li>
        //                 <a className="nav-link" aria-current="page" href="#">FAQ</a>
        //             </li>
        //         </ul>
        //         <div className="d-flex gap-3 align-items-center">
        //             <Dropdown>
        //                 <Dropdown.Toggle className='primary text-white' id="dropdown-basic">
        //                     <Image src={inaFlag} width={24} height={24} alt="Indonesia Flag" />
        //                 </Dropdown.Toggle>
        //                 <Dropdown.Menu className='text-center'>
        //                     <Dropdown.Item href="#/action-1">
        //                         <Image src={inaFlag} width={24} height={24} alt="Indonesia Flag" />
        //                     </Dropdown.Item>
        //                     <Dropdown.Item href="#/action-2">
        //                         <Image src={ukFlag} width={24} height={24} alt="UK Flag" />
        //                     </Dropdown.Item>
        //                     <Dropdown.Item href="#/action-3">
        //                         <Image src={chinaFlag} width={24} height={24} alt="China Flag" />
        //                     </Dropdown.Item>
        //                 </Dropdown.Menu>
        //             </Dropdown>
        //         </div>
        //     </div>
        // </nav>
        <Navbar expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbars