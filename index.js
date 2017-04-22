const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
