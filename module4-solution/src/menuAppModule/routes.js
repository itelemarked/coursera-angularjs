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
        
  }

  

}());