'use strict';

angular.module( 'mainApp' ) 
.filter( 'checkmark', function($scope, $http, $rootScope, $state) {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

angular.module( 'mainApp' ) 
.filter('limitCharacters',function(){
    return function(input,characterCount){
        return (input.length > characterCount) ? 
			input.substring(0,characterCount) : input;    
	} 
});
