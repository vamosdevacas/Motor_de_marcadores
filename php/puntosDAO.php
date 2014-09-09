<?php 
	
	//crea la conexion a la base de datos
	include_once 'conectar.php';

	//revisar php por objetos

	//clase de puntos

	class puntosDao//DAO (Data Access Object, es un componente de software que suministra una interfaz común entre la aplicación y uno o más dispositivos de almacenamiento de datos, tales como una Base de datos o un archivo.)
	{

		private $r;

		public function _construct()
		{
			$this->$r = array();
		}

		public function insertar($titulo,$cx,$cy)
		{

			$con= conexion::conectar(); //se indica el nombre de la clase seguido del nombre de la funcion a ejecutar

			//$titulo= mysql_real_escape_string($titulo);//quita caracteres especiales y lo iguala a una variable
			//$cx= mysql_real_escape_string($cx);
			//$cy= mysql_real_escape_string($cy);

			$insertar="insert into marcadores VALUES(NULL,'".$titulo."','".$cx."','".$cy."')";

			$resultado = mysql_query($insertar,$con);//ejecuta la consulta

			mysql_close($con);

			//====================================================================

			if($resultado == 1) {//si se inserto el registro da un resultado binario

				return true;	

			}

			else {

				return false;
			}

			//====================================================================

		}

		//------------------------------------------------------------------------

		public function mostrar_puntos(){

			$con= conexion::conectar();//crea la conexion
			$consulta="select * from marcadores";//variable de la consulta
			$resultado = mysql_query($consulta,$con);//ejecuta la consulta

			mysql_close($con);//cierrra la conexion

			//ciclo para que llena el array con los resultados

			while ($fila=mysql_fetch_array($resultado)) {
				
				$this->r[]=$fila;//
			}

			return $this->r;
		}



	}



 ?>