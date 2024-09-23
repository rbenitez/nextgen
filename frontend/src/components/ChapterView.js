import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ChapterView() {
  const { id } = useParams(); // Obtén el ID del capítulo desde la URL
  const [chapter, setChapter] = useState(null);

  // Obtener el capítulo desde el backend
  useEffect(() => {
    const fetchChapter = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/chapters/${id}`);
        setChapter(response.data);
      } catch (error) {
        console.error("Error al cargar el capítulo", error);
      }
    };

    fetchChapter();
  }, [id]);

  if (!chapter) {
    return <p>Cargando capítulo...</p>;
  }

  return (
    <div>
      <h1>{chapter.title}</h1>
      <p>{chapter.content}</p>
    </div>
  );
}

export default ChapterView;
