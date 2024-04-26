import React, { useState } from 'react';

export default function ProfileSettings() {
    // Define state variables for user profile data
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [saving, setSaving] = useState(false); // State for indicating saving status
    const [saved, setSaved] = useState(false); // State for indicating saved status

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Simulate saving process (replace with actual API call)
        setSaving(true);
        await saveProfileChanges({ username, email, bio });
        setSaving(false);
        setSaved(true);
        // Reset saved status after 3 seconds
        setTimeout(() => {
        setSaved(false);
        }, 3000);
    };

    // Function to simulate saving profile changes (replace with actual API call)
    const saveProfileChanges = (profileData) => {
        return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Profile updated:', profileData);
            resolve();
        }, 2000);
        });
    };

    return (
        <div className="container mt-4">
        <h2>Profile Settings</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            </div>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className="mb-3">
            <label htmlFor="bio" className="form-label">Bio:</label>
            <textarea
                className="form-control"
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
            />
            </div>
            <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? 'Saving...' : 'Save Changes'}
            </button>
            {saved && <div className="alert alert-success mt-3">Changes saved successfully.</div>}
        </form>
        </div>
    );
}
