var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname +'/index.html');
});

app.post('/submit-student-data', function (req, res) {
    var zipcode = req.body.zipcode;

    res.send('Zipcode submitted successfully! You should receive a text notification with weather details for the provided zip code.');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');

  });
