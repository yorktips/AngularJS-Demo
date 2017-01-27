'use strict';

var mainApp = angular.module('mainApp', ['ui.router']);

mainApp.run(
	function($http, $rootScope, $state) {
		console.log("start main");
		//$rootScope.adminState = false;
		$state.go("home");
});

mainApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
			
		$urlRouterProvider.otherwise('/home');
			
		$stateProvider.state('home', {
			url : '/home',
			templateUrl : 'partials/home.html',
			controller : 'ProductController'
		});

		$stateProvider.state('buyProduct', {
			url : '/buyProduct/:id',
			templateUrl : 'partials/sellProduct.html',
			controller : 'BuyController'
		});
});
