angular.module('layout').directive('header', function() {
	return {
		templateUrl : 'app/layout/header/header.directive.html',
		restrict : 'E',
		replace : true,
	}
});