(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesCtrl', CategoriesCtrl)
  .controller('ItemsCtrl', ItemsCtrl)
  .controller('SpinnerCtrl', SpinnerCtrl);


  CategoriesCtrl.$inject = ['categories'];
  function CategoriesCtrl(categories) {
  	var cat = this;

  	cat.categories = categories;
  }


  ItemsCtrl.$inject = ['items'];
  function ItemsCtrl(items) {
  	var it = this;

  	it.items = items;
  }


  SpinnerCtrl.$inject = ['$rootScope'];
  function SpinnerCtrl($rootScope) {
    var $ctrl = this;

    var cancelListener = $rootScope.$on('categories:processing', function (event, data) {
      if (data.processing) {
        $ctrl.showSpinner = true;
      }
      else {
        $ctrl.showSpinner = false;
      }
    });

    $ctrl.$onDestroy = function () {
      cancelListener();
    };
  }


}());
