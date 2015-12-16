/**
 * Created by gabed on 12/16/15.
 */
(function() {
    "use strict";

    angular
        .module('app.filters')
        .filter('TO_SNAKE_CASE_UPPER_SAMPLE', TO_SNAKE_CASE_UPPER_SAMPLE);

    TO_SNAKE_CASE_UPPER_SAMPLE.$inject = ['IdentifierService'];

    function TO_SNAKE_CASE_UPPER_SAMPLE(IdentifierService) {
        return function(input) {
            var myNewCase = input.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase();
            var answers = myNewCase.replace(/&|-/g,'_');
            var caseType = IdentifierService.getCaseType(input);
            if(caseType == 'UNKNOWN'){
                    return input;}
            else
            {
                return answers;
            }
            //TODO: implement
        }
    }


})();