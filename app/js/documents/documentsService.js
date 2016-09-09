(function () {
 'use strict';
 angular.module('Sentiments')
  .service('documents', documents);

 ////////Sentiment Controller
 documents.$inject = ['$q', '$log', 'lexicon', '$http'];

 function documents($q, $log, lexicon, $http) {

  var service = {
   postDoc: postDoc,
   eval: evaluate
  }
  return service;

  ////Service Functions

  function postDoc(doc) {
   $http.post('/documents', doc)
    .then(sucess)
    .catch(fail);
  }


  //Success and Error functions   
  function sucess(responose, status, headers, config) {
   return responose.data;
   
  }

  function fail(responose, status, header) {
   $log.warn(responose, status, header);
  }

  
  function evaluate(doc, words) {

   var str = doc.tekst.replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ");

   var map = words.reduce(function (p, c) {
    p.set(c.word.toLowerCase(), c.grade);
    return p;
   }, new Map());

   var score = str.split(' ').reduce(function (p, c) {
    var wordScore = map.get(c.toLowerCase()) || 0;
    return p + wordScore;
   }, 0);

   return [str, score];

  }
 }

})()
