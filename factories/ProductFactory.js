angular.module('mainApp').factory('ProductFactoryService', function() {
    var factory = {};
            
	factory.hadEnoughQuantity = function(product, sellProduct) {
	
		if (product.quantity >= sellProduct.quantity ) {
			return true;
		}
		
		return false;
    }
	
    return factory;;
 });
  
 