const express = require('express');
const app = express();
const port = 3333;

app.set('view engine', 'pug');

app.get('/', (req, res) => res.send('C:'));
app.get('/*', (req, res) => res.status(404).send('¯\\_(ツ)_/¯'));

app.listen(port, () => console.log(`Listening on port ${port}`));

