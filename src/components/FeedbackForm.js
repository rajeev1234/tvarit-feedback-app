import React, { useState } from 'react';
import axios from 'axios';
import '../styles/styles.css';

const FeedbackForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) {
      setError('Username cannot be empty');
      return;
    }
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }
    if (feedback.length < 10) {
      setError('Feedback must be at least 10 characters long');
      return;
    }


    try {
        const response = await axios.post('https://adminjaiswal123.pythonanywhere.com/submit-feedback', {
          username,
          email,
          feedback
        });
  
        if (response.status === 200) {
          setMessage('Feedback submitted successfully');
          setError('');
          onSubmit({ username, email, feedback });
          setUsername('');
          setEmail('');
          setFeedback('');
        } else {
          setError('An error occurred while submitting feedback');
        }
      } catch (error) {
        setError('An error occurred while submitting feedback');
      }
    };

  return (
    <div className="container">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        <button className="btn" type="submit">Submit</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FeedbackForm;
