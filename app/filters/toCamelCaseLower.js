(function() {
    "use strict";

    angular
        .module('app.filters')
        .filter('toCamelcaseLower', toCamelcaseLower);

    toCamelcaseLower.$inject = ['IdentifierService'];

    function toCamelcaseLower(IdentifierService) {
        return function(input) {
            if (IdentifierService.getCaseType(input) == "CAMEL_CASE_UPPER"){
                return input[0].toLowerCase() + input.substr(1);
            }
            else if (IdentifierService.getCaseType(input) == "SNAKE_CASE_HYPHENS"){
                return caseChange("-");
            }
            else if (IdentifierService.getCaseType(input) == "SNAKE_CASE_UNDERSCORES_LOWER"){
                return caseChange("_");
            }
            else if (IdentifierService.getCaseType(input) == "SNAKE_CASE_UNDERSCORES_UPPER"){
                input = input.toLowerCase();
                return caseChange("_");
            }
            else{return input;}

            function caseChange(parameter) {
                var dashIndex = [];
                for (var i = 0; i < input.length; i++){
                    if (input[i] == parameter){
                        dashIndex.push(i);
                    }
                }
                for (var j = 0; j < dashIndex.length; j++){
                    var capLetter = input[dashIndex[j]+1].toUpperCase();
                    input = input.substr(0,dashIndex[j]) + capLetter + input.substr(dashIndex[j]+2)
                }
                return input;

            }

        };

    }

})();

