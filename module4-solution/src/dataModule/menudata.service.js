(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);
  
  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var self = this;
    
    self.getAllCategories = function() {
    	return $http.get('https://davids-restaurant.herokuapp.com/categories.json');
      // https://davids-restaurant.herokuapp.com/categories.json
    };
    
    self.getItemsForCategory = function(categoryShortName) {
      // https://davids-restaurant.herokuapp.com/menu_items.json?category=
    };
    
  }
  

}());