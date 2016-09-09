(function () {
 'use strict';

 angular.module('Sentiments')
  .config(documentRoutes);

 function documentRoutes($routeProvider, $locationProvider) {
  $routeProvider.when('/documents', {
   templateUrl: 'js/documents/documents.html',
   controller: 'documentCtrl',
   controllerAs: "vm",
   title: 'Documents Tab'
  })
 }

})();
