var profilesCtrl = angular.module('profilesCtrl', []);
profilesCtrl.controller('profilesController', function($scope, $http){
    $scope.profiles = [];
    //Retrieve all the profiles to show the profiles
    
    $http.get('/profile')
        .success(function(data){
            console.log(data);
            console.log(JSON.stringify(data));
            $scope.profiles = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

});