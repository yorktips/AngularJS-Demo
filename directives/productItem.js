'use strict';

angular.module('mainApp')

.directive('productItem',function($http){

	var productItem = {
		restrict: "E",
		templateUrl: "./directives/productItem.html",

		controller: function($scope, $state, $rootScope){
			
            $scope.init = function(product){
                $scope.product = product;
            }
		}
	}

	return productItem;
})