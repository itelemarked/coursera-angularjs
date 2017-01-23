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
  
  
  ItemsCtrl.$inject = [];
  function ItemsCtrl() {
  	var item = this;
  }
  

}());