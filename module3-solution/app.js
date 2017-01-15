(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);
  
  
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {    
    var self = this;

    self.narrowIt = function() {
      self.foundItems = MenuSearchService.getMatchedMenuItems(self.inputTxt);
    };
    
    self.removeItemAtIndex = function(index) {
      self.foundItems.splice(index, 1);
    };    
  }
  
  
  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var self = this;
    var menusUrl = 'https://davids-restaurant.herokuapp.com/menu_items.json'; 

    self.getMatchedMenuItems = function (searchTerm) {
      var allItems = [];
      var filteredItems = [];
           
      $http.get(menusUrl).then(function(result) {
        allItems = result.data.menu_items;
        angular.forEach(allItems, function(item, index) {
          if(item.description.toLowerCase().indexOf(searchTerm) !== -1)
            filteredItems.push(item);
        })
      });
      return filteredItems;
    };    
  }
  
  
  function FoundItemsDirective() {
    var tpl = 
        "<ol>" +
          "<li ng-repeat='item in items'>{{item.name}}, {{item.short_name}}, {{item.description}} " +
          "<button ng-click='onRemove({index:$index})'>Don't want this one!</button>" +
          "</li>" +
        "</ol>";
    
    return {
      restrict: 'E',
      template: tpl,
      scope: {
        items: '<foundItems',
        onRemove: '&',
      },     
    };
  }
  

}());