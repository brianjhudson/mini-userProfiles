angular.module('userProfiles').controller('MainController', function($scope, mainService){
    var cPromise = mainService.getUserData();
    cPromise.then(function(results) {
      $scope.users = results.data;
    })

})
