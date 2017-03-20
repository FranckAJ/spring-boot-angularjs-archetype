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

		vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType(
				'full_numbers').withDisplayLength(10).withBootstrap();
		
		vm.dtColumnDefs = [ 
		        DTColumnDefBuilder.newColumnDef(0).notSortable(),
				DTColumnDefBuilder.newColumnDef(1),
				DTColumnDefBuilder.newColumnDef(2)];

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
		vm.adicionarItem = function() {
			var modal = abrirModal({});

			modal.result.then(function(paciente) {
				vm.pacientes.push(paciente);
			});
		}

		/**
		 * 
		 */
		vm.editarItem = function(paciente) {
			abrirModal(paciente);
		}
	});
})();
