const { response } = require('express');
const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

const port = 3000;
app.use(express.static(path.join(__dirname, './static')));
app.get('/', (request, response) => {
  response.render('pages/index', { pageTitle: 'Welcome' });
});

app.get('/speakers', (request, response) => {
  response.sendFile(path.join(__dirname, '/static/speakers.html'));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
