'use strict';

const express = require('express');

// Constants
const PORT = 3200;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/devops', (req, res) => {
  res.send('Hello devops');
});
app.get('/about', (req, res) => {
  res.send('Hello About');
});
app.get('/contact', (req, res) => {
  res.send('Hello Contact ');
});

app.get('/exit', (req, res) => {
    // Perform actions to stop the server or any other desired actions
    res.send('Server stopped');
    process.exit(0); // This stops the server (not recommended in production)
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
