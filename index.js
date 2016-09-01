var express = require('express');
var app = express();
var mongoose = require('mongoose');
var lexicon = require('./routes/words');


mongoose.connect( "mongodb://milos:akasha1@ds017636.mlab.com:17636/sentiments");


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/app'));
app.use('/words', lexicon);


// views is directory for all template files
app.set('app', __dirname + '/app');


app.get('/', function (request, response) {
  response.render('index');
});





app.listen(app.get('port'), function () {
  console.log('Node app is running on', app.get('port'));
});



