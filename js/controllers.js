angular.module('starter.controllers', [])

.controller('ShotsListCtrl', function($scope, dribbble) {
	var list = "popular";
	dribbble.list(list);
	$scope.list = "data.data";
})
