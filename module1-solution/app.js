(function() {
  'use strict'

  angular.module('LunchCheckApp', [])

  .controller('LunchCheckCtrl', LunchCheckCtrl);

  function LunchCheckCtrl($scope) {

    $scope.check = function() {
      var arr = [];

      if(!$scope.input) {
        $scope.message = 'Please enter data first';
      } else {
        arr = $scope.input.split(',');
        arr.length < 4 ? $scope.message = 'Enjoy!' : $scope.message = 'Too much!';
      }
    }

  }


})();
