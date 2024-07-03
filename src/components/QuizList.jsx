import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const QuizList = () => {
  const [quizzzes, setQuizzzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('/api/quizzes');
        setQuizzzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };
    fetchQuizzes();
  }, []);

  return (
    <div>
      <h1>Available Quizzes</h1>
      <ul>
        {quizzzes.map((quiz) => (
          <li key={quiz._id}>
            <Link to={`/take-quiz/${quiz._id}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
