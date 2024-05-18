// src/pages/FeedbackFormPage.js
import React from 'react';
import FeedbackForm from '../components/FeedbackForm';

const FeedbackFormPage = ({ onSubmit }) => {
  return (
    <div>
      <FeedbackForm onSubmit={onSubmit} />
    </div>
  );
};

export default FeedbackFormPage;
