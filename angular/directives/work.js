'use strict';

angular.module('work', [])

.controller('workController', ['$scope', 'WorkService', function($scope, WorkService) {
    $scope.work = WorkService.getWork();
}])

.directive('workDirective', function() {
  return {
    templateUrl: 'templates/work.html'
  };
});