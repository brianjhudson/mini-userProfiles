angular.module('userProfiles').service('mainService', function( $http ) {
  this.getUsers = function() {
    return $http.get("http://reqres.in/api/users?page=1")
    .then(function(results) {
      if (results.status === 200) {
        return results.data;
      }
    });

  }
});
