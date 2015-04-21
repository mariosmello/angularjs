angular.module('newsApp')
  .factory('LastedService', ['$http',
    function($http) {
      return {
        getLasted: function() {
          return $http.get('data/lasted.json');
        }
      }
  }]);