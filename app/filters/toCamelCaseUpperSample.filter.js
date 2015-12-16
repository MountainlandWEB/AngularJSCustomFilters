(function() {
    "use strict";

    angular
        .module('app.filters')
        .filter('toCamelcaseUpperSample', toCamelcaseUpperSample);

    toCamelcaseUpperSample.$inject = [];

    function toCamelcaseUpperSample() {
        return function(input) {
            //TODO: implement
            if(input)
            return  input ;
        }
    }

})();