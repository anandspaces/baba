import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function Message() {
    // State to track the input value
    const [newMessage, setNewMessage] = useState('');
    
    // Dummy data for messages
    const [messages, setMessages] = useState([
        { id: 1, sender: 'User1', content: 'Hey there! How are you?' },
        { id: 2, sender: 'User2', content: 'I\'m good, thanks!' },
        // Add more messages as needed
    ]);

    // Function to handle sending a new message
    const sendMessage = () => {
        if (newMessage.trim()) {
        const newId = messages.length + 1;
        const newSender = 'You'; // Assuming the user sending the message is the current user
        const newMessageObj = { id: newId, sender: newSender, content: newMessage };
        setMessages([...messages, newMessageObj]);
        setNewMessage(''); // Clear the input field after sending message
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                        <h2 className="card-title mb-0">Messages</h2>
                        </div>
                        <div className="card-body">
                        <div className="message-list">
                            {messages.map((message) => (
                            <div key={message.id} className="card mb-3">
                            <div className="card-body">
                                <div className="message-sender">
                                <i className="bi bi-person-fill"></i> {message.sender}
                                </div>
                                <div className="message-content">{message.content}</div>
                            </div>
                            </div>
                            ))}
                        </div>
                        </div>
                        <div className="card-footer">
                        <div className="input-group">
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Type your message..."
                            value={newMessage} // Set the input value from state
                            onChange={(e) => setNewMessage(e.target.value)} // Update state on input change
                            />
                            <button className="btn btn-primary" onClick={sendMessage}>Send</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
}
