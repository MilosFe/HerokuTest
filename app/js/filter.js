 angular
          .module('app')
          .filter('positiveOrNegative', filter);

function filter () {
               return function (input, crieteria) {
                    if (!input || !crieteria) return input;
                    var result = [];
                    input.forEach(function (value) {
                         if (crieteria == "positive" && value.grade >= 0) {
                              result.push(value);
                         } else if (crieteria == "negative" && value.grade < 0) {
                              result.push(value);
                         } else if (crieteria == "all") {
                              result.push(value);
                         }

                    })
                    return result;
               }
          }