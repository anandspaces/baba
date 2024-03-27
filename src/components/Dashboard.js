import React, { useState } from 'react';
import './styles/styles.css';
import image1 from './images/image1.jpeg'
import Sidebar from './Sidebar';

export default function Dashboard() {
    const [friends, setFriends] = useState(['Amit Kumar','Shyam Sinha','Raj Malhotra','Ved Trivedi']);

    const handleSubmit = (addedFriend) => {
        alert(`${addedFriend} is added as a friend!`);
        setFriends(prevFriends => prevFriends.filter(friend => friend !== addedFriend));
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
            image:image1,
        },
    ];
    return (
        <>
        <div className="container mt-4">
            <h2>Social Media Posts</h2>
            {post.slice(0, 5).map(post => (
                <div key={post.id} className="post">
                    {post.image && <img src={post.image} alt="Post" />}
                    <div className="card-body">
                        <p className="post-content">{post.content}</p>
                        <div className="post-details">
                            <span className="post-author">{post.author}</span>
                            <span className="post-timestamp">{post.timestamp}</span>
                        </div>
                        <div className="post-stats">
                            <span className="post-likes">Likes: {post.likes}</span>
                            <span className="post-comments">Comments: {post.comments}</span>
                            <span className="post-shares">Shares: {post.shares}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <div className="post">
                        <div className="card-body">
                            <h2 className="post-title">Post Title 1</h2>
                            <img src='images/image1.jpg' alt='image1' />
                            <p className="post-content">{post.content}</p>
                        </div>
                    </div>
                    <div className="post">
                        <div className="card-body">
                            <h2 className="post-title">Post Title 2</h2>
                            <img src='images/image1.jpg' alt='image1' />
                            <p className="post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, metus non consectetur pretium.</p>
                        </div>
                    </div>
                    {/* <!-- Add more posts as needed --> */}
                </div>
                <div className="col-md-4">
                    <Sidebar friends={friends} handleSubmit={handleSubmit} />
                </div>
            </div>
        </div>
        </>
    );
}
