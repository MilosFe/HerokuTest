(function () {
 'use strict';
 angular.module('Sentiments')
  .controller('sentiment', Sentiment);


 ////////Sentiment Controller
 Sentiment.$inject = ['lexicon', '$q'];

 function Sentiment(lexicon, $q) {
  var vm = this;
  vm.title = "Lexicon tab";
  vm.words = [];
  vm.formData = {};
  activate();




  ///Activate views function
  function activate() {
   var promoises = [getWords()];
   $q.all(promoises).then(function () {
    toastr.info('Lexicon View Active')
   });
  }


  //Promises  
  function getWords() {
   lexicon.getWords().then(function (data) {
    vm.words = data;
    return vm.words;

   });
  }

  //Restful architechure 
  vm.postWords = function () {
   lexicon.postWords(vm.formData).then(function (data) {
    vm.words = data;
     vm.formData = {};
     toastr.info('Word inserted into DB')
   })
  }

  vm.delWord = function (id) {
   lexicon.delWord(id).then(function (data) {
    vm.words = data;
     toastr.info('Word deleted from DB')
   })
  }
 }



})()
