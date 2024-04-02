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
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <i className="bi bi-rocket text-light me-2"></i> Social Rocket
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-end${navOpen ? " show" : ""}`}>
                    <form className="d-flex me-3">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit"><i className="bi bi-search"></i></button>
                    </form>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="bi bi-house-door-fill me-1"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">
                                <i className="bi bi-person me-1"></i> Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/message" className="nav-link">
                                <i className="bi bi-chat me-1"></i> Messages
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
