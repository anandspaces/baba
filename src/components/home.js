import React from 'react';
import './styles/styles.css'
export default function Dashboard() {

    return(
        <div>

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