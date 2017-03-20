/**
 * @ngdoc controller
 * @name PacienteModalController
 * 
 * @description Controller para edição de um paciente.
 * 
 * @author <a href="https://github.com/FranckAJ">Franck Aragão</a>
 */

(function() {
	var app = angular.module("sigapApp");

	app.controller("PacienteModalController", function(pacienteService, $uibModalInstance, growl, paciente) {
		
		var vm = this;
		vm.paciente = {};
		vm.editar = true;
		vm.loading = false;
		angular.copy(paciente, vm.paciente);

		isEdicao();

		/**
		 * função realiza edição/cadastro de um funcionario
		 */
		vm.salvar = function() {
			vm.loading = true;

			if (!vm.editar) {
				pacienteService.salvar(vm.paciente, function(response) {
					growl.success("<b>Paciente</b> criado com sucesso");
					angular.copy(response, paciente);
					vm.loading = false;
					$uibModalInstance.close(paciente);
				}, function(validationErrors){
					var mensagem = "Falha na validação do Paciente<br>";
					
					for(i = 0; i < validationErrors.length; i++) {
						mensagem += validationErrors[i]+"<br>";
					}
					
					growl.warning(mensagem);
					
					vm.loading = false;
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
		 * 
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
