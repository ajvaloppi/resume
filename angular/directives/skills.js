'use strict';

angular.module('skills', [])

.controller('skillsController', ['$scope', 'SidebarService', function($scope, SidebarService) {
    $scope.skills = SidebarService.getSkills();
}])

.directive('skillsDirective', function() {
  return {
    templateUrl: 'templates/skills.html'
  };
});