import React from 'react';

export default function Message() {
  return (
    <div className="message-container">
      <div className="message-header">
        <h2 className="message-title">Messages</h2>
      </div>
      <div className="message-body">
        <div className="message">
          <div className="message-sender">John Doe</div>
          <div className="message-content">Hey there! How are you?</div>
        </div>
        <div className="message">
          <div className="message-sender">Jane Smith</div>
          <div className="message-content">I'm good, thanks!</div>
        </div>
        {/* More messages can go here */}
      </div>
    </div>
  );
}
