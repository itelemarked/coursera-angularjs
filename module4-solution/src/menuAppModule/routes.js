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
        	categories: ['MenuDataService', function(MenuDataService) {
        		return MenuDataService.getAllCategories().then(function(result) {
        			return result.data;
        		});
        	}],
        }
      })
      
      .state('items', {
        url: '/items/{categoryShortName}',
        templateUrl: 'src/templates/items.view.html',
        controller: 'ItemsCtrl as item',
        resolve: {
        	items: ['MenuDataService', function(MenuDataService) {
        		return MenuDataService.getItemsForCategory().then(function(result) {
        			return result.data;
        		});
        	}],
        }
      })
        
  }

  

}());