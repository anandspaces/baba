import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <a className="navbar-brand" href="#social">
            <i className="bi bi-rocket text-warning"></i> Social Rocket
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                    <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle" onClick={toggleDropdown} aria-expanded={isOpen ? "true" : "false"}>
                            More
                        </button>
                        <ul className={`dropdown-menu${isOpen ? " show" : ""}`} aria-labelledby="navbarDropdown">
                            <li><button className="dropdown-item">Settings</button></li>
                            <li><button className="dropdown-item">Help</button></li>
                            <li><button className="dropdown-item">Logout</button></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex ms-auto">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-disabled btn-light" type="submit">Search</button>
                </form>
            </div>
        </div>
        </nav>
    );
}
