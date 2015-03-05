angular.module('carsApp', [])
    .controller('ModelsCtrl', ['$http', function($http) {
        var self = this;
        self.models = [];
        self.model = [];
        self.stock = [];
        self.customer = [];

        // Lista todos os modelos
        $http.get('models.json').then(function(response) {
            self.models = response.data.message;
            self.stock = [];
            self.customer = [];
            self.model = [];
        }, function (errResponse) {
            console.error('erro');
        });

        // Busca detalhes e estoque de um modelo
        self.findStock = function(model) {

            self.stock = [];
            self.customer = [];
            self.model = [];

            var id_model = model.id_model;

            $http.get('model.json?id_model='+id_model).then(function(response) {
                self.model = response.data.message;
            }, function (errResponse) {
                console.error('erro');
            });

            $http.get('stock.json?id_model='+id_model).then(function(response) {
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