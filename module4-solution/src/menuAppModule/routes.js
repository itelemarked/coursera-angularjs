(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'src/templates/categories.view.html',
        controller: 'CategoriesCtrl as cat',
        resolve: {
        	categories: ['MenuDataService', '$rootScope', function(MenuDataService, $rootScope) {
            $rootScope.$broadcast('categories:processing', {processing: true})
        		return MenuDataService.getAllCategories().then(function(result) {
        			return result.data;
        		}).finally(function() {
              $rootScope.$broadcast('categories:processing', {processing: false})
            });
        	}],
        }
      })

      .state('items', {
        url: '/items/{categoryShortName}',
        templateUrl: 'src/templates/items.view.html',
				controller: 'ItemsCtrl as it',
        resolve: {
        	items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
        		return MenuDataService.getItemsForCategory($stateParams.categoryShortName).then(function(result) {
        			return result.data.menu_items;
        		});
        	}],
        }
      })

  }


}());
