const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('assets'));
app.use(express.static('front-end'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'front-end', 'app.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`listening on *:${port}`);
});
