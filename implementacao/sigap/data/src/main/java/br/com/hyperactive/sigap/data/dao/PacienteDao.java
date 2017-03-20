package br.com.hyperactive.sigap.data.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.hyperactive.sigap.domain.entity.Paciente;

/**
 * 
 * <p>
 * <b> AdmissaoDao </b>
 * </p>
 *
 * @author <a href="https://github.com/FranckAJ">Franck Aragão</a>
 */
public interface PacienteDao extends JpaRepository<Paciente, Long> {

	/**
	 * Monta uma query filtrando um paciente pelo nome
	 * 
	 * @param nome
	 * @return
	 */
	List<Paciente> findByNome(String nome);
}
