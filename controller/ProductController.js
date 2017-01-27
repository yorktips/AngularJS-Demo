'use strict';

angular.module('mainApp')

.controller('ProductController', function($scope, $http, $rootScope, $state,$stateParams,ProductService){
 
 
    $scope.products = ProductService.list();
 
    $scope.saveProduct = function () {

		if (angular.isUndefined($scope.newproduct)) {
			return;
		}

		if ($scope.newproduct.name!=null && $scope.newproduct.code!=null) {
			ProductService.save($scope.newproduct);
			$scope.newproduct = {};
		}
		
   }
	
    $scope.delete = function (id) {
 
        ProductService.delete(id);
        if ($scope.newproduct.id == id) $scope.newproduct = {};
    }
 
 
    $scope.edit = function (id) {
        $scope.newproduct = angular.copy(ProductService.get(id));
    }
	
	$scope.sellProduct = function ( product ) {
		var code=product.code;
		console.log("code=" + code);
		$state.go('buyProduct', {
			id : product.id
			});		
	}
})

