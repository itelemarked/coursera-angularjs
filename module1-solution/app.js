(function() {
  'use strict'

  angular.module('LunchCheck', [])

  .controller('LunchCheckCtrl', LunchCheckCtrl);

  LunchCheckCtrl.$inject=['$scope'];
  function LunchCheckCtrl($scope) {

    $scope.myColor = {};

    $scope.check = function() {
      var arr = [];

      if(!$scope.input) {
        $scope.message = 'Please enter data first';
        $scope.myColor = {color: 'red'};
      } else {
        arr = $scope.input.split(',');
        getLengthWithoutBlank(arr) < 4 ? $scope.message = 'Enjoy!' : $scope.message = 'Too much!';
        $scope.myColor = {color: 'green'};
      }
    }
  }

  function getLengthWithoutBlank(arr) {
    var l = arr.length;
    angular.forEach(arr, function(val, i) {
      if(val === '' || val === ' ') l -= 1;
    });
    return l;
  }

})();
