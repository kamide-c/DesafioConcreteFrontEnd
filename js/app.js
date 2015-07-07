// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['starter.controllers', 'starter.services', 'ngSanitize'])

.config(function($routeProvider) {

  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $routeProvider

  // setup an abstract state for directive

  // Each tab has its own nav history stack:
  	.when("/:list", {
  		controller:"ShotsListCtrl",
  		templateUrl: "templates/ShotsList.html"
  	})
    .when("/shots/:id", {
      controller:"ShotsCtrl",
      templateUrl: "templates/ShotDet.html"})
  // if none of the above states are matched, use this as the fallback
  	.otherwise({redirectTo: "/ShotsList"})

});
