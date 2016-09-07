angular.module('userProfiles').controller('MainController', function($scope, mainService){
    var cPromise = mainService.getUsers();
    cPromise.then(function(results) {
      $scope.users = results.data;
      console.log($scope.users)
    })

})
