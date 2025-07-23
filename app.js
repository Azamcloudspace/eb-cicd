// app.js
const express = require('express');
const app = express();
const path = require('path');

// Serve static files (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.send(`
    <h1 style="color: #2c3e50;">🚀 Welcome to My Elastic Beanstalk App!</h1>
    <p>This is a Node.js + Express application deployed on AWS Elastic Beanstalk.</p>
  `);
});

module.exports = app;
