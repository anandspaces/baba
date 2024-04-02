import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleNavbar = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <i className="bi bi-rocket text-warning"></i> Social Rocket
                </Link>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light" type="submit"><i class="bi bi-search"></i></button>
                </form>
                <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse${navOpen ? " show" : ""}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="bi bi-house-door-fill"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">
                                <i className="bi bi-person"></i> Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/message" className="nav-link">
                                <i className="bi bi-chat"></i> Messages
                            </Link>
                        </li>
                    </ul>
                    
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle" onClick={toggleDropdown}>
                                
                            </button>
                            <ul className={`dropdown-menu${isOpen ? " show" : ""}`}>
                                <li><button className="dropdown-item">Settings</button></li>
                                <li><button className="dropdown-item">Help</button></li>
                                <li><button className="dropdown-item">Logout</button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
