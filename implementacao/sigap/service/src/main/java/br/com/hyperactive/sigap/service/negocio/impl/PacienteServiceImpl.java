/**
 * 
 */
package br.com.hyperactive.sigap.service.negocio.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.hyperactive.sigap.data.dao.PacienteDao;
import br.com.hyperactive.sigap.domain.entity.Paciente;
import br.com.hyperactive.sigap.service.negocio.PacienteService;

/**
 * 
 * <p>
 * <b> PacienteServiceImpl </b>
 * </p>
 *
 * @author <a href="https://github.com/FranckAJ">Franck Aragão</a>
 */
@Service
public class PacienteServiceImpl implements PacienteService {

	@Autowired
	private PacienteDao pacienteDao;

	/**
	 * 
	 */
	@Override
	@Transactional
	public Paciente criar(Paciente paciente) {
		return pacienteDao.save(paciente);
	}

	/**
	 * 
	 */
	@Override
	@Transactional
	public Paciente alterar(Paciente paciente) {
		return pacienteDao.save(paciente);
	}

	/**
	 * 
	 */
	@Override
	public List<Paciente> buscarTodos() {
		return pacienteDao.findAll();
	}

}
