var mainApp = angular.module("mainApp");

mainApp.config(function($provide) {
	$provide.provider('MathService', function() {
		this.$get = function() {
			var factory = {};
	  
			factory.multiply = function(a, b) {
				return a * b;
			}
	  
			factory.plus = function(a, b) {
				return a + b;
			}
			return factory;
		};
	});
});
			

angular.module('mainApp').provider('prodProvider', function() {

    this.name = '';

    this.$get = function() {
        var name = this.name;
        return {
            getProductName: function() {
                return  name;
            }
        }
    };

    this.setName = function(name) {
        this.name = name;
    };
});

angular.module('mainApp').config(function(prodProviderProvider){
    prodProviderProvider.setName('World');
});
   
