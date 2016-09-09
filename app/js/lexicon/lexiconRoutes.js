(function () {
 'use strict';

 angular.module('Sentiments')
  .config(lexiconRoutes);

 function lexiconRoutes($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
   templateUrl: 'js/lexicon/lexicon.html',
   controller: 'sentiment',
   controllerAs: "vm",
   title: 'Lexicon Tab'
  })
 }

})();
