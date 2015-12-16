(function() {
    "use stritc";

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['tests', 'IdentifierService'];

    function AppController(tests, IdentifierService) {
        var vm = this;
        vm.tests = tests;
        vm.identifier = IdentifierService;
    }

})();