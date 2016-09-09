var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Word = mongoose.model('lexicons', {
  word: String,
  grade: Number
});



module.exports = function (app) {

  app.get('/words', function (request, response) {
    Word.model('lexicons').find(function (err, doc) {
      response.json(doc);
    });
  });

  app.post('/word', function (request, response) {
    Word.create({
      word: request.body.word,
      grade: request.body.grade
    }, function (err, doc) {
      Word.model('lexicons').find(function (err, doc) {
        response.json(doc);
      });
    })

  });
  app.delete("/word/:word_id", function (request, response) {
    Word.remove({
      _id: request.params.word_id
    }, function (err, doc) {
      if (err) response.send(err);
      Word.model('lexicons').find(function (err, doc) {
        response.json(doc);
      });
    })
  })
};
