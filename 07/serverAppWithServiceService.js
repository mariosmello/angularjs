angular.module('services',[])
    .service('NoteService', ['$http', function($http) {
        return {
            query: function() {
                return $http.get('/api/note');
            }
        }
    }]);