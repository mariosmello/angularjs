var app = angular.module('newsApp', []);

app.controller('LastedController', ['LastedService', function(LastedService) {
    var self = this;
    self.news = [];

    LastedService.getLasted().then(function(response) {
        self.news = response.data.news;
    });
}]).directive('newsLasted', function() {
    return {
        templateUrl: 'templates/lasted.html'
    };
});