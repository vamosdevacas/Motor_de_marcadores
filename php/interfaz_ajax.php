<?php 

 header('content-type: aplication/json; charset=utf-8');//header para json


 include_once 'puntosDAO.php';


 $accion= isset($_POST['tipo'])?$_POST['tipo']:"x";//variable que me va a determinar la accion


 switch ($accion) {

 	case 'insertar'://en el caso que la variable $accion sea igual a insertar
 		
 		$p = new puntosDao();//crea una nueva clase de puntosDAO
 		$exito = $p->insertar($_POST['titulo'],$_POST['cx'],$_POST['cy']);//ejecuta la funcion insertar de la clase puntosDao();

 		if($exito){ //si la variable de puntosDao $reultado es igual a true

 			$r["estado"] = "Ok";
 			$r["mensaje"] = "Se ha insertado correctamente.";

 		}

 		else{

 			$r["estado"] = "Error";
 			$r["mensaje"] = "Hubo un error al insertar.";
 		}

 		break;
 		//--------------------------------------------------------------------------------------------------------
 		case 'mostrar'://en el caso que la variable $accion sea igual a insertar
 		
 		$p = new puntosDao();//crea una nueva clase de puntosDAO
 		$resultado = $p->mostrar_puntos();//ejecuta la funcion insertar de la clase puntosDao();

 		if (count($resultado)>0) {
 			
 			$r["estado"] = "Ok";
 			$r["mensaje"] = $resultado;
 		}

 		else{

 			$r["estado"] = "Error";
 			$r["mensaje"] = "No ha registros."; 			
 		}

 		break;
 		//--------------------------------------------------------------------------------------------------------
 		default: 

 			$r["estado"] = "Error";
 			$r["mensaje"] = "Datos no válidos";

 		break;
 }

echo json_encode($r); //imprime el json

 ?>