(function() {
'use strict';

    angular
        .module('MenuApp')
        .controller('CategoriesListController', CategoriesListController);

    CategoriesListController.$inject = ['categoriesList'];
    function CategoriesListController(categoriesList) {
        var ctrl = this;
        ctrl.categories = categoriesList.data;
    }

})();