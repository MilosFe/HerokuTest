(function () {
 'use strict';
 angular.module('Sentiments')
  .controller('documentCtrl', documentCtrl);


 ////////Sentiment Controller
 documentCtrl.$inject = ['documents', 'lexicon', '$q'];

 function documentCtrl(documents, lexicon, $q) {
  var vm = this;
  vm.title = "Documents";
  vm.words = {};
  vm.documentData = {
   "title": "",
   "tekst": "",
   "grade": 0
  }
  toastr.info("Documents View Active");

  //Function for the view
   vm.save = function(documentData){
    documents.postDoc(documentData);
    } 

  vm.evaluate = function (documentData) {
   lexicon.getWords().then(function (data) {
    vm.words = data;
    return vm.words;
   }).then(function () {
    var result = documents.eval(documentData, vm.words);
    vm.documentData.tekst = result[0];
    vm.documentData.grade = result[1];
   })
  }

 }
})()
