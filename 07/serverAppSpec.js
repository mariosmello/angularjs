describe("MainCtrl Server Calls", function() {

    beforeEach(module('serverApp'));

    var ctrl, mockBackend;

    beforeEach(inject(function($controller, $httpBackend) {

        mockBackend = $httpBackend;
        mockBackend.expectGET('/api/note')
            .respond([{id: 1, label: 'Mock'}]);

        ctrl = $controller('MainCtrl');

    }));

    it('Should load items from server', function() {
        expect(ctrl.items).toEqual([]);
        mockBackend.flush();
        expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
    });

    afterEach(function() {
        // Garante que todas os expects definidos em $httpBackend realmente foram chamados
        mockBackend.verifyNoOutstandingExpectation();

        // Garante que toda sas solicitacoes ao servidor
        // foram realmente respondidas (usando flush())
        mockBackend.verifyNoOutstandingRequest();
    })


});