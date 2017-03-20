/**
 * @ngdoc controller
 * @name PacienteModalController
 * 
 * @description Controller para edição de um paciente.
 * 
 * @author <a href="https://github.com/FranckAJ">Franck Aragão</a>
 */

(function() {
	angular.module("sigapApp").controller("PacienteModalController", function(pacienteService, $uibModalInstance, growl, paciente) {
		
		var vm = this;
		vm.paciente = {};
		vm.editar = true;
		vm.loading = false;
		angular.copy(paciente, vm.paciente);

		isEdicao();

		/**
	      * @name v.salvar
	      * @desc edição e cadastro de um paciente
		 */
		vm.salvar = function() {
			vm.loading = true;

			if (!vm.editar) {
				pacienteService.salvar(vm.paciente, function(response) {
					growl.success("<b>Paciente</b> criado com sucesso");
					angular.copy(response, paciente);
					vm.loading = false;
					$uibModalInstance.close(paciente);
				});
			} else {
				pacienteService.alterar(vm.paciente, function(response) {
					growl.success("<b>Paciente</b> alterado com sucesso");
					
					angular.copy(response, paciente);
					vm.loading = false;
					$uibModalInstance.close(paciente);
				});
			}			
		}

		/**
		 * 
		 */
		vm.cancelar = function() {
			$uibModalInstance.dismiss('cancel');
		}
		
	      /**
	      * @name isEdicao
	      * @desc verifica se um paciente de paramentro é um cadastro ou edição
	      * @returns {boolean}
	      */
		function isEdicao() {
			if (vm.paciente.id == undefined) {
				vm.editar = false;
				vm.titulo = "Novo Paciente";
			} else {
				vm.editar = true;
				vm.titulo = "Alterar Paciente";
			}
			return vm.editar;
		}
	});
})();
