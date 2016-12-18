'use strict';

angular.module('header', [])

.controller('headerController', ['$scope', 'HeaderService', function($scope, HeaderService) {
    $scope.name = HeaderService.getName();
    $scope.address = HeaderService.getAddress();
    $scope.phone = HeaderService.getPhone();
    $scope.email = HeaderService.getEmail();
    $scope.website = HeaderService.getWebsite();
}])

.directive('headerDirective', function() {
  return {
    templateUrl: 'templates/header.html'
  };
});