'use strict';

angular.module('interests', [])

.controller('interestsController', ['$scope', 'SidebarService', function($scope, SidebarService) {
    $scope.interests = SidebarService.getInterests();
}])

.directive('interestsDirective', function() {
  return {
    templateUrl: 'templates/interests.html'
  };
});