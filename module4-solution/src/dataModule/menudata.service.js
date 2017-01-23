(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', '$q', '$timeout', '$rootScope'];
  function MenuDataService($http, $q, $timeout, $rootScope) {
    var self = this;

    // self.getAllCategories = function() {
    // 	return $http.get('https://davids-restaurant.herokuapp.com/categories.json');
    // };

		self.getAllCategories = function() {
			var deferred = $q.defer();

			$timeout(function() {
				$http.get('https://davids-restaurant.herokuapp.com/categories.json').then(function(result) {
					deferred.resolve(result);
				});
			}, 500);

    	return deferred.promise;
    };

    self.getItemsForCategory = function(categoryShortName) {
      return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName);
    };

  }


}());
