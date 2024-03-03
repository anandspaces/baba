import React from 'react';

export default function Footer() {
    const customFooter = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
        marginTop: '50px',
    };

    return (
        <footer style={customFooter}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>&copy; 2024 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
