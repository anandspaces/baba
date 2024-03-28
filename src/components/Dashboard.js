import React, { useState } from 'react';
import './styles/styles.css';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpeg';
import Sidebar from './Sidebar';
// import Comment from './Comment';

export default function Dashboard() {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };


    const post = [
        {
            id:1,
            content:'Strong people makes places strong',
            author:'Abraham Lincoln',
            timestamp:'12:34:66 3/26/2024',
            likes:'24',
            comments:'45',
            shares:'100',
            image:image1,
        },
        {
            id:2,
            content:'Strong places make people strong',
            author:`Jeane D'souza`,
            timestamp:'12:34:66 3/26/2024',
            likes:'24',
            comments:'45',
            shares:'100',
            image:image2,
        },
    ];
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <h2>Social Media Posts</h2>
                    {post.slice(0, 5).map(post => (
                    <div key={post.id} className="container mt-4">
                        <div className='card shadow'>
                            <div className="card-body">
                                <div className='flex align-items-center'>
                                {post.pfp && <img src="profile-picture.jpg" alt="Profile" className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />}
                                    <div className='d-flex justify-content-between'>
                                        <h5 className='card-title mb-0'>{post.author}</h5>
                                        <p className='card-text text-muted'>{post.timestamp}</p>
                                    </div>
                                    <div style={{ width: '100%', overflow: 'hidden' }}>
                                    {post.image && <img src={post.image} className='image-fluid mt-3 rounded' alt="Post" style={{ width: '100%', maxHeight: '400px' }} />}
                                    </div>
                                    <p className="card-text mt-3">{post.content}</p>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div className="d-flex align-items-center">
                                            <button className="btn btn-icon btn-outline-primary me-2" onClick={toggleLike}>
                                            {liked ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
                                            </button>
                                            <p className="mb-0 me-4">{post.likes}</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <button className="btn btn-icon btn-outline-secondary me-2"><i className="bi bi-chat"></i></button>
                                            <p className="mb-0 me-4">{post.comments}</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <button className="btn btn-icon btn-outline-danger me-2"><i className="bi bi-share"></i></button>
                                            <p className="mb-0">{post.shares}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="col-md-4">
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
}
