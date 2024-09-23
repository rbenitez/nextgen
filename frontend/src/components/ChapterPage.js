import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChapterSelection from './ChapterSelection';

function ChapterPage({ profile }) {  // Recibe el perfil como prop
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        // Solicitar capítulos basados en el perfil del usuario
        const response = await axios.get(`http://localhost:5001/api/chapters?profile=${profile}`);
        setChapters(response.data);  // Guardar los capítulos en el estado
      } catch (error) {
        console.error("Error al obtener los capítulos", error);
      }
    };

    fetchChapters();
  }, [profile]);

  return (
    <div>
      <ChapterSelection chapters={chapters} />  {/* Pasar capítulos como prop */}
    </div>
  );
}

export default ChapterPage;
