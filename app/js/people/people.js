var peple = (function (global) {
    'use strict';
    var people = document.getElementById('people')
    var services = {
        sayName : sayName
    }
    
    return services;
    
    function sayName(name){
    var x = document.createElement('li');
        x.innerHTML = name;
     people.appendChild(x);
    }
})(window);
