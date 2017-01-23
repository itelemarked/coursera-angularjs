(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var self = this;
    var urlBase = 'https://davids-restaurant.herokuapp.com';

		self.getAllCategories = function() {
			return $http.get(urlBase + '/categories.json');
    };

    self.getItemsForCategory = function(categoryShortName) {
      return $http.get(urlBase + '/menu_items.json?category=' + categoryShortName);
    };

  }


}());
