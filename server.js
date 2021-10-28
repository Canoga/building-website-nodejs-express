const { response } = require('express');
const path = require('path');
const express = require('express');

const app = express();

const port = 3000;
app.use(express.static(path.join(__dirname, '/static')));
// app.get('/',(request, response) => {
//     response.sendFile(path.join(__dirname, '/static/index.html'));
// })

// app.get('/speakers',(request, response) => {
//     response.sendFile(path.join(__dirname, '/static/speakers.html'));
// })

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
