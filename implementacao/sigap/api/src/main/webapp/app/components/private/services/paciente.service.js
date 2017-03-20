
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

    /**
	 * 
	 */
	var _getPacientes = function(callback) {
		$http.get("paciente").then(function(response) {
			callback(response.data);
		});
	};

	/**
	 * 
	 */
    var _salvar = function(paciente, callback) {
		$http.post("paciente", paciente).then(function(response) {
			callback(response.data);
		});
	};

    /**
	 * Altera um treinamento na API
	 */
    var _alterar = function(paciente, callback) {
      $http.put("paciente", paciente).then(function(response){
        callback(response.data);
      });
    };
    
    /**
	 * 
	 */
    var _remover = function(paciente, callback) {
        $http.delete("paciente/" + paciente.id).then(function(response){
          callback(response.data);
        });
      };

    return {
    	getPacientes: _getPacientes,
    	salvar: _salvar,
    	alterar: _alterar,
    	remover: _remover
    };
    
  });
  
})();
