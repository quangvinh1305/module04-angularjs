(function() {
    'use strict';

    angular
        .module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'templates/home.template.html'
        })
        
        .state('categories', {
            url: '/categories',
            templateUrl: 'templates/categories.template.html',
            controller: 'CategoriesListController',
            controllerAs: 'list',
            resolve: {
                categoriesList: ['MenuDataService', function (MenuDataService){
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        
        .state('items', {
            url: '/items/{shortName}',
            templateUrl: 'templates/items.template.html',
            controller: 'ItemsListController',
            controllerAs: 'list',
            resolve: {
                itemsList: ['$stateParams', 'MenuDataService',
                        function ($stateParams, MenuDataService){
                            return MenuDataService.getItemsForCategory($stateParams.shortName);
                        }]
            }
        });
    }

})();