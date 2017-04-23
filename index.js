// TODO: Move this file into /server
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const Item = require('./db/models/Item');

const PORT = process.env.PORT || 3000;
const app = express();

var dbCONST = [
  {
    name: 'Bootcamp',
    pros: [
      'Learn new things',
      'Make new friends'
    ],
    cons: [
      'Time consuming',
      'No income'
    ]
  },
  {
    name: 'Get cat?',
    pros: [
      'Like the internet',
      'Meow'
    ],
    cons: [
      'Sass',
      'Meow'
    ]
  }
];

app.use(logger('tiny'));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '/public')));

app.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/pros', (req, res) => {
  // go to database and retrieve all pros
  // res.send(list of pros)
});

app.post('/pros', (req, res) => {
  console.log('Made it to the server ---->', req.body);
  // use mongoose to send req.body to DB
  new Item(req.body).save(function (err, item) {
    if (err) { return console.error(err); }
    console.log('This was inserted:', item);
  });
  res.send(200);
});
