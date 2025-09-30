require('dotenv').config();
const express = require('express');
const connectDB = require('./src/database/db');
const quizRoutes = require('./src/routes/quizRoutes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', quizRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

module.exports = app;


