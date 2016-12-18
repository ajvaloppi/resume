'use strict';

angular.module('education', [])

.controller('educationController', ['$scope', 'SidebarService', function($scope, SidebarService) {
    $scope.degrees = SidebarService.getEducation();
}])

.directive('educationDirective', function() {
  return {
    templateUrl: 'templates/education.html'
  };
});