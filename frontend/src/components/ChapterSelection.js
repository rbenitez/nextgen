import React from 'react';
import { Link } from 'react-router-dom';

function ChapterSelection({ chapters }) {
    console.log("logs:", chapters)
  return (
    <div>
      <h1>Selecciona un capítulo</h1>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter._id}>
            <Link to={`/chapter/${chapter._id}`}>{chapter.title}</Link> {/* Usa chapter._id */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChapterSelection;
