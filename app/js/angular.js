(function () {
     'use strict'

     angular.module('app', []);
     angular
          .module('app')
          .controller('main', main);
          

     function main($http) {
          var vm = this;
          vm.word = {};
          vm.words = {};
          vm.document = {
               "title": "",
               "tekst": "",
               "grade": "0"
          }

          //Keeping everything under controller :))

          vm.loadData = function () {
                    $http.get('/words')
                         .success(function (data) {
                              vm.word = data;
                         })
                         .error(function (data) {
                              console.log('Error: ' + data);
                         });
               }
               //Function for evaluating score of sentiment
          vm.eval = function () {
              
                    var json = vm.word;
                    var str = vm.document.tekst;

                    //First of I'm replacing (.,;) from string 
                    str = str.replace(/[^\w\s]|_/g, "")
                         .replace(/\s+/g, " ");
                    for (var i = 0; i < json.length; i++) {
                         delete json[i]['$$hashKey'];
                    }
                    //Map object fo converting json data
                    var map = json.reduce(function (p, c) {
                         p.set(c.words.toLowerCase(), c.grade);
                         return p;
                    }, new Map());

                    //Now i split string, do same as for json data lower string and giv it grade if no grade then 0
                    var score = str.split(' ').reduce(function (p, c) {
                         var wordScore = map.get(c.toLowerCase()) || 0;
                         return p + wordScore;
                    }, 0);
                    vm.document.grade = score;
                    vm.document.tekst = str;
               }
               //POST documents
          vm.insertDoc = function (document) {
               $http.post('/documents', document).success(function (data) {
                    console.log("Status is " + data);
                    vm.document.grade = "0";
                    vm.document.tekst = "";
                    vm.document.title = "";
                     vm.reset();
               })
          }

          //POST word
          vm.insertWords = function (words) {
               $http.post('/words', words).success(function (data) {
                    console.log("Status is " + data);
                    words.word = null;
                    words.grade = null;
                    vm.loadData();
               })
          }
          
          //Missing part for get word
          
           vm.getWord = function (word) {
               $http.get('/words/', word).success(function (data) {
                    console.log("Status is " + data);
               })
          }

          vm.reset = function () {
               vm.document.grade = "0";
               vm.document.tekst = "";
               vm.document.title = "";
          }


          vm.loadData();
     }


})()
