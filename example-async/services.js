var service = angular.module('asyncApp');

service.factory('LastedService', ['$http',
function($http) {
  return {
    getLasted: function() {
      return $http.get('data/lasted.json');
    }
  }
}]);

service.factory('RelatedService', ['$http',
function($http) {
  return {
    getRelated: function(tbl,id) {
      var url = 'data/related.json?tbl=' + tbl + '&id=' + id;
      console.log(url);
      return $http.get('data/related.json');
    }
  }
}]);