angular.module('simpleCtrl2App', [])
    .controller('SimpleCtrl2', ['$location', function($location){
        var self = this;
        self.navigate1 = function() {
            $location.path('/some/location/');
        }
        self.navigate2 = function() {
            $location.path('/some/location/2/');
        }
    }]);