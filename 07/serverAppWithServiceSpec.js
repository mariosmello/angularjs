describe("Server App Integration", function() {

    beforeEach(module('serverApp2'));

    var ctrl, mockBackend;

    beforeEach(inject(function($controller, $httpBackend) {

        mockBackend = $httpBackend;
        mockBackend.expectGET('/api/note')
            .respond(404, {msg: 'Not Found'});

        ctrl = $controller('MainCtrl');

    }));

    it('Should handle error while loading items', function() {
        expect(ctrl.items).toEqual([]);
        mockBackend.flush();
        expect(ctrl.items).toEqual([]);
        expect(ctrl.errorMessage).toEqual('Not Found');
    });

    afterEach(function() {
        // Garante que todas os expects definidos em $httpBackend realmente foram chamados
        mockBackend.verifyNoOutstandingExpectation();

        // Garante que toda sas solicitacoes ao servidor
        // foram realmente respondidas (usando flush())
        mockBackend.verifyNoOutstandingRequest();
    })


});