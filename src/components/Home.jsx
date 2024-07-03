import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Quiz Platform</h1>
      <Link to="/create-quiz">
        <button>Create a Quiz</button>
      </Link>
      <Link to="/quiz-list">
        <button>Take a Quiz</button>
      </Link>
    </div>
  );
};

export default Home;
