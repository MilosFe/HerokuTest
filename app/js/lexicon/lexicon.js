(function () {

 angular.module('Sentiments')
  .factory('lexicon', lexicon);

 function lexicon($http) {
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
   console.log(data);
    $http.post('/words/word', data)
    .then(sucess)
    .catch(fail);
  }


  function sucess(responose) {
   return responose.data;
  }

  function fail(responose) {
   console.log('Function failed, the data is ' + responose.data)
  }

 }

})();
