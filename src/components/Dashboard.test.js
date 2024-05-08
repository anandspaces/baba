import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import Dashboard from './Dashboard';

// Mock Firebase storage and authentication functions
jest.mock('../firebase', () => ({
  __esModule: true,
  auth: {
    onAuthStateChanged: jest.fn(),
  },
  storage: {
    ref: jest.fn(),
    uploadBytesResumable: jest.fn(),
    getDownloadURL: jest.fn(),
  },
}));

test('adds new post on form submission', async () => {
  // Render the Dashboard component
  render(<Dashboard />);

  // Fill out the form with new post content
  const textarea = screen.getByPlaceholderText("What's on your mind?");
  fireEvent.change(textarea, { target: { value: 'This is a new post!' } });

  // Submit the form
  fireEvent.click(screen.getByText('Post'));

  // Wait for the new post to appear on the dashboard
  await waitFor(() => {
    const newPost = screen.getByText('This is a new post!');
    expect(newPost).toBeInTheDocument();
  });
});
