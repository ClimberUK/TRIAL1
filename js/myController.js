//myController
var app = angular.module('myApp', []);
app.controller('myController', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
	$scope.items = [
           { Text: 'Item 1', Value: 'Url1' },
           { Text: 'Item 2', Value: 'Url2' }];
});