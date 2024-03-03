import React from 'react';
import './styles/styles.css'
export default function Dashboard() {

    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <i class="bi bi-rocket text-warning"></i>
                <a className="navbar-brand" href="#social"><i class="bi bi-rocket text-warning"></i></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#profile">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#message">Messages</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <div className="post">
                        <div className="card-body">
                            <h2 className="post-title">Post Title 1</h2>
                            <p className="post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, metus non consectetur pretium.</p>
                        </div>
                    </div>
                    <div className="post">
                        <div className="card-body">
                            <h2 className="post-title">Post Title 2</h2>
                            <p className="post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, metus non consectetur pretium.</p>
                        </div>
                    </div>
                    {/* <!-- Add more posts as needed --> */}
                </div>
                <div className="col-md-4">
                    <div className="sidebar">
                        <h2 className="sidebar-title">Sidebar</h2>
                        <p className="sidebar-content">Additional information can go here.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
