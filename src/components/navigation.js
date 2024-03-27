import React from 'react';

export default function Navigation() {
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
              <a className="nav-link" href="/">
                <i className="bi bi-house-door-fill"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                <i className="bi bi-person"></i> Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/message">
                <i className="bi bi-chat"></i> Messages
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/profilesetting" role="button" data-bs-toggle="dropdown">
                More
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#settings"><i className="bi bi-gear"></i> Settings</a></li>
                <li><a className="dropdown-item" href="#help"><i className="bi bi-question-circle"></i> Help</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#logout"><i className="bi bi-box-arrow-right"></i> Logout</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex ms-auto">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
