(function () {

 angular.module('Sentiments')
  .factory('lexicon', lexicon);

 function lexicon($http, $log) {
  var service = {
   getWords: getWords,
   postWords: postWords,
   delWord: delWord
  }
  return service;


  /////Service Functions

  function getWords() {
   return $http.get('/words')
    .then(sucess)
    .catch(fail);
  }

  function postWords(data){
   return $http.post('/word', data)
    .then(sucess)
    .catch(fail);
  }
    function delWord(id){
   return $http.delete('/word/' + id)
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

 }

})();
