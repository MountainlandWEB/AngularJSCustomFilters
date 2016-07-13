(function() {
    "use strict";

    angular
        .module('app', [
            'app.case'
        ])
        .value('tests', [
            'MyApp',
            'myApp',
            'my.app',
            'my_app',
            'MY_APP',
            'my-app',
            'my app',
            'MY&APP'
        ]);

})();