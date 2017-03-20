
/**
 * @ngdoc Service
 * @name pacienteService
 * 
 * @description requisições à endpoints de paciente
 * 
 * @author <a href="https://franckaj.github.io/">Franck Aragão</a>
 */

(function(){
  angular.module("sigapApp").factory("pacienteService", function($http){
    var resultado = {};

    /**
	 * 
	 */
	resultado.getPacientes = function(callback) {
		$http.get("paciente").then(function(response) {
			callback(response.data);
		});
	};

	/**
	 * Salva um paciente na API e retorna uma promisse de sucesso ou erro.
	 */
    resultado.salvar = function(paciente, callbackSuccess, callbackError) {
		$http.post("paciente", paciente).then(function(response) {
			callbackSuccess(response.data);
		}, function(error) {
			if(error.status == 422) {
				callbackError(error.data)
			}
		});
	};

    /**
	 * Altera um treinamento na API
	 */
    resultado.alterar = function(paciente, callback) {
      $http.put("paciente", paciente).then(function(response){
        callback(response.data);
      });
    };
    
    /**
	 * 
	 */
    resultado.remover = function(paciente, callback) {
        $http.delete("paciente/" + paciente.id).then(function(response){
          callback(response.data);
        });
      };

    return resultado;
    
  });
  
})();
