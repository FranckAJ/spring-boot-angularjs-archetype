/**
 * @ngdoc controller
 * @name PacienteController
 * 
 * @description Controller para consulta de pacientes.
 * 
 * @author <a href="https://github.com/FranckAJ">Franck Aragão</a>
 */
(function() {
	var app = angular.module('sigapApp');

	app.controller('PacienteController', function(pacienteService, $uibModal, DTOptionsBuilder, DTColumnDefBuilder) {
		var vm = this;
		vm.pacientes = [];

		vm.dtOptions = DTOptionsBuilder.newOptions()
		.withPaginationType('simple_numbers').withDisplayLength(10).withBootstrap();
		
		vm.dtColumnDefs = [ DTColumnDefBuilder.newColumnDef(0).notSortable() ];
		
		vm.buscarPacientes = function() {
			pacienteService.getPacientes(function(resultado) {
				vm.pacientes = resultado;
			});
		}

		vm.buscarPacientes();

		/**
		 * 
		 */
		function abrirModal(paciente) {
			return $uibModal.open({
				templateUrl : 'app/components/private/paciente/paciente.edit.html',
				controller : 'PacienteModalController',
				controllerAs : 'vm',
				backdrop : 'static',
				resolve : {
					paciente : function() {
						return paciente;
					}
				}
			});
		}

		/**
		 * 
		 */
		vm.adicionarPaciente = function() {
			var modal = abrirModal({});

			modal.result.then(function(paciente) {
				vm.pacientes.push(paciente);
			});
		}

		/**
		 * 
		 */
		vm.editarPaciente = function(paciente) {
			abrirModal(paciente);
		}
	});
})();
