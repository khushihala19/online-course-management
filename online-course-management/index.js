const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;
const courses = [
  {
    id: 1,
    name: 'Initial Course',
    category: 'Programming',
    instructor: 'Jane Doe',
    duration: 15
  }
];

// GET Route
app.get('/', (req, res) => {
  res.send('Welcome to the Online Course Management API.');
});



// Serve index.html
app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
app.listen(3000, () => {
    console.log('Server started on port 3000');
  });