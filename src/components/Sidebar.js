import React from 'react';

export default function Sidebar({friends,handleSubmit}) {
    return(
        <div className="sidebar">
                        <h2 className="sidebar-title">Do you know? </h2>
                        {friends.map((friend, index) => (
                            <div key={index} className="sidebar-content">
                                {friend}
                                <button className="btn btn-primary mt-2" onClick={() => handleSubmit(friend)}>Add Friend</button>
                            </div>
                        ))}
                    </div>
    );
}