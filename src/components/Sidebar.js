import React from 'react';
import Gallery from './Gallery';

export default function Sidebar() {
    // const [friends, setFriends] = useState(['Vaibhaw Anand','Ram Roy', 'Sam Shaw','Tom Tichkule']);

    // const handleSubmit = (addedFriend) => {
    //     alert(`${addedFriend} is added as a friend!`);
    //     setFriends(prevFriends => prevFriends.filter(friend => friend !== addedFriend));
    // };
    return(
        <>
        {/* <div className="sidebar p-4">
            <h2 className="sidebar-title mb-4">Do you know? </h2>
            {friends.map((friend, index) => (
            <div key={index} className="d-flex align-items-center justify-content-between mb-3">
                <p className="m-0">{friend}</p>
                <button className="btn btn-primary" onClick={() => handleSubmit(friend)}>Add Friend</button>
            </div>
            ))}
            
        </div> */}
        <Gallery />
        </>
    );
}