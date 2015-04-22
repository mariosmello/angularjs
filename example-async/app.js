var app = angular.module('asyncApp', []);

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

app.controller('RelatedController', ['$attrs','RelatedService', function($attrs, RelatedService) {

    var self = this;
    self.news = [];

    RelatedService.getRelated($attrs.tbl,$attrs.id).then(function(response) {
        self.news = response.data.news;
    });

}]).directive('newsRelated', function() {

    return {
        templateUrl: 'templates/related.html'
    };

});