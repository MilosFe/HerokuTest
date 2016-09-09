(function(){
    'use strict';
     angular.module('Sentiments')
  .directive('documentsDir', documentsDir);
    
    function documentsDir(){
        return {
            restrict: 'CEA',
            template: '<h1> Milos</h1>'
        }
    }
})()