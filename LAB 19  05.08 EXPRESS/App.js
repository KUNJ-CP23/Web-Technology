const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Route for the about page
app.get('/about', (req, res) => {
  const filePath = path.join(__dirname, 'about.txt');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading the about file');
    }
    res.send(`<h1>About Page</h1><p>${data}</p>`);
  });
});

// Route for the contact page
app.get('/contact', (req, res) => {
  const filePath = path.join(__dirname, 'contact.txt');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading the contact file');
    }
    res.send(`<h1>Contact Page</h1><p>${data}</p>`);
  });
});

// Home route
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the File Reader WebApp</h1>
    <ul>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
