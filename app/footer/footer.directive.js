'use strict';

/**
 * @ngdoc directive
 * @description
 */
angular.module('fruugulApp')
	.directive('footer',function(){
		return {
        templateUrl:'footer/footer.html',
        restrict: 'E',
        replace: true,
    	}
	});


