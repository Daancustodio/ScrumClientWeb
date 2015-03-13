function geralController($scope,$http,$routeParams,$location,$filter)
{
	
	$scope.gridView = true;
	$scope.detalhesView = false;

	$scope.naoImplementado = function(){
		alert("Não Implementado");
	};
	
	$scope.showBurnDown = function(bool){
		if(bool){
			$scope.detalhesView = true;

			$scope.labels = ["01", "02", "03", "04", "05", "06", "07", "08"];
			$scope.series = ['Meta', 'Desempenho'];
			$scope.data = [
			    [70, 60, 50, 40, 30, 20, 10, 0],
			    [70, 48, 51, 35, 31, 16, 5, 0]
			];
			
			$scope.onClick = function (points, evt) {
			    console.log(points, evt);
			}
		}
		else
		{
				$scope.detalhesView = false;
		}
	};

	$scope.hstep = 1;
  $scope.mstep = 15;
$scope.mytime = new Date();
  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  
 

 
}
