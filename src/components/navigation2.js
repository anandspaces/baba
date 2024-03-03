import React from 'react';

export default function Navigation2() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#active">Active</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#dropdown" role="button" aria-expanded="false">Dropdown</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#action">Action</a></li>
                    <li><a className="dropdown-item" href="#another">Another action</a></li>
                    <li><a className="dropdown-item" href="#something">Something else here</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#seperated">Separated link</a></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#link">Link</a>
            </li>
        </ul>
    )
}