var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Word = mongoose.model('lexicons', {word: String, grade: String});

app.use(bodyParser.json())


app.get('/',  function (request, response) {
  Word.model('lexicons').find(function (err, doc) {
    response.send(doc);
  });
});
app.post('/word',  function (request, response) {
Word.create({word:request.body.word, grade: request.body.grade}
            , function(err,doc){
  console.log("done");
})

});




module.exports = app;