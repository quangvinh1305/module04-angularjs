(function() {
'use strict';

    angular
        .module('MenuApp')
        .component('items', {
            templateUrl: 'items-list.html',
            bindings: {
                items: '<',
                categoryName: '<'
            },
        });
})();