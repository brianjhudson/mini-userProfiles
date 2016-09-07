angular.module('userProfiles').service('mainService', function( $http ) {

  this.getUsers = function() {
    return $http.get("http://reqres.in/api/users?page=1")
    .then(function(results) {
      if (results.status === 200) {
        return results.data;
      }
    });
  }
  this.toggleFavorite = function(user, users) {
    if (!users[user.id - 1].isFavorite) users[user.id - 1].isFavorite = false;
    users[user.id - 1].isFavorite = !users[user.id - 1].isFavorite;
    console.log(user, users);
    return users;

  }


});
