import React from "react";

export default function Dashboard2() {
    return (
        <>
         <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#fb">Facebook-like Social Media</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#profile">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#message">Messages</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container mt-4">
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Post Title 1</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, metus non consectetur pretium.</p>
                    </div>
                </div>
                <div class="card mt-3">
                    <div class="card-body">
                        <h5 class="card-title">Post Title 2</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, metus non consectetur pretium.</p>
                    </div>
                </div>
                {/* <!-- Add more posts as needed --> */}
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sidebar</h5>
                        <p class="card-text">Additional information can go here.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}