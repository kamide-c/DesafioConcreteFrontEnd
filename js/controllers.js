angular.module('starter.controllers', [])

.controller('ShotsListCtrl', function($scope, dribbble) {
	var list = "popular";
	dribbble.list(list).then(function (data){
        $scope.list = data;
    })
})
