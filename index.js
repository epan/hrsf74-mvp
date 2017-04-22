// TODO: Move this file into /server
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger('tiny'));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '/public')));

app.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(200);
});
