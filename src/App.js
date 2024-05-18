// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link , Routes} from 'react-router-dom';
import FeedbackFormPage from './pages/FeedbackFormPage';
import FeedbackListPage from './pages/FeedbackListPage';
import './styles/styles.css';

const App = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmitFeedback = (feedback) => {
    setFeedbackList([...feedbackList, feedback]);
  };

  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">FeedbackApp</Link>
          <div className="navbar-links">
            <Link to="/" className="navbar-item">Submit Feedback</Link>
            <Link to="/feedback-list" className="navbar-item">Feedback List</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<FeedbackFormPage onSubmit={handleSubmitFeedback} />}></Route>
        <Route path="/feedback-list" element={<FeedbackListPage feedbackList={feedbackList} />} ></Route>
      </Routes>
    </Router>
  );
};

export default App;
