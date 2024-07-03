import React, { useState } from 'react';
import axios from 'axios';

const CreateQuiz = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ questionText: '', options: ['', '', '', ''], correctAnswer: '' }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newQuiz = { title, questions };
    await axios.post('/api/quizzes', newQuiz);
    setTitle('');
    setQuestions([{ questionText: '', options: ['', '', '', ''], correctAnswer: '' }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { questionText: '', options: ['', '', '', ''], correctAnswer: '' }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Quiz Title" required />
      {questions.map((question, qIndex) => (
        <div key={qIndex}>
          <input
            type="text"
            value={question.questionText}
            onChange={(e) => handleQuestionChange(qIndex, 'questionText', e.target.value)}
            placeholder="Question"
            required
          />
          {question.options.map((option, oIndex) => (
            <input
              key={oIndex}
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
              placeholder={`Option ${oIndex + 1}`}
              required
            />
          ))}
          <input
            type="text"
            value={question.correctAnswer}
            onChange={(e) => handleQuestionChange(qIndex, 'correctAnswer', e.target.value)}
            placeholder="Correct Answer"
            required
          />
        </div>
      ))}
      <button type="button" onClick={addQuestion}>
        Add Question
      </button>
      <button type="submit">Create Quiz</button>
    </form>
  );
};

export default CreateQuiz;
