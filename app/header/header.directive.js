'use strict';

/**
 * @ngdoc directive
 * @description
 */
angular.module('fruugulApp')
	.directive('header',function(){
		return {
        templateUrl:'header/header.html',
        restrict: 'E',
        replace: true,
    	}
	});


