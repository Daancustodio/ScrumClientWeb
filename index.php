<!DOCTYPE html>
<html ng-app="app">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Scrum Project</title>

    <link rel="stylesheet" type="text/css" href="public/css/bootstrap.min.css">
    
    <link href="public/font-awesome/css/font-awesome.css" rel="stylesheet">   
    <link href="public/css/plugins/morris/morris-0.4.3.min.css" rel="stylesheet">
    <link href="public/css/plugins/timeline/timeline.css" rel="stylesheet">
    <link href="public/css/sb-admin.css" rel="stylesheet">
    <link href="public/css/ng-animation.css" rel="stylesheet">
    <link href="public/js/lib/plugins/charts/angular-chart.css">
   
     
</head>

<body ng-controller="geralController">

    <div id="wrapper">       
        

        <?php 
        include_once 'view/template/barraNavegacaoSuperior.php';
        include_once 'view/template/menuStaticoLateralEsquerda.php' ;
        ?>
		
    <div id="page-wrapper">
        
            <div ng-view class="col-xs-12" style="margin-top: 2%; margin-left: -2%">
				<!-- Dentro desta div é apresentado todo conteudo mutável do aplicativo -->
            </div>           
           
        </div>  

    </div>
    <!-- /#wrapper -->
    <script src="public/js/lib/jquery.min.js"></script>
    <script src="public/js/lib/jquery.smooth-scroll.min.js"></script>	
    <script src="public/js/lib/bootstrap.min.js"></script>
    <script src="public/js/lib/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="public/js/lib/plugins/morris/raphael-2.1.0.min.js"></script>
    <script src="public/js/lib/plugins/morris/morris.js"></script>

    <script src="public/js/lib/bootswatch.js"></script>
    <script src="public/js/lib/angular.min.js"></script>
    <script src="public/js/lib/angular-route.min.js"></script>
    <script src="public/js/lib/angular-animate.min.js"></script>        
    <script src="public/js/lib/angular-resource.min.js"></script>     
    <script src="public/js/lib/plugins/morris/angular-morris-chart.min.js"></script>
    <script src="public/js/lib/plugins/charts/Chart.min.js"></script>
    <script src="public/js/lib/plugins/charts/angular-chart.min.js"></script>
	
    <!--Controllers-->
    <script src="controllers/app.js"></script>
    <script src="controllers/geralController.js"></script>
    <script src="controllers/restController.js"></script>    
        
	<!-- custom -->
	<script src="public/js/sb-admin.js"></script>
    <script src="public/js/dashboard-demo.js"></script>


</body>

</html>
