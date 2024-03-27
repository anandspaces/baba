import React from "react";

export default function NewsFeed() {
    return (
        <div className="container mt-5">
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">News Feed</h5>
            <ul className="list-group">
                <li className="list-group-item">
                <h6>Post Title 1</h6>
                <p>Post content goes here...</p>
                </li>
                <li className="list-group-item">
                <h6>Post Title 2</h6>
                <p>Post content goes here...</p>
                </li>
                <li className="list-group-item">
                <h6>Post Title 3</h6>
                <p>Post content goes here...</p>
                </li>
            </ul>
            </div>
        </div>
        </div>
    );
}
