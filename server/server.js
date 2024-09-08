// import express from 'express';
// import router from './router/auth-router.js';
// import bodyParser from 'body-parser';
const express = require('express');
const router = require('./router/auth-router.js');
const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;
const cors = require("cors");
const connectDB = require('./config/db');
require('dotenv').config();

// connectDB();
// app.use(cors());
// app.use(bodyParser.json());
// app.get('/',(req,res)=>{
//     res.send('Hello World');
// });
// app.use("/", router);
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
// const { getGeminiData } = require('./gemini.js');

// const express = require('express');
// const router = require('./router/auth-router.js');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const connectDB = require('./config/db');
// require('dotenv').config();

const app = express();
const port = 3000;

connectDB();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.post('/api/gemini', async (req, res) => {
  const { prompt } = req.body;
  try {
  const response = await getGeminiData(`generateContent?prompt=${encodeURIComponent(prompt)}`);
  res.json({ response: response });
  } catch (error) {
  console.error('Error:', error);
  res.status(500).json({ error: 'Failed to get response from Gemini API' });
  }
 });

