const mongoose = require('mongoose');
const Question = require('./models/Question');
const Profile = require('./models/Profile');
const Chapter = require('./models/Chapter');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/nextgen', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Función para insertar preguntas
async function insertQuestions() {
    const questions = [
      {
        text: "¿Cuánto valoras la tradición en tu vida diaria?",
        options: ["Mucho", "Algo", "Poco", "Nada"]
      },
      {
        text: "¿Qué tan importante es la religión en tus decisiones personales?",
        options: ["Fundamental", "Importante", "Poco importante", "Nada importante"]
      },
      {
        text: "¿Cómo reaccionas a los cambios rápidos en tu entorno?",
        options: ["Me adapto fácilmente", "Me toma un poco", "Resisto al cambio", "Me siento abrumado"]
      },
      {
        text: "¿Qué tan involucrado estás en causas sociales o ambientales?",
        options: ["Muy involucrado", "Algo involucrado", "Poco involucrado", "Nada involucrado"]
      },
      {
        text: "¿Cuánto tiempo dedicas a la reflexión o meditación?",
        options: ["Diario", "Semanal", "Ocasionalmente", "Nunca"]
      },
      {
        text: "¿Cómo manejas el riesgo en tu vida personal o profesional?",
        options: ["Lo busco activamente", "Lo acepto si es necesario", "Prefiero evitarlo", "Me paraliza"]
      },
      {
        text: "¿Cuál es tu actitud hacia la tecnología y la innovación?",
        options: ["Me encanta", "Me gusta", "Indiferente", "Me molesta"]
      },
      {
        text: "¿Cómo defines tu estilo de vida en términos de consumo y sostenibilidad?",
        options: ["Minimalista", "Moderado", "Consumo regular", "Consumista"]
      },
      {
        text: "¿Qué tan importante es mantener una vida social activa para ti?",
        options: ["Muy importante", "Algo importante", "Poco importante", "Nada importante"]
      },
      {
        text: "¿Cuánto interés tienes en aprender sobre nuevas culturas?",
        options: ["Mucho", "Algo", "Poco", "Nada"]
      }
    ];
  
    await Question.insertMany(questions);
    console.log('Preguntas insertadas');
  }

// Función para insertar perfiles
async function insertProfiles() {
  const profiles = [
    {
      name: "Globalizado",
      description: "Adaptado a múltiples culturas, con alta tolerancia al cambio y valora la innovación.",
      criteria: ["Innovador", "Tolerante", "Cosmopolita"]
    },
    {
      name: "Conservador",
      description: "Con fuerte apego a las tradiciones, valorando la familia y la religión.",
      criteria: ["Tradicional", "Resistente al cambio", "Religioso"]
    },
    {
      name: "Activista Social",
      description: "Comprometido con causas sociales y ambientales, enfocado en generar cambios.",
      criteria: ["Comprometido", "Enfocado en el cambio", "Socialmente consciente"]
    }
  ];

  await Profile.insertMany(profiles);
  console.log('Perfiles insertados');
}

// Función para insertar capítulos
async function insertChapters() {
  const chapters = [
    {
      title: "Capítulo 1: Introducción a la Innovación",
      content: "Este capítulo explora los valores globalizados y la importancia de la innovación en el mundo actual.",
      profile: "Globalizado"
    },
    {
      title: "Capítulo 2: La Tradición Familiar",
      content: "Este capítulo habla sobre el papel fundamental que tienen las tradiciones familiares en el desarrollo personal.",
      profile: "Conservador"
    },
    {
      title: "Capítulo 1: El Activismo Social",
      content: "En este capítulo, discutimos cómo el activismo puede impactar la sociedad y generar cambios significativos.",
      profile: "Activista"
    }
  ];

  await Chapter.insertMany(chapters);
  console.log('Capítulos insertados');
}

// Ejecutar todas las inserciones
async function populateDatabase() {
  await insertQuestions();
  await insertProfiles();
  await insertChapters();
  console.log('Base de datos poblada');
  mongoose.disconnect();
}

populateDatabase();
