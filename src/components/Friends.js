import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
export default function Friends() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              const uid = user.uid;
              setUser(user);
              console.log("uid", uid);
            } else {
              // User is signed out
              setUser(null);
              console.log("user is logged out")
            }
          });
    }, []);
    // Dummy data for friends list
    const [friends, setFriends] = useState([
        { id: 1, name: 'Ram Roy' },
        { id: 2, name: 'Sam Shaw' },
        { id: 3, name: 'Tom Tichkule' },
        { id: 4, name: 'Vaibhaw Anand' },
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
    if(user === null) {
        navigate('/login');
    } else {
        return (
            <div className="container mt-4">
            <div className="row">
                <div className="col">
                <div className="card">
                    <div className="card-header">
                    <h2 className="card-title mb-0">Friends</h2>
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
                            <p className="mb-2"><strong>Name:</strong> Vaibhaw Anand</p>
                            <p className="mb-2"><strong>Email:</strong> anandvaibhaw000@gmail.com</p>
                            <p className="mb-2"><strong>Location:</strong> Aurangabad &#40;Bihar&#41;</p>
                            <p className="mb-2"><strong>Interests:</strong> Traveling, Coding, Cooking</p>
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
    
}
