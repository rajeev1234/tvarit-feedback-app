import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format ,parseISO} from 'date-fns';
import '../styles/styles.css';

const FeedbackListPage = () => {
  const [feedbackList, setFeedbackList] = useState([]);


  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('https://adminjaiswal123.pythonanywhere.com/get-feedback');
        setFeedbackList(response.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="container">
      <h2>Feedback List</h2>
      {feedbackList.length === 0 ? (
        <p>No feedback available</p>
      ) : (
        feedbackList.map((feedback, index) => (
          <div className="feedback-item" key={index}>
            <h3>{feedback.username}</h3>
            <p><strong>Email:</strong> {feedback.email}</p>
            <p><strong>Feedback:</strong> {feedback.feedback}</p>
            <p><small><strong>Submitted on:</strong> {format(parseISO(feedback.timestamp), 'dd.MM.yyyy; HH:mm')}</small></p>
          </div>
        ))
      )}
    </div>
  );
};

export default FeedbackListPage;
