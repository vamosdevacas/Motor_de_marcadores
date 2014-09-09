
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>mapa_1</title>

	<!-- estilos perzonalizados -->
	<link rel="stylesheet" type="text/css" href="css/estilos.css"> 
    <!-- estilos bootstrap -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"> 
    <!-- Carga de Jquery -->
    <script type="text/javascript" src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
    <!-- Carga de Google Maps -->
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?v=3.exp"></script>
    <!-- Carga del javascript Bootstrap -->
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
	<!-- Carga del javascript personalizado -->
    <script type="text/javascript" src="js/script_mapa1.js"></script>
        
</head>

<body>

<div class="panel panel-default"><!-- inicio del panel de inicio-->


		<div class="panel-body">
			<nav class="navbar navbar-default" role="navigation">		   	
				<div class="navbar-header"><!-- cabecera de la barra de navegacion -->
				   		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
				   			<span class="sr-only">Toggle navigation</span>
				   			<span class="icon-bar"></span>
				   			<span class="icon-bar"></span>
				   			<span class="icon-bar"></span>
				   		</button>
				   		<a class="navbar-brand" href="#"><span class="glyphicon glyphicon-globe"></span>&nbspvamosdevacas.com</a><!-- link home -->
				</div>			   
				   	<!-- links adicionales en la barra -->
				   	<div class="collapse navbar-collapse navbar-ex1-collapse">
						
						<!-- contenido de la barra -->
						<ul class="nav navbar-nav">
				   			<li class="inactive"><a href="mapa_icono_1.html" data-toggle="tooltip" data-placement="bottom" title="Mirar en el mapa que quiero hacer." ><span class="glyphicon glyphicon-map-marker"></span>&nbspQue voy a hacer?...</a></li>
				   			<li><a href="#"><span class="glyphicon glyphicon-road"></span> &nbsp A donde voy?...</a></li>
			   			</ul>

			   			<!-- caja de busqueda -->
						<form class="navbar-form navbar-left" role="search" style="">
				   			<div class="form-group">
				   				<input type="text" class="form-control" placeholder="Busca tus vacas...">
				   			</div>
				   			<button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
			   			</form>

				   		<ul class="nav navbar-nav navbar-right"><!-- link a la derecha -->
				   			<li><a href="#" data-toggle="modal" data-target=".bs-example-modal-lg" > <span class="glyphicon glyphicon-user"></span> &nbsp Iniciar Sesión </a></li>			   			
				   		</ul>

				   	</div><!-- /.navbar-collapse -->
			</nav>
		        
		</div>

	</div>

	<h3>Gestion de marcadores&nbsp<span class="label label-primary">Admin</span></h3>

	<div id="notificacion">
		
		
	</div>

<div id="panel">
      

  
  <form role="form" id="form_map">

  <div class="form-group">

	    <label for="titulo">Título</label>
	    <input id="titulo" name="titulo" type="text" class="form-control" autocomplete="off" required = "required"/>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Coordenada x</label>
	    <input type="text" name="cx" class="form-control" readonly id="cx" autocomplete="off" required = "required"/>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Coordenada y</label>
	    <input type="text" name="cy" class="form-control" readonly id="cy" autocomplete="off" required = "required"/>
	  </div>
	  
	  <button id="btn_ok" type="button" class="btn btn-success">Guardar</button>
	  <button id="cancelar" type="button" class="btn btn-danger">Cancelar</button>	 
 
 </div>
  
</form>

	<!-- div en el que se visualiza el mapa -->
	<div id="mapa" style="">

	</div>



</body>
</html>