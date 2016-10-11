(function() {
'use strict';

    angular
        .module('MenuApp')
        .component('categories', {
            templateUrl: 'categories-list.html',
            bindings: {
                items: '<',
            },
        });
})();