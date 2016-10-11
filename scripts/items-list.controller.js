(function() {
'use strict';

    angular
        .module('MenuApp')
        .controller('ItemsListController', ItemsListController);

    ItemsListController.$inject = ['itemsList'];
    function ItemsListController(itemsList) {
        var ctrl = this;

        ctrl.items = itemsList.data.menu_items || [];
        if (typeof(itemsList.data.category) !== 'undefined') {
            ctrl.categoryName = itemsList.data.category.name;
        }

    }
})();