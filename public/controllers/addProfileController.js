var addCtrl = angular.module('addProfileCtrl', []);
addCtrl.controller('addProfileController', function($scope, $http, filepickerService, $location){

   
    $scope.profile = {};
    //Send the newly created profile to the server to store in the db
    $scope.createProfile = function(){
        $http.post('/profile', $scope.profile)
            .success(function(data){
                console.log(JSON.stringify(data));
                //Clean the form to allow the user to create new profilees
                $scope.profile = {};
                $location.path("/profiles");
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    //Single file upload, you can take a look at the options
    $scope.upload = function(){
        filepickerService.pick(
            {
                mimetype: 'image/*',
                language: 'en',
                services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
                openTo: 'IMAGE_SEARCH'
            },
            function(Blob){
                console.log(JSON.stringify(Blob));
                $scope.profile.picture = Blob;
                $scope.$apply();
            }
        );
    };
    //Multiple files upload set to 3 as max number
    // $scope.uploadMultiple = function(){
    //     filepickerService.pickMultiple(
    //         {
    //             mimetype: 'image/*',
    //             language: 'en',
    //             maxFiles: 3, //pickMultiple has one more option
    //             services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
    //             openTo: 'IMAGE_SEARCH'
    //         },
    //   function(Blob){
    //             console.log(JSON.stringify(Blob));
    //             $scope.superhero.morePictures = Blob;
    //             $scope.$apply();
    //         }
    //     );
    // };  
});