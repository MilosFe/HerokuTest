(function () {

 angular.module('Sentiments')
  .factory('lexicon', lexicon);

 function lexicon($http, $log) {
  var service = {
   getWords: getWords,
   postWords: postWords
  }
  return service;


  /////Service Functions

  function getWords() {
   return $http.get('/words')
    .then(sucess)
    .catch(fail);
  }

  function postWords(data){
    $http.post('/words/word', data)
    .then(sucess)
    .catch(fail);
  }


  function sucess(responose, status, headers, config) {
   $log.info(responose, status, headers, config)
   return responose.data;
   
  }

  function fail(responose, status, header) {
   $log.warn(responose, status, header);
  }

 }

})();
