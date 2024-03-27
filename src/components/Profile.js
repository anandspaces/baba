import React, { useState } from 'react';

export default function Profile() {
    // Dummy data for friends list
    const [friends, setFriends] = useState([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
        // Add more friends as needed
    ]);

    // Function to handle adding a friend
    const addFriend = () => {
        const newName = prompt('Enter friend name:');
        if (newName) {
        const newFriend = { id: friends.length + 1, name: newName };
        setFriends([...friends, newFriend]);
        }
    };

    return (
        <div className="container mt-4">
        <div className="row">
            <div className="col">
            <div className="card">
                <div className="card-header">
                <h2 className="card-title mb-0">Profile</h2>
                </div>
                <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                    <div className="friends-list">
                        <h3 className="friends-title mb-3">Friends</h3>
                        <ul className="list-group">
                        {friends.map((friend) => (
                            <li key={friend.id} className="list-group-item">{friend.name}</li>
                        ))}
                        </ul>
                        <button className="btn btn-primary mt-3" onClick={addFriend}>Add Friend</button>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="profile-details">
                        <h3 className="profile-details-title mb-3">Profile Details</h3>
                        <p className="mb-2"><strong>Name:</strong> John Doe</p>
                        <p className="mb-2"><strong>Email:</strong> john.doe@example.com</p>
                        <p className="mb-2"><strong>Location:</strong> New York, USA</p>
                        <p className="mb-2"><strong>Interests:</strong> Traveling, Photography, Cooking</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}
