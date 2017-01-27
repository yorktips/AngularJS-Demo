angular.module("mainApp").factory('MathService', function() {
   var factory = {};
   
   factory.plus = function(a, b) {
      return a + b;
   }

   factory.minus = function(a, b) {
      return a - b;
   }
   
   factory.multiply = function(a, b) {
      return a * b;
   }

   factory.divide = function(a, b) {
      return a / b;
   }
   
   return factory;
});