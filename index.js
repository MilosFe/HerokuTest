var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');

mongoose.connect( "mongodb://milos:akasha1@ds017636.mlab.com:17636/sentiments");


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());
app.use(logger('dev'));
app.set('app', __dirname + '/app');

//Routes
require('./routes/words.js')(app);
require('./routes/document.js')(app);

// views is directory for all template files

app.get('/', function (request, response) {
  response.render('index');
});





app.listen(app.get('port'), function () {
  console.log('Node app is running on', app.get('port'));
});



