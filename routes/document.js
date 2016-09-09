var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Document = mongoose.model('document', {
  title: String,
  tekst: String,
  grade: Number
});



module.exports = function (app) {

 
  app.post('/documents', function (request, response) {
    Document.create({
      title: request.body.word,
      tekst: request.body.tekst,
      grade: request.body.grade
    }, function (err, doc) {
     response.sendStatus(200);
    })

  });

};
