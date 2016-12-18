'use strict';

angular.module('awards', [])

.controller('awardsController', ['$scope', 'SidebarService', function($scope, SidebarService) {
    $scope.awards = SidebarService.getAwards();
}])

.directive('awardsDirective', function() {
  return {
    templateUrl: 'templates/awards.html'
  };
});