
import React, { useState } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, Link } from 'react-router-dom'; 
import './App.css';
import ProfileResult from './ProfileResult';
import ChapterSelection from './ChapterSelection';
import ChapterView from './ChapterView';
import AddContent from './components/AddContent'; 

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

  const questions = [
    { text: "¿Cuánto valoras la tradición en tu vida diaria?", image: "/images/tradition.jpg" },
    { text: "¿Qué tan importante es la religión en tus decisiones personales?", image: "/images/religion.jpg" },
    { text: "¿Cómo reaccionas a los cambios rápidos en tu entorno?", image: "/images/change.jpg" },
    { text: "¿Qué tan involucrado estás en causas sociales o ambientales?", image: "/images/causes.jpg" },
    { text: "¿Cuánto tiempo dedicas a la reflexión o meditación?", image: "/images/meditation.jpg" },
    { text: "¿Cómo manejas el riesgo en tu vida personal o profesional?", image: "/images/risk.jpg" },
    { text: "¿Cuál es tu actitud hacia la tecnología y la innovación?", image: "/images/technology.jpg" },
    { text: "¿Cómo defines tu estilo de vida en términos de consumo y sostenibilidad?", image: "/images/sustainability.jpg" },
    { text: "¿Qué tan importante es mantener una vida social activa para ti?", image: "/images/social.jpg" },
    { text: "¿Cuánto interés tienes en aprender sobre nuevas culturas?", image: "/images/cultures.jpg" },
  ];

  const options = [
    ['a) Mucho', 'b) Algo', 'c) Poco', 'd) Nada'],
    ['a) Fundamental', 'b) Importante', 'c) Poco importante', 'd) Nada importante'],
    ['a) Me adapto fácilmente', 'b) Me toma un poco', 'c) Resisto al cambio', 'd) Me siento abrumado'],
    ['a) Muy involucrado', 'b) Algo involucrado', 'c) Poco involucrado', 'd) Nada involucrado'],
    ['a) Diario', 'b) Semanal', 'c) Ocasionalmente', 'd) Nunca'],
    ['a) Lo busco activamente', 'b) Lo acepto si es necesario', 'c) Prefiero evitarlo', 'd) Me paraliza'],
    ['a) Me encanta', 'b) Me gusta', 'c) Indiferente', 'd) Me molesta'],
    ['a) Minimalista', 'b) Moderado', 'c) Consumo regular', 'd) Consumista'],
    ['a) Muy importante', 'b) Algo importante', 'c) Poco importante', 'd) Nada importante'],
    ['a) Mucho', 'b) Algo', 'c) Poco', 'd) Nada'],
  ];

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
          <Link to="/add-content">Añadir Contenido</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/add-content" element={<AddContent />} /> 
        <Route path="/profile" element={<ProfileResult profile={profile} />} />
        <Route path="/chapter-selection" element={<ChapterSelection />} />
        <Route path="/chapter/:id" element={<ChapterView />} />
      </Routes>
    </div>
  );
}

export default App;
