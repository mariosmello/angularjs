describe('ItemCtrl with global mock', function() {
    beforeEach(module('notesApp1'));
    beforeEach(module('notesApp1Mocks'));

    var ctrl;

    beforeEach(inject(function($controller) {
        ctrl = $controller('ItemCtrl');
    }));

    it("should load mocked out items", function() {
        expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
    });
});