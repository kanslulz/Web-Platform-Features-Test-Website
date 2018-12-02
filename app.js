const express = require('express');
const app = express();
const port = 3333;

app.set('view engine', 'pug');

// Redirect to the home page.
app.get('/', (req, res) => res.redirect('/home'));

// Set up routing to keep projects independent.
app.use('/home', require('pages/home/app.js'));
app.use('/backgroundfetch', require('pages/backgroundfetch/app.js'));
app.use('/backgroundsync', require('pages/backgroundsync/app.js'));
app.use('/webpush', require('pages/webpush/app.js'));

// Handle unknown requests.
app.get('/*', (req, res) => res.status(404).send('¯\\_(ツ)_/¯'));

app.listen(port, () => console.log(`Listening on port ${port}`));

