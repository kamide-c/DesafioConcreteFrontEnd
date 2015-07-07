angular.module('starter.controllers', [])

.controller('ShotsListCtrl', function($scope, dribbble) {
	var list = "popular";
	dribbble.list(list).then(function (data){
		$scope.list = data.data.shots;
    })
})

.controller('ShotsCtrl', function($scope, dribbble, $routeParams) {
    var id = $routeParams.id;
    dribbble.shot(id).then(function (data){
        $scope.shot = data.data;
        console.log(data);
    });
});
