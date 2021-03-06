//URL de acesso ao servidor RESTful
SERVER_URL = "http://scrumwebapi.esy.es";

//Criação ao $app que é o modulo que representa toda a aplicação
var $app = angular.module('app',['ngRoute','ngAnimate','chart.js','ui.bootstrap','mgcrea.ngStrap']);

$app.config(function($routeProvider,$httpProvider){

	//Configura o route provider
	$routeProvider.
	when('/',{templateUrl:'view/acompanhamento/sprint/home.html'}).
	when('/icones', {templateUrl:'view/icones/icones.html'}).
	when('/projeto',{templateUrl:'view/projeto/home.html',		Controller:restController}).
	when('/sprint',{templateUrl:'view/sprint/home.html',		Controller:restController}).
	when('/estoria',{templateUrl:'view/estoria/home.html',		Controller:restController}).
	when('/time',{templateUrl:'view/time/home.html',				Controller:restController}).
	when('/papel',{templateUrl:'view/papel/home.html',		Controller:restController}).
	when('/tipoTarefa',{templateUrl:'view/tipoTarefa/home.html',     Controller:restController}).
	when('/tarefa',{templateUrl:'view/tarefa/home.html',			Controller:restController}).
	when('/sprintsView',{templateUrl:'view/acompanhamento/sprint/home.html',			Controller:restController}).
	when('/sprintDetalhes/:id',{templateUrl:'view/acompanhamento/sprint/detalhes.html',			Controller:restController}).
	otherwise({redirectTo:'/'});

	//configura o RESPONSE interceptor, usado para exibir o ícone de acesso ao servidor
	// e a exibir uma mensagem de erro caso o servidor retorne algum erro
	$httpProvider.responseInterceptors.push(function($q,$rootScope) {
		return function(promise) {
			//Always disable loader
			$rootScope.hideLoader();
			return promise.then(function(response) {
			      // do something on success
			      return(response);
			  }, function(response) {
			      // do something on error
			      $data = response.data;
			      $error = $data.error;
			      console.error($data);
			      if ($error && $error.text)
			      	alert("ERROR: " + $error.text);
			      else{
			      	if (response.status=404)
			      		alert("Erro ao acessar servidor. Página não encontrada. Veja o log de erros para maiores detalhes");
			      	else
			      		alert("ERROR! See log console");
			      }
			      return $q.reject(response);
			  });
		}
	});


});	

$app.run(function($rootScope){

	//Uma flag que define se o ícone de acesso ao servidor deve estar ativado
	$rootScope.showLoaderFlag = false;

	//Força que o ícone de acesso ao servidor seja ativado
	$rootScope.showLoader=function(){
		$rootScope.showLoaderFlag=true;
	}
	//Força que o ícone de acesso ao servidor seja desativado
	$rootScope.hideLoader=function(){
		$rootScope.showLoaderFlag=false;
	}

	//Método que retorna a URL completa de acesso ao servidor. 
	// Evita usar concatenação
	$rootScope.server=function(url){
		return SERVER_URL + url;
	}

});

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
$app.filter('startFrom', function() {
	return function(input, start) {
		if (input==null)
			return null;
        start = +start; //parse to int
        return input.slice(start);
    }
});

$app.config(function($datepickerProvider) {
  angular.extend($datepickerProvider.defaults, {
    dateFormat: 'dd/MM/yyyy',
    startWeek: 1
  });
})
