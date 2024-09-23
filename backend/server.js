
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/nextgen', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const Question = require('./models/Question');
const Profile = require('./models/Profile');
const Chapter = require('./models/Chapter');
const UserProfile = require('./models/UserProfile');

// CRUD APIs for Questions
app.get('/api/questions', async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
});
app.post('/api/questions', async (req, res) => {
  const newQuestion = new Question(req.body);
  await newQuestion.save();
  res.json(newQuestion);
});
app.put('/api/questions/:id', async (req, res) => {
  const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedQuestion);
});
app.delete('/api/questions/:id', async (req, res) => {
  await Question.findByIdAndDelete(req.params.id);
  res.json({ message: 'Question deleted' });
});

// CRUD APIs for Profiles
app.get('/api/profiles', async (req, res) => {
  const profiles = await Profile.find();
  res.json(profiles);
});
app.post('/api/profiles', async (req, res) => {
  const newProfile = new Profile(req.body);
  await newProfile.save();
  res.json(newProfile);
});
app.put('/api/profiles/:id', async (req, res) => {
  const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedProfile);
});
app.delete('/api/profiles/:id', async (req, res) => {
  await Profile.findByIdAndDelete(req.params.id);
  res.json({ message: 'Profile deleted' });
});

// CRUD APIs for Chapters
app.get('/api/chapters', async (req, res) => {
  const profile = req.query.profile;
  console.log('Profile recibido:', profile);  // Verifica qué valor de perfil está llegando
  try {
    const chapters = await Chapter.find({ profile: new RegExp(profile, 'i') });
    console.log('Capítulos encontrados:', chapters);  // Verifica qué capítulos se encuentran
    res.json(chapters);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los capítulos" });
  }
});
// Ruta para obtener un capítulo por ID
app.get('/api/chapters/:id', async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.id); // Busca el capítulo por ObjectID
    if (!chapter) {
      return res.status(404).json({ error: "Capítulo no encontrado" });
    }
    res.json(chapter);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el capítulo" });
  }
});
app.delete('/api/chapters/:id', async (req, res) => {
  await Chapter.findByIdAndDelete(req.params.id);
  res.json({ message: 'Chapter deleted' });
});

// Route to submit answers and determine profile
app.post('/api/submit-answers', async (req, res) => {
  const { answers } = req.body;
  const profile = determineProfile(answers);
  const userProfile = new UserProfile({ answers, profile });
  await userProfile.save();
  res.json({ profile });
});

function determineProfile(answers) {
  const scores = { globalizado: 0, conservador: 0, activista: 0 };
  answers.forEach((response, index) => {
    switch (index) {
      case 0:
        if (response === 'a') scores.conservador += 2;
        else if (response === 'b') { scores.globalizado += 1; scores.conservador += 1; }
        else if (response === 'c') scores.activista += 2;
        break;
      case 1:
        if (response === 'a') scores.conservador += 2;
        else if (response === 'b') scores.globalizado += 2;
        else if (response === 'c') scores.activista += 2;
        break;
      case 2:
        if (response === 'a') scores.globalizado += 2;
        else if (response === 'b') scores.activista += 1;
        else if (response === 'c') scores.conservador += 2;
        break;
      case 3:
        if (response === 'a') scores.activista += 2;
        else if (response === 'b') scores.globalizado += 2;
        break;
      case 4:
        if (response === 'a') scores.activista += 1;
        else if (response === 'b') scores.globalizado += 2;
        break;
      case 5:
        if (response === 'a') scores.globalizado += 2;
        else if (response === 'b') scores.conservador += 2;
        break;
      case 6:
        if (response === 'a') scores.activista += 2;
        else if (response === 'b') scores.globalizado += 1;
        break;
      case 7:
        if (response === 'a') scores.activista += 2;
        break;
      case 8:
        if (response === 'a') scores.globalizado += 1;
        else if (response === 'b') scores.conservador += 2;
        break;
      case 9:
        if (response === 'a') scores.activista += 2;
        else if (response === 'b') scores.globalizado += 1;
        break;
      default:
        break;
    }
  });
  const highestScore = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  return highestScore;
}

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
