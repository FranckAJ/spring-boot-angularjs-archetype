/**
 * @ngdoc Controller
 * @name Login Controller
 * 
 * @description Controller para login
 * 
 * @author <a href="https://franckaj.github.io/">Franck Aragão</a>
 */
(function() {
	var app = angular.module('sigapApp');

	app.controller('LoginController', function($state) {
		var vm = this;
		vm.usuario = {};

		/**
		 * 
		 */
		vm.doLogin = function() {
			/*TODO: implementar...*/
			$state.go("home");
		};
	});

})();
