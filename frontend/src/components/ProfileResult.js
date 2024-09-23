import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProfileResult({ profile }) {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        // Solicitar capítulos basados en el perfil del usuario
        const response = await axios.get(`http://localhost:5001/api/chapters?profile=${profile}`);
        setChapters(response.data);  // Guardar los capítulos en el estado
      } catch (error) {
        console.error("Error al cargar los capítulos", error);
      }
    };

    fetchChapters();
  }, [profile]);  // Hacer la solicitud cuando cambie el perfil

  if (chapters.length === 0) {
    return <div>
    <h1>Tu perfil es: {profile}</h1>
    <p>A continuación puedes ver los capítulos relacionados con tu perfil:</p>
    <p>Cargando capítulos...</p>
  </div>;  // Mensaje mientras se cargan los capítulos
  }

  return (
    <div>
      <h1>Tu perfil es: {profile}</h1>
      <p>A continuación puedes ver los capítulos relacionados con tu perfil:</p>
      <ul>
        {chapters.map(chapter => (
          <li key={chapter._id}>
            {/* Enlace al capítulo */}
            <Link to={`/chapter/${chapter._id}`}>{chapter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileResult;
