/**
 * @ngdoc Route
 * @name sigapRoute
 * 
 * @description mapeamento de rotas usando ui-router com carregamento lazy de
 *              arquivos
 * 
 * @author <a href="https://franckaj.github.io/">Franck Aragão</a>
 */

(function() {
	var app = angular.module('sigapRoute', [ 'ui.router', 'oc.lazyLoad' ]);

	app.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/login");

		$stateProvider.state('login', {
			url : '/login',
			templateUrl : 'app/components/public/login/login.html',
			controller : 'LoginController',
			controllerAs : 'vm',
			data : {
				pageTitle : 'Login'
			},
			resolve : {
				loadMyDirectives : function($ocLazyLoad) {
					return $ocLazyLoad.load({
						name : 'login',
						files : [ 'app/components/public/login/login.controller.js' ]
					})
				}
			}
		})
		
		.state('home', {
			url : '/home',
			template : '<layout></layout>',
			data : {
				pageTitle : 'Home'
			},
			resolve : {
				loadMyDirectives : function($ocLazyLoad) {
					return $ocLazyLoad.load({
						name : 'home',
						files : [
						        'app/layout/layout.directive.js',
								'app/layout/header/header.directive.js',
								'app/layout/header/header-notification.directive.js',
								'app/layout/header/page-header.directive.js',
								'app/layout/sidebar/sidebar.directive.js',
								'app/layout/sidebar/sidebar.controller.js',
								'app/layout/widget/widget.js',
								'app/layout/widget/widget-body.js' ]
					})
				}
			}
		})
		
		.state('home.paciente', {
			url : "/paciente",
			data : {
				pageTitle : 'Pacientes'
			},
			templateUrl : "app/components/private/paciente/pacientes.html",
			controller : "PacienteController",
			controllerAs : 'vm',
			resolve : {
				loadMyFiles : function($ocLazyLoad) {
					return $ocLazyLoad.load({
						name : 'cliente',
						files : [
								'app/components/private/paciente/pacientes.controller.js',
								'app/components/private/paciente/paciente.edit.controller.js',
								'app/components/private/services/paciente.service.js' ]
					})
				}
			}
		});
	});
})();
