import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import CreateQuiz from './components/CreateQuiz';
import TakeQuiz from './components/TakeQuiz';
import Home from './components/Home'
import QuizList from './components/QuizList';

function App() {
  return (
    <div className="App">

        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/create-quiz" element={<CreateQuiz/>} />
            <Route exact path="/take-quiz" element={<TakeQuiz/>} />
            <Route exact path="/quiz-list" element={<QuizList/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
