"use client";
import { useState, useEffect } from 'react';
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
import logo from "@/assets/Logo KANGS (Black).png";

const Navbars = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const [selectedFlag, setSelectedFlag] = useState(ukFlag);

    const handleLanguageChange = (language: any) => {
        setSelectedLanguage(language);
        switch (language) {
            case "Indonesia":
                setSelectedFlag(inaFlag);
                break;
            case "China":
                setSelectedFlag(chinaFlag);
                break;
            default:
                setSelectedFlag(ukFlag);
                break;
        }
    };


    return (
        <Navbar expand="lg" className="justify-content-between sticky-top navbar-container">
            <Navbar.Brand href="#home">
                <Image src={logo} alt="Kangs Logo" width={65} height={60} className='img-fluid d-block mx-auto' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="mx-auto gap-3 fw-medium">
                    <Nav.Link href="#home">Packages</Nav.Link>
                    <Nav.Link href="#link">Services</Nav.Link>
                    <Nav.Link href="#link">Blog</Nav.Link>
                    <Nav.Link href="#link">FAQ</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav className="align-items-center">
                <Nav.Item>
                    <Nav.Link href="#language" className="d-flex align-items-center">
                        <Image src={selectedFlag} width={24} height={24} alt="Selected Flag" />
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown title={selectedLanguage} id="basic-nav-dropdown" onSelect={handleLanguageChange}>
                    <NavDropdown.Item eventKey="English">English</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Indonesia">Indonesia</NavDropdown.Item>
                    <NavDropdown.Item eventKey="China">China</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}

export default Navbars