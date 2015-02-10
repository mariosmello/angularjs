angular.module('serverApp2',['services'])
    .controller('MainCtrl', ['NoteService', function(NoteService) {
        var self = this;
        self.items = [];
        self.errorMessage = '';
        NoteService.query().then(function(response) {
            self.items = response.data;
        }, function(errResponse) {
            self.errorMessage = errResponse.data.msg;
        });
    }]);