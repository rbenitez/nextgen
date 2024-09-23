import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuestionForm({ answers, onAnswerChange, onSubmit }) {
  const [questions, setQuestions] = useState([]);

  // Obtener las preguntas del backend cuando se cargue el componente
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/questions');
        setQuestions(response.data);  // Almacena las preguntas obtenidas de MongoDB
      } catch (error) {
        console.error("Error al cargar las preguntas", error);
      }
    };

    fetchQuestions();
  }, []);

  if (questions.length === 0) {
    return <p>Cargando preguntas...</p>;
  }

  return (
    <form onSubmit={onSubmit}>
      {questions.map((question, index) => (
        <div key={index}>
          <label>{question.text}</label>
          <select
            value={answers[index]}
            onChange={(e) => onAnswerChange(index, e.target.value)}
            required
          >
            <option value="">Seleccione una opción</option>
            {question.options.map((option, optIndex) => (
              <option key={optIndex} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default QuestionForm;
