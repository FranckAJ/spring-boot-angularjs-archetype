Dicas para manter o Padrão e evitar dores de cabeça
===============

Algumas dicas simples para trabalhar com angularJS, dicas retiradas do style guides do angulae, especificadas por John Papa. Todas as styles guides: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md 

### Estrutura e nomeclatura de nomes de arquivos

```
├── webapp/
│   |
│   ├── app
│   │   |
│   │   ├── blocks
│   │   │     ├── config			
│   │   │     |    ├── http.config.js 
|   |   |
│   │   ├── components
│   │   │     ├── paciente					<b>*</b> 	
│   │   │     │    ├─ pacintes.controller.js			<b>**</b> 
│   │	│     │	   ├─ pacintes.html
│   │	│     │	   ├─ pacinte.edit.controller.js
│   │	│     │	   ├─ pacinte.edit.html
│   │   │     ├── partials				
│   │   │     │    ├─ ...
│   │   │     ├── services				
│   │   │     │    ├─ pacinte.service.js
│   │   │     │
```
<b>*</b>Defina uma pasta por feature
<b>**</b>Crie o nomes de arquivos separando por ponto nome do tipo: ex: feature.controller.js | feature.service.js | feature.filter.js

### Princípio da responsabilidade única

<b>Defina um componente por arquivo</b> da mesma forma que vimos em padrões de projetos, em agularJS é recomendando que um arquivo seja responsável por efetuar uma única coisa.

```js
/* evitar */
angular
      .module('app', ['ngRoute'])
      .controller('SomeController', SomeController)
      .factory('someFactory', someFactory);

function SomeController() { }

function someFactory() { }
```

```js
* recomendado */

// app.module.js
angular
      .module('app', ['ngRoute']);

/* recomendado */

// someController.js
angular
      .module('app')
      .controller('SomeController', SomeController);

function SomeController() { }

/* recomendado */

// someFactory.js
angular
      .module('app')
      .factory('someFactory', someFactory);

function someFactory() { }
```

### Módulos
<b>Evite atribuir declaração de módulos a uma variável</b> Isso produz um código mais legível e evita colisões entre modulos e outras variaveis com o mesmo nome.

```js
/* Evitar */
var app = angular.module('app');
app.controller('SomeController', SomeController);

function SomeController() { }
```
```js
/* recomendado */
angular
    .module('app')
    .controller('SomeController', SomeController);

function SomeController() { }
```

### Expressão invocada imediatamente 

<b>Envolva o conteudo dos js controllers/services/directives AngularJS em uma “Immediately Invoked Function Expression” - IIFE.</b> Uma expressão auto invocada, ajudar a previnir colisões de escopos durante uma concatenação e/ou minificação do arquivos js, a IIFE irá deixar as variaveis com escopo blobal esperado.

```js
/**
* recomendado 
*/

(function() {
    angular
        .module('app')
        .factory('logger', logger);

    function logger() { }
})();
```

### Controllers

<b>Troque $scope por controllerAs syntax.</br> Use ```vm``` no lugar do ```$scope```, Controller são construídos, renovados e provêem de uma instância única. Sendo assim o `controllerAs` é mais próximo de um construtor JavaScript do que `$scope`.  Ele promove o uso de binding com objetos na view através de pontos, ex. customer.name ao invés de name, isto facilita leitura, contexto e evita problemas de referência.

```js
/* evitar */
function Customer($scope) {
    $scope.name = {};
    $scope.sendMessage = function() { };
}

/* recomendado - mas tem como melhorar */
function Customer() {
    this.name = {};
    this.sendMessage = function() { };
}
```
```js
<input ng-model="vm.title"/>
```




 
