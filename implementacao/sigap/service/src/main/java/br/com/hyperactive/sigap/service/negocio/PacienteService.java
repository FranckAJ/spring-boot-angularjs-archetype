package br.com.hyperactive.sigap.service.negocio;

import java.util.List;

import br.com.hyperactive.sigap.domain.entity.Paciente;

/**
 * 
 * <p>
 * <b> PacienteService </b>
 * </p>
 * 
 * <p>
 * Inteface para implementação de regras de negocio relacionadas a um paciente.
 * </p>
 *
 * @author <a href="https://github.com/FranckAJ">Franck Aragão</a>
 */
public interface PacienteService {

	/**
	 * 
	 * @param paciente
	 * @return
	 */
	Paciente criar(Paciente paciente);

	/**
	 * 
	 * @param paciente
	 * @return
	 */
	Paciente alterar(Paciente paciente);
	
	/**
	 * 
	 * @return
	 */
	List<Paciente> buscarTodos();
}
