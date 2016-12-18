'use strict';

angular.module('volunteer', [])

.controller('volunteerController', ['$scope', 'SidebarService', function($scope, SidebarService) {
    $scope.volunteering = SidebarService.getVolunteering();
}])

.directive('volunteerDirective', function() {
  return {
    templateUrl: 'templates/volunteer.html'
  };
});