angular.module('starter.services', [])

.factory('dribbble', function($http){
    function load(pacote, params) {
        params = params || {};
        params.callback = "JSON_CALLBACK"
        return $http({
            method :'JSONP',
            url:'http://api.dribbble.com' + pacote,
            params: params
        }).success(function (data, status, headers, config) {
            console.log(data);
        }).error (function (data, status, headers, config) {
            console.log("se fudeu");
    	});
    }

    return {
        list: function(type, params) {
            return load("/shots/" + type, params);
        },
        shot: function (id) {
            return load("/shots/" + id);
        }
    }
});
