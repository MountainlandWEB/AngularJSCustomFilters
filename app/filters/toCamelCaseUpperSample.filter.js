(function() {
    "use stritc";

    angular
        .module('app.filters')
        .filter('toCamelcaseUpperSample', toCamelcaseUpperSample);

    toCamelcaseUpperSample.$inject = [];

    function toCamelcaseUpperSample() {
        return function(x) {
            x = x[0].toUpperCase() + x.slice(1);
            var arr = x.split("");
            var patt = /[-_&]/g
            arr[0] == arr[0].toUpperCase();
            for (var i = 0; i < arr.length; i++){
                var y = arr[i].search(patt);
                if (y !== -1){
                    arr[i+1] = arr[i+1].toUpperCase();
                }
            }
            var out = arr.join("");
            return out;
        }
    }

})();