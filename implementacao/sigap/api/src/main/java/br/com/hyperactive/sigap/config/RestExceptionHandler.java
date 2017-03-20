/**
 * 
 */
package br.com.hyperactive.sigap.config;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * 
 * <p>
 * <b> RestExceptionHandler </b>
 * </p>
 *
 * @author <a href="https://github.com/FranckAJ">Franck Aragão</a>
 */
@ControllerAdvice("br.com.hyperactive.sigap.api.rest")
public class RestExceptionHandler {

	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(value = HttpStatus.UNPROCESSABLE_ENTITY)
	@ResponseBody
	public ResponseEntity<List<String>> handlerErrorValidation(HttpServletRequest req, MethodArgumentNotValidException manvex) {

		List<ObjectError> errors = manvex.getBindingResult().getAllErrors();
		Iterator<ObjectError> iterator = errors.iterator();		

		List<String> messages = new ArrayList<>();

		while (iterator.hasNext()) {
			messages.add(iterator.next().getDefaultMessage());
		}

		ResponseEntity<List<String>> responseEntity = new ResponseEntity<>(messages, HttpStatus.UNPROCESSABLE_ENTITY);

		return responseEntity;
	}

}