 angular
          .module('app')
          .filter('less', filter);

function filter () {
               return function (number) {
                   var array = [];                  
                   if (number < 3  ){
                       array.push(number);
                   }
                    
                    return array; 
               }
          }