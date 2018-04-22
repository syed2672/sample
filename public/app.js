//Main file
/*
var app = angular.module('superheroApp', ['addSuperheroCtrl',  'ngRoute', 'angular-filepicker'])
    .config(function($routeProvider, filepickerProvider){
        //The route provider handles the client request to switch route
        $routeProvider.when('/addSuperhero', {          
            templateUrl: 'partials/addSuperhero.html',
                        controller: 'addSuperheroController'            
        })
        //Redirect to addSuperhero in all the other cases.
        .otherwise({redirectTo:'/addSuperhero'});
        //Add the API key to use filestack service
        filepickerProvider.setKey('AbXZQKrBT1SK0QR1sRkQtz');
});
*/

//Main file
var app = angular.module('superheroApp', ['addProfileCtrl', 'profilesCtrl', 'aboutCtrl', 'ngRoute', 'angular-filepicker'])
.config(function($routeProvider, filepickerProvider){
    //The route provider handles the client request to switch route
    $routeProvider.when('/home', {          
        templateUrl: 'partials/home.html',
        controller: 'addProfileController',
        css: 'css/addProfiles.css'            
    })
    .when('/profiles', {
       
        templateUrl: 'partials/profiles.html',
        controller: 'profilesController'
        
    })
    .when('/about', {
        
         templateUrl: 'partials/about.html',
         controller: 'aboutController',
         css:'css/about.css'
         
     })
    //Redirect to addSuperhero in all the other cases.
    .otherwise({redirectTo:'/home'});
    //Add the API key to use filestack service
    filepickerProvider.setKey('AbXZQKrBT1SK0QR1sRkQtz');
});
