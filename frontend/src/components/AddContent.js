
import React, { useState } from 'react';
import axios from 'axios';

function AddContent() {
  const [question, setQuestion] = useState({ text: '', options: ['', '', '', ''] });
  const [profile, setProfile] = useState({ name: '', description: '', criteria: '' });
  const [chapter, setChapter] = useState({ title: '', content: '', profile: '' });

  const handleQuestionChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...question.options];
    newOptions[index] = value;
    setQuestion({ ...question, options: newOptions });
  };

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleChapterChange = (e) => {
    setChapter({ ...chapter, [e.target.name]: e.target.value });
  };

  const submitQuestion = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/questions', question);
      alert('Pregunta agregada exitosamente');
      setQuestion({ text: '', options: ['', '', '', ''] });
    } catch (error) {
      console.error('Error agregando pregunta:', error);
    }
  };

  const submitProfile = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/profiles', profile);
      alert('Perfil agregado exitosamente');
      setProfile({ name: '', description: '', criteria: '' });
    } catch (error) {
      console.error('Error agregando perfil:', error);
    }
  };

  const submitChapter = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/chapters', chapter);
      alert('Capítulo agregado exitosamente');
      setChapter({ title: '', content: '', profile: '' });
    } catch (error) {
      console.error('Error agregando capítulo:', error);
    }
  };

  return (
    <div className="add-content">
      <h2>Añadir Pregunta</h2>
      <form onSubmit={submitQuestion} className="form-section">
        <label>Texto de la Pregunta</label>
        <input type="text" name="text" value={question.text} onChange={handleQuestionChange} required />

        <label>Opciones</label>
        {question.options.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            placeholder={`Opción ${index + 1}`}
            required
          />
        ))}

        <button type="submit">Agregar Pregunta</button>
      </form>

      <h2>Añadir Perfil</h2>
      <form onSubmit={submitProfile} className="form-section">
        <label>Nombre del Perfil</label>
        <input type="text" name="name" value={profile.name} onChange={handleProfileChange} required />

        <label>Descripción</label>
        <textarea name="description" value={profile.description} onChange={handleProfileChange} required />

        <label>Criterios</label>
        <input type="text" name="criteria" value={profile.criteria} onChange={handleProfileChange} required />

        <button type="submit">Agregar Perfil</button>
      </form>

      <h2>Añadir Capítulo</h2>
      <form onSubmit={submitChapter} className="form-section">
        <label>Título del Capítulo</label>
        <input type="text" name="title" value={chapter.title} onChange={handleChapterChange} required />

        <label>Contenido</label>
        <textarea name="content" value={chapter.content} onChange={handleChapterChange} required />

        <label>Perfil Asociado</label>
        <input type="text" name="profile" value={chapter.profile} onChange={handleChapterChange} required />

        <button type="submit">Agregar Capítulo</button>
      </form>
    </div>
  );
}

export default AddContent;
