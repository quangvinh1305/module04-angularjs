(function() {
'use strict';

    angular
        .module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        this.getAllCategories = getAllCategories;
        this.getItemsForCategory = getItemsForCategory;
        
        function getAllCategories() {
            return $http({
                url: 'https://davids-restaurant.herokuapp.com/categories.json'
            })
        }

        function getItemsForCategory(categoryShortName) {
            // console.log('getItemsForCategory: categoryShortName = ' + categoryShortName);
            return $http({
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
                params: {
                    category: categoryShortName
                }
            })
        }
    }


})();