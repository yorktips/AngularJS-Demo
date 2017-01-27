'use strict';

angular.module('mainApp')

.controller('BuyController', function( $scope, $http, $rootScope, $state, $stateParams, ProductService, ProductFactoryService){
 
	var id=$stateParams.id;
	console.log("start id=" + id);
	
	$scope.product = angular.copy(ProductService.get(id));
	$scope.product.quantity=1;
	
	$scope.sellProduct = function (product) {
		$scope.errMessage="";
		var prod=angular.copy(ProductService.get(id));
		if ( !ProductFactoryService.hadEnoughQuantity(prod,product ) ) 
		{
			$scope.errMessage="Your don't have enough product in stock";
			return;
		}else{
			prod.quantity -=parseInt(product.quantity);
			ProductService.save(prod);
			console.log(prod);
			$state.go("home");
		}
	}
	
	$scope.quantityUpdate=function(){
		$scope.errMessage="";
	}
	
	$scope.return = function () {
		$state.go("home");
	}
})

