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
    <div className="profile-container">
      <div className="profile-header">
        <h2 className="profile-title">Profile</h2>
      </div>
      <div className="profile-body">
        <div className="friends-list">
          <h3 className="friends-title">Friends</h3>
          <ul className="friends">
            {friends.map((friend) => (
              <li key={friend.id} className="friend">
                {friend.name}
              </li>
            ))}
          </ul>
          <button className="add-friend-btn" onClick={addFriend}>
            Add Friend
          </button>
        </div>
        {/* Additional profile details can go here */}
      </div>
    </div>
  );
}

