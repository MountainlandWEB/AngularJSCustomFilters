(function() {
    "use stritc";

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['tests', 'CaseConverterService'];

    function AppController(tests, CaseConverterService) {
        var vm = this;
        vm.tests = tests;
        vm.caseConverter = CaseConverterService;
    }

})();