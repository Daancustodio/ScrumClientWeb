function restController($scope,$http,$routeParams,$location,$filter)
{
	//lista
	$scope.rows = null;
	$scope.itemsCombo = null;
	//um  
	$scope.row = null;
	$scope.idAnterior = null;
	
	//Paginação
	$scope.currentPage = 0;
	$scope.pageSize = 15;
	$scope.idAnterior = null;
	$scope.esconder = true;
	$scope.projetoSelecionado = "Selecione um Projeto";
	$scope.idProjeto = null;

	$scope.alteraProjeto = function(obj){
		$scope.projetoSelecionado = obj.titulo;
		$scope.idProjeto = obj.id;
		$scope.row.id_projeto = obj.id;             
	};

	$scope.alteraItemCorrente = function (id) {		
		
		if($scope.idAnterior === null){
			$('.'+id).addClass('disabled');
			$scope.idAnterior = id;
		}else{
			$('.'+$scope.idAnterior).removeClass('disabled');
			$('.'+id).addClass('disabled');
			$scope.idAnterior = id;
		}
	}

	$scope.HabilitarDivPorId = function (id,Habilitar) {		
		
		if(Habilitar){
			$('.'+id).removeClass('disabled');
			
		}else{
			$('.'+id).addClass('disabled');
		}
	}
	$scope.criaDivAlerta = function (idDivAnterior, msg, tipo) {
		if (tipo == null){
			tipo = 'alert-success';
		}
		$('#'+idDivAnterior).after('<div class="alert ' + tipo +' alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong><i class="glyphicon glyphicon-ok"></i></strong> ' + msg + '</div>');
  

	};

	$scope.numberOfPages =function(){
		return Math.ceil($scope.rows.length/$scope.pageSize);                
	}

	$scope.loadAll = function(rota){
		$scope.showLoader();
		$http.get($scope.server(rota)).success(function(data){
			$scope.rows = data;			
		});
	}

	/**
	 * Busca Array de Objetos JSON para preencher uma combo
	 * @param  {String} rota Rota para busca dos dados
	 * @return {Array}
	 */
	$scope.loadItemsCombo = function(rota){
		$scope.showLoader();
		$http.get($scope.server(rota)).success(function(data){
			$scope.itemsCombo = data;			
		});
	}

	$scope.loadRow = function(rota,id){
		$scope.esconder = false;
		$scope.alteraItemCorrente(id);

		$scope.showLoader();
		$http.get($scope.server(rota+"/"+id)).success(function(data){
			$scope.row = data;
			$scope.row.isUpdate = true;	

		});
	}

	$scope.save = function(rota){
		$scope.showLoader();

		if($scope.isUpdate){
			$scope.RemoveItemFromArray();
		}
		
		$http.post($scope.server(rota+"/"),$scope.row).success(function(data){
			$scope.criaDivAlerta('row1','Salvo com sucesso!');
			$scope.row.isUpdate = false;
			$scope.rows.push(data);
			//$scope.new();			
		});
	}

	$scope.del = function(rota,id){

		if (confirm("Deseja excluir " + id + "?")){
			$http.delete($scope.server(rota+"/"+id)).success(function(s){
				alert("Excluído com sucesso");
				$scope.rows.pop();
				$scope.new();
			});
		}

	}

	$scope.new = function(){
		$scope.row = null;
		$scope.esconder = false;
		$scope.row = {
			id : 0
		}		
	}

	$scope.cancelar = function(){
		$scope.row = null;
		$scope.esconder = true;	
		$scope.HabilitarDivPorId($scope.idAnterior,true);		
	}
	

	
	$scope.getIndexToRemove = function(item, itens){
		
		for (var i = itens.length - 1; i >= 0; i--) {
			if(itens[i].id === item.id)
			{
				return i;
			}			
		}

		return 0;//retorna o primeiro index caso nao encontre o index conrrespondente.
	}

	$scope.RemoveItemFromArray = function(){
		var index = $scope.getIndexToRemove($scope.row, $scope.rows);
		$scope.rows.splice(index,1);
	}


}
