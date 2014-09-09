<?php 


	class conexion {

		public static function conectar(){

			$conexion=mysql_connect("localhost","root","");

			mysql_select_db("vacas");

			mysql_query("SET NAMES 'utf8'");

			if (!$conexion){

				return false;
			}

			else{

				return $conexion;
			}
		}

	}


 ?>