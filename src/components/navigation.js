import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
    const [user, setUser] = useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              const uid = user.uid;
              setUser(user);
              console.log("uid", uid);
            } else {
              // User is signed out
              setUser(null);
              console.log("user is logged out")
            }
          });
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleNavbar = () => {
        setNavOpen(!navOpen);
    };

    const navigate = useNavigate();
 
    const handleLogout = () => {
        if(user===null) {
            alert("Already logged out!");
        } else {
            signOut(auth).then(() => {
                // Sign-out successful.
                    navigate("/login");
                    alert("Signed out successfully")
                    console.log("Signed out successfully")
                }).catch((error) => {
                console.log("An error happened");
                });
        }              
        
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/dashboard">
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
                            <Link className="nav-link" to="/dashboard">
                                <i className="bi bi-house-door-fill me-1"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/friends" className="nav-link">
                                <i className="bi bi-person me-1"></i> Friends
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
                                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
