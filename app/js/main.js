/*globals $:false */
(function (global, $, toastr) {
    'use strict';

    ///Cached variables for the application

    var body = document.getElementsByTagName('body')[0];
    var menuIcon = $('header i');
    var anchor = $('header ul li a');

    menuIcon.click(function () {
        $('header ul').toggle();
    });
    anchor.on("click", function(){
        if(window.innerWidth < 960){
             $('header ul').toggle();
        }
    })      
    ///Toaster options for better view, default is set to top right corner just above navigation screen    
    toastr.options = {
        "debug": false,
        "positionClass": "toast-bottom-right",
        "onclick": null,
        "fadeIn": 300,
        "fadeOut": 1000,
        "timeOut": 2000,
        "extendedTimeOut": 1000
    }

    //Simulating data loading so we can see the splash screen in the works
    setTimeout(function () {
        body.setAttribute('ng-app', '   Sentiments');
        angular.bootstrap(body, ['ng', 'Sentiments']);
    }, 2000);



}(window, $, toastr));
