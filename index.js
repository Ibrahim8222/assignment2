const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const { application } = require('express');

// Set the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


// Define routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cities', (req, res) => {
  res.render('cities');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/inspiration', (req, res) => {
  res.render('inspiration');
});

app.get('/places', (req, res) => {
  res.render('places');
});

// Start the server
app.listen(5500, () => {
  console.log('Server started on port 5500');
});
