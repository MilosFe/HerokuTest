(function(){
    'use strict';
     angular.module('Sentiments')
  .directive('lexiconing', lexiconing);
    
    function lexiconing(){
        return {
            restrict: 'CEA',
            template: '<h1> Milos</h1>'
        }
    }
})()