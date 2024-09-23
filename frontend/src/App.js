import React, { useState } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, Link } from 'react-router-dom'; 
import './App.css';
import ProfileResult from './components/ProfileResult';
import ChapterView from './components/ChapterView';  // Importa la vista del capítulo
import ChapterPage from './components/ChapterPage';  // Si lo tienes separado
import AddContent from './components/AddContent'; 
import QuestionForm from './components/QuestionForm';

function App() {
  const [answers, setAnswers] = useState(Array(10).fill(''));
  const [profile, setProfile] = useState('');
  const navigate = useNavigate();

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/submit-answers', { answers });
      setProfile(response.data.profile);
      navigate('/profile', { state: { profile: response.data.profile } });
    } catch (error) {
      console.error('Error enviando respuestas', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/nextgen-logo.png" alt="Logo NextGen" className="logo" />
        <h1>¡Bienvenido a NextGen!</h1>
        <p className="intro-text">
          NextGen está diseñado para ayudar a las familias de habla hispana a educar a sus hijos para que alcancen una madurez óptima lo antes posible.
          Explora temas como la crianza positiva, la inteligencia emocional, la educación financiera y el impacto social.
        </p>
        <nav>
          <Link to="/">Contestar Preguntas</Link> | 
          <Link to="/add-content">Añadir Contenido</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<QuestionForm answers={answers} onAnswerChange={handleAnswerChange} onSubmit={handleSubmit} />} />
        <Route path="/profile" element={<ProfileResult profile={profile} />} />
        <Route path="/chapter-selection" element={<ChapterPage profile={profile} />} />  
        <Route path="/chapter/:id" element={<ChapterView />} />
        <Route path="/add-content" element={<AddContent />} />
      </Routes>
    </div>
  );
}

export default App;
