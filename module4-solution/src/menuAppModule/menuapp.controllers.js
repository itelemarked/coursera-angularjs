(function () {
  'use strict';
  
  angular.module('MenuApp')
  .controller('CategoriesCtrl', CategoriesCtrl)
  .controller('ItemsCtrl', ItemsCtrl);
  
  
  
  CategoriesCtrl.$inject = ['categories'];
  function CategoriesCtrl(categories) {
  	var cat = this;
  	
  	cat.categories = categories;
  }
  
  
  ItemsCtrl.$inject = ['categoryShortName', 'items'];
  function ItemsCtrl(categoryShortName, items) {
  	var it = this;
  	
  	it.items = items;
  	console.log(items[0]);
  	
  }
  

}());