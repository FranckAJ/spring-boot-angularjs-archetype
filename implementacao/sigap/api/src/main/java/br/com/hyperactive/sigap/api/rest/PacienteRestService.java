package br.com.hyperactive.sigap.api.rest;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.hyperactive.sigap.domain.entity.Paciente;
import br.com.hyperactive.sigap.service.negocio.PacienteService;

/**
 * 
 * <p>
 * <b> PacienteRestService </b>
 * </p>
 *
 * <p>
 * Classe define serviços disponibilizados de um paciente.
 * </p>
 * 
 * @author <a href="https://github.com/FranckAJ">Franck Aragão</a>
 */
@RestController
@RequestMapping(value = "/paciente")
public class PacienteRestService {

	/**
	 * 
	 */
	@Autowired
	private PacienteService pacienteService;

	/**
	 * @param paciente
	 * @return
	 */
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Paciente> criar(@Valid @RequestBody Paciente paciente) {

		Paciente pacienteCriado = pacienteService.criar(paciente);

		return new ResponseEntity<Paciente>(pacienteCriado, HttpStatus.CREATED);
	}

	/**
	 * @param paciente
	 * @return
	 */
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Paciente> alterar(@Valid @RequestBody Paciente paciente) {

		Paciente pacienteAtualizado = pacienteService.alterar(paciente);

		return new ResponseEntity<Paciente>(pacienteAtualizado, HttpStatus.CREATED);
	}
	
	/**
	 * 
	 * @return
	 */
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<Paciente>> buscarTodos() {
		
		List<Paciente> pacientes = pacienteService.buscarTodos();
		
		return new ResponseEntity<List<Paciente>>(pacientes,HttpStatus.OK);
	}
}
