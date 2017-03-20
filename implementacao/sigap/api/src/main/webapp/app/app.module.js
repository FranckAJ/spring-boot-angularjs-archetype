/**
 * @ngdoc Module
 * @name sigapApp
 * 
 * @description módulo principal da aplicação
 * 
 * @author <a href="https://franckaj.github.io/">Franck Aragão</a>
 */
(function() {
    var app = angular.module('sigapApp', ['sigapRoute', 'layout', 'ui.bootstrap',
        'ngAnimate', 'datatables', 'datatables.bootstrap', 'hyperactive.angular.utils', 'ngCookies'
    ]);

    app.run([
        '$rootScope',
        '$location',
        '$http',
        'authenticationService',
        function($rootScope, $location, $http, authenticationService) {

            $rootScope.$on('$locationChangeStart', function(event, next, current) {
                authenticationService.usuarioLogado(function(logado) {

                    if (logado) {
                        if ($location.path() === '/login') {
                            $location.path('/home');
                        }
              
                    } else {
                        if ($location.path() !== '/login') {
                            $location.path('/login');
                        }
                    }
                });
            });
        }
    ]);

})();
