angular.module('carsApp', [])
    .controller('ModelsCtrl', ['$http', function($http) {
        var self = this;
        self.models = [];
        self.stock = [];
        self.customer = [];

        // Lista todos os modelos
        $http.get('models.json').then(function(response) {
            self.models = response.data.message;
            self.stock = [];
            self.customer = [];
        }, function (errResponse) {
            console.error('erro');
        });

        // Busca estoque de um modelo
        self.findStock = function() {
            $http.get('stock.json').then(function(response) {
                self.stock = response.data.message;
                self.customer = [];
            }, function (errResponse) {
                console.error('erro');
            });
        };

        // Busca vendedor do estoque
        self.findCustomer = function() {
            $http.get('customer.json').then(function(response) {
                self.customer = response.data.message;
            }, function (errResponse) {
                console.error('erro');
            });
        };

    }]);