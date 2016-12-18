'use strict';

angular.module('header', [])

.controller('headerController', ['$scope', 'ResumeService', function($scope, ResumeService) {
    $scope.name = ResumeService.getName();
    $scope.address = '42°N 50’ 39.52’’, 80°W 18’ 6.17’’';
    $scope.phone = '226-206-1422';
    $scope.email = 'ajvalopp@uwaterloo.ca';
    $scope.website = 'github.com/ajvaloppi';
}])

.directive('headerDirective', function() {
  return {
    templateUrl: 'templates/header.html'
  };
});