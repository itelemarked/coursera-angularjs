(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);
  
  function MenuDataService() {
    var self = this;
    
    self.getAllCategories = function() {
      // https://davids-restaurant.herokuapp.com/categories.json
    };
    
    self.getItemsForCategory = function(categoryShortName) {
      //https://davids-restaurant.herokuapp.com/menu_items.json?category=
    };
    
  }
  

}());