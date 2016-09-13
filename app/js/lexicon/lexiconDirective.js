(function(){
    'use strict';
     angular.module('Sentiments')
  .directive('upustvo', upustvo);
    
    function upustvo(){
        return {
            restrict: 'EA',
            templateUrl: 'js/lexicon/upustvo.html'
        }
    }
})()