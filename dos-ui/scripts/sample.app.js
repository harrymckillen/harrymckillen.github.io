'use strict';

angular.module('sampleApp', [
  'dos-ui'
])
  .controller('sampleAppCtrl', ['$scope', function ($scope) {
    $scope.showSpinner = true;
    console.log($scope.showSpinner);
  }]);