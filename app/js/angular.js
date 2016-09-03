(function () {
 'use strict';
 angular.module('Sentiments', [])
  .controller('sentiment', Sentiment);


 ////////Sentiment Controller
 Sentiment.$inject = ['lexicon', '$q'];

 function Sentiment(lexicon, $q) {
  var vm = this;
  vm.title = 'Lexicon Tab';
  vm.words = [];
  vm.formData = {};
  activate();
  
  
  ///Activate views function
  function activate() {
   var promoises = [getWords()];
   $q.all(promoises).then(function () {
    console.log("Activated");
   });
  }


  //Promises  
  function getWords() {
   lexicon.getWords().then(function (data) {
    vm.words = data;
    return vm.words;
   });
  }
  vm.postWords = function(){
   lexicon.postWords(vm.formData);
   vm.formData = {};
   getWords();
  }
 }

})()
