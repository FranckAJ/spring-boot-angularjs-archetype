Dicas para manter padrão e evitar dores de cabeça
===============

Algumas dicas simples para trabalhar com angularJS. Dicas retiradas do style guides do angular, especificadas por John Papa. Todas as styles guides: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md 


## Princípio da responsabilidade única

<b>Defina um componente por arquivo.</b> Como vimos em padrões de projetos este princípio, em agularJS é recomendando o uso do mesmo, ou seja, um arquivo deve ser responsável por fazer uma única coisa.

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

## Módulos
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

## Expressão invocada imediatamente 

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

## Nome de Controllers 
<b>Use PadraoCamelCase para controladores, pois eles são construtores.</b>

```js
/**
 * recomendado
 */

// avengers.controller.js
angular
    .module
    .controller('HeroAvengersController', HeroAvengersController);

function HeroAvengersController() { }
```

## Controllers

<b>Troque $scope por controllerAs syntax.</b> Use ```vm``` no lugar do ```$scope```, Controller são construídos, renovados e provêem de uma instância única. Sendo assim o `controllerAs` é mais próximo de um construtor JavaScript do que `$scope`.  Ele promove o uso de binding com objetos na view através de pontos, ex. customer.name ao invés de name, isto facilita leitura, contexto e evita problemas de referência.

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
## Estrutura e nomeclatura de nomes de arquivos

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
│   │   │     ├── paciente					    * 	
│   │   │     │    ├─ pacintes.controller.js			   ** 
│   │	│     │	   ├─ pacintes.html
│   │	│     │	   ├─ pacinte.edit.controller.js
│   │	│     │	   ├─ pacinte.edit.html
│   │   │     ├── partials				
│   │   │     │    ├─ ...
│   │   │     ├── services				
│   │   │     │    ├─ pacinte.service.js
│   │   │     │
```
*Defina uma pasta por feature.<br>
**Crie o nomes de arquivos separando por ponto o nome do tipo `feature.tipo.js` ex: feature.controller.js,                   feature.service.js, feature.filter.js, feature.module.js.<br>
**Para <b>arquivos</b> js com com mais de uma palavra, separe com "-", ou seja, invês de ```headerNotification.directive.js``` use ```header-notification.directive.js```.

## Comentários
<b>Temos planos de gerar documentação com ```jDoc```</b>. Assim, é recomendado a documentação dos arquivos js. Além do mais, a documentação irá facilitar a leitura do código por pessoas que venham a mantê-lo no futuro.

```js
/**
 * @ngdoc Module
 * @name sigapApp
 * 
 * @description módulo principal da aplicação
 * 
 * @author <a href="https://franckaj.github.io/">Franck Aragão</a>
 */
 ```
 ```js
 
       /**
       * @name logErro
       * @desc Logs de erros
       * @param {String} mensagem a ser exibida
       * @returns {String}
       * @memberOf Factories.Logger
       */
      function logErro(msg) {
          var loggedMsg = 'Erro: ' + msg;
          $log.error(loggedMsg);
          return loggedMsg;
      };
 ```
