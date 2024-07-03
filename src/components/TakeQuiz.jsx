import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TakeQuiz = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await axios.get(`/api/quizzes/${id}`);
      setQuiz(response.data);
    };
    fetchQuiz();
  }, [id]);

  const handleAnswerChange = (qIndex, value) => {
    setAnswers({ ...answers, [qIndex]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newScore = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <div>
      <h1>{quiz.title}</h1>
      <form onSubmit={handleSubmit}>
        {quiz.questions.map((question, qIndex) => (
          <div key={qIndex}>
            <p>{question.questionText}</p>
            {question.options.map((option, oIndex) => (
              <div key={oIndex}>
                <input
                  type="radio"
                  name={`question-${qIndex}`}
                  value={option}
                  onChange={(e) => handleAnswerChange(qIndex, e.target.value)}
                  required
                />
                {option}
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Submit Quiz</button>
      </form>
      {score !== null && <div>Your score: {score}/{quiz.questions.length}</div>}
    </div>
  );
};

export default TakeQuiz;
