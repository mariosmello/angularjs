describe('SimpleCtrl2', function() {
    beforeEach(module('simpleCtrl2App'));

    var ctrl, $loc;

    beforeEach(inject(function($controller, $location) {
        ctrl = $controller('SimpleCtrl2');
        $loc = $location;
    }));

    it("should navigate away from the current page", function() {
        $loc.path('/here');
        ctrl.navigate1();
        expect($loc.path()).toEqual('/some/location/');
    });

    it("should navigate away from the current page", function() {
        $loc.path('/here');
        ctrl.navigate2();
        expect($loc.path()).toEqual('/some/location/2/');
    });
});