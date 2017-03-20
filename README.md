# SIGAP - Base
Arquitetura base para aplicação com Spring boot e angularJS.

### BACKEND
===============
* Java 1.8
* Spring Boot 1.4.1
 - Spring Web (Spring MVC)
 - Spring Data (JPA)
 - Spring Validation
 - Spring Security

### FRONTEND
===============
* AngularJS 1.X
* Booststrap 3.X
* Font Awesome 4.7 (http://fontawesome.io/icons/)

### REQUISITOS
===============
* JDK 8
* Tomcat 8

### USO
===============
 * clone este repositório;
 * Importe o projeto com maven no eclipse
 * Adicione o tomcat 8
 * Adicione o `datasource` a seguir no arquivo ```context.xml```  do tomcat:
	```xml
	<Resource name="jdbc/sigapds" auth="Container" type="javax.sql.DataSource"
	driverClassName="org.postgresql.Driver" url="jdbc:postgresql://localhost:5432/NOME-BD"
	username="SEU USER" password="SUA SENHA" maxTotal="20" maxIdle="10"
	maxWaitMillis="-1" />
	```
		
	
### PONTOS IMPORTANTES
