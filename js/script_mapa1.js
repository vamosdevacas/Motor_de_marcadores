//==================================================================================================
//variables del mapa en modo general

//array para almacenar nuevos marcadores
    var marcadores_nuevos = [];

//array para almacenar los marcadores que se traen de la base de datos
    var marcadores_bd = []; 

//variable general para el mapa

    var mapa = null;  
    

    //funcion para quitar marcadores de mapa
    function quitar_marcadores(lista){

    		//recorrer el array de marcadores
    		for(i in lista)
    		{
    			//quitar marcador de la lista
    			lista[i].setMap(null);
    		}
    }

    
//==================================================================================================
//en el onready de la pagina
$(document).on("ready", function(){
			
			//=======================================================================================================
			//Inicializacion del mapa

			//esta variable contiene la informacion que debe llevar un punto en el mapa para poderlo visualizar
    		var punto = new google.maps.LatLng(4.63301,-74.07210);
    		//	alert("carga punto");
    		//esta variable es la configuracion inicial del mapa
    		var config = {

    			center: new google.maps.LatLng(4.63301, -74.07210),
		        zoom: 7,
		        maxZoom:40,
		        mapTypeId: google.maps.MapTypeId.ROADMAP
    		};
    		//	alert("carga config");
    		//variable mapa en donde se indica en donde aparece el mapa y que opciones tiene
    		//en este se selecciona el mapa por jquery

    		mapa = new google.maps.Map($('#mapa')[0],config);
    		//--------------------------------------------------
    		//variable para seleccionar el formulario

    		var formulario = $("#form_map");//seleccion del formulario por jquery

    		//=======================================================================================================
    		//--ciclo para traer todos los marcadores--
    		//datos necesarios para crear un marcador
    		//var punto = new google.maps.LatLng(4.63301,-74.07210); un punto
    		/*var icono_v = 'icono7.png'; que icono va

		    	var marcador_vacas = new google.maps.Marker({
		    		position:punto,//es igual a las coordenadas que sacamos en el click y se separaron
		    		map:mapa,//la variable mapa que se hace en la inicializacion o el mapa en que se quiera poner el marcador
		    		animation: google.maps.Animation.DROP,//como va a aparecer el marcador
		    		icon: icono_v//la ruta de la imagen que va a hacer de icono
		    	});

		    	marcador_vacas.setMap(mapa); ejecucion del marcador*/ 
		    //=======================================================================================================
				//marcador inicializacion (de esta menera es que se inicializan los marcadores en el mapa)

				var icono_v = 'icono_vdv.png';

		    	var marcador_vacas = new google.maps.Marker({
		    		position:punto,//es igual a las coordenadas que sacamos en el click y se separaron
		    		map:mapa,//la variable mapa que se hace en la inicializacion o el mapa en que se quiera poner el marcador
		    		animation: google.maps.Animation.DROP,//como va a aparecer el marcador
		    		icon: icono_v//la ruta de la imagen que va a hacer de icono
		    	});

		    	marcador_vacas.setMap(mapa);

		    //=======================================================================================================

		    //=======================================================================================================
		    
		    	//infowindow o ventana de irformacion de cada marcador	

		    	//mensaje que va a llevar el marcador, puede tener texto o codigo
		    	var contenido = 'Esto es <a href="http://www.vamosdevacas.com/" target="_blank">vamosdevacas.com</a><br/><img src="img/imageneslogo/logoVDV_1.png"><br/>El sitio para tus vacaciones.';

		    	//este es el objeto InfoWindow que es mi ventana y le asigno el contenido de antes.
		    	var ventana = new google.maps.InfoWindow({
				    content: contenido
				  });

		    	
		    	//se agrega un evento listener en click para el marcador que ejecute la funcion de abrir la ventana en el mapa en el marcador_vacas
		    	google.maps.event.addListener(marcador_vacas, 'click', function() {
					    ventana.open(mapa, marcador_vacas);
					    //marcador_vacas.setAnimation(google.maps.Animation.BOUNCE);4.63301,-74.07210
					    mapa.setCenter({lat: 4.63301, lng: -74.07210});
					});
				//=====================================================================
		    	/*//mouseover
		    	google.maps.event.addListener(marcador_vacas, 'mouseover', function() {
					    //ventana.open(mapa, marcador_vacas);
					    marcador_vacas.setAnimation(google.maps.Animation.BOUNCE);
					});
		    	//mouseout
		    	google.maps.event.addListener(marcador_vacas, 'mouseout', function() {
					    //ventana.close(mapa, marcador_vacas);
					    marcador_vacas.setAnimation(null);
					});*/
		    //=======================================================================================================

		    google.maps.event.addListener(mapa, 'click', function(event) {

		    	//toma el valor del control titulo
		    	var titulo_info = formulario.find("input[id='titulo']").val();
		    	//alert(titulo_info);

				if(titulo_info=="") {//if de titulo vacio 

				alert("Por favor indique el nombre del marcador.");
				formulario.find("input[id='titulo']").focus();

				} 

				else {
			    //el evento click en el mapa da un parametro event
			    //que es el que devuelve las coordenadas
			    //alert(event.latLng); //el tipo de dato debe ser latLng si no no funciona

				//deshabilitar el control de titulo
				//formulario.find("input[id='titulo']").attr('disabled', 'disabled');	
					
			    //quiere cambiar el nombre?
			    	
					if (confirm("Desea cambiar el nombre del marcador?") == true) {
					        titulo_info=prompt("Tiulo del marcador");
							formulario.find("input[id='titulo']").val(titulo_info);
							crear_marcador();
					} 

					else {
					        
					       crear_marcador();
					     }//cierra coinfirmacion de titulo

				}//cierra else de control vacio


				function crear_marcador()

				{

		    	//==Captura de coordenadas==

		    	//ahora hay que obteber las coordenadas por separado ya capturando las por el evento
		    	var coordenadas = event.latLng.toString();
		    	//alert(coordenadas);
		    	//se reemplazan los parentesis por espacios
		    	coordenadas = coordenadas.replace("(","");
		    	coordenadas = coordenadas.replace(")","");

		    	//se separan las coordenadas

		    	//se utiliza una variable lista que toma la variable coordenadas y la separa en la coma(,) en una matriz
		    	var lista = coordenadas.split(",");

		    	//muestra cada lugar en la matriz lista como coordenada x,y
		    	//alert("La coordenada x = "+lista[0] +" la coordenada y = "+lista[1]);

		    	//=======================================================================================================

		    	//==Creacion de un marcador==

		    	//variable de coordenada o direccion
		    	var direccion = new google.maps.LatLng(lista[0],lista[1]);
		    	//variable de la imagen del marcador que contiene la ruta
		    	var icono = 'icono6.png';
		    	//variable de marcador
		    	var marcador = new google.maps.Marker({
		    		position:direccion,//es igual a las coordenadas que sacamos en el click y se separaron
		    		map:mapa,//la variable mapa que se hace en la inicializacion o el mapa en que se quiera poner el marcador
		    		animation: google.maps.Animation.DROP,//como va a aparecer el marcador
		    		icon: icono
		    	});

		    	//-------------------------------------------------------
		    	//pasar los datos al formulario
		    	formulario.find("input[id='cx']").val(lista[0]);
		    	formulario.find("input[id='cy']").val(lista[1]);
		    	formulario.find("input[id='titulo']").focus();
		    	//-------------------------------------------------------

		    	//dejar solo un marcador en el mapa 
		    	//guardar el marcador en el array

		    	marcadores_nuevos.push(marcador);

		    	//--------------------------------------------------------

		    	//antes de ubicar el marcador en el mapa quitar todos los demas
		    	//y asi solo dejar 1

		    	quitar_marcadores(marcadores_nuevos);//funcion para quitar marcadores

		    	//--------------------------------------------------------

		    	//ubicar el marcador en el mapa
		    	marcador.setMap(mapa);//se indica el marcador,y en que mapa

		    	//=======================================================================================================

		    	//==Añadir evento click al marcador==
		    	
		    	var contenido_1 = titulo_info + '<br/>'+coordenadas;
		    	
		    	var ventana_1 = new google.maps.InfoWindow({
				    content: contenido_1
				  });

		    	//=======================================================================================================


		    	google.maps.event.addListener(marcador,"click",function(){

		    		ventana_1.open(mapa, marcador);

		    	});

		    };//cierra la funcion crear marcador	

				//============================================================================================

		    });//cierra el evento click

	//nueva funcion dentro del jquery

	//========================================================================================================

	$("#form_map").on("submit", function(){

		//recupero datos del formulario

		var titulo = $("#titulo").val();

		var cx = $("#cx").val();
		var cy = $("#cy").val();

		if(cx.length < 1 || cy.length < 1){

			alert("Las coordenadas están vacías y no se pueden guardar.");
						
		}else{

			//variable de la url que va a ejecutar los datos
		var url="php/envia_datos.php";

		//alert(cx+" "+cy);

		$.ajax({

			type:'post',
			url: url,
			beforeSend: function(){
				//aca se muestra la imagen de carga
				//$("#carga").css("display", "inline");
				} ,//muestra la imagen de carga
			data:('titulo='+titulo+'&cx='+cx+'&cy='+cy),
			
			success: function(respuesta){

				//$('#form').modal('hide');//vuelve a esconder el formulario
				$("#form_map")[0].reset();//limpia todos los campos del formulario!
				//$("#carga").css("display", "none");//oculta el gift de carga

				//tomar el div y mostrar el resultado que es el parametro respuesta en este caso 
				//todo el echo que genera la pagina envia_datos.php
				//$("#resultado_us").html(respuesta);

				//crea la notificacion

				var notti = $("#notificacion").html();

				$("#notificacion").html(notti+'<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>Excelente!</strong> El marcador se ha creado correctamente.</div>');
			} //cierra success

		});
		
		//alert("El usuario ha sido creado correctamente!");
		return false; //se retorna false para que no haga un reload a la pagina

		}//cierra verificacion de campos vacios cx o cy

	});//cierra el submit
	
	//=========================================================================
	//funcion insertar

	$("#btn_ok").on("click",function(){

		//alert("Se ha hecho ok.");
		//en data de ajax la variable formulario ha sido tomada antes		
		$.ajax({
			url: 'php/interfaz_ajax.php',
			type: 'POST',
			dataType: 'json',
			data: formulario.serialize()+"&tipo=insertar",//serializa el formulario mas el tipo de accion que debe ejecutar en el archivo interfaz_ajax.php
			success: function (data_resultado){

				alert(data_resultado.mensaje);//data_resultado es igual a $r en interfaz_ajax.php

			},

			beforeSend: function(){

			},

			complete: function(){


			}
				
		});
		
		return false;
	});

	//=========================================================================

	//cargar los punto al terminar la carga del la pagina

	marcadores();

	//=========================================================================

	$("#cancelar").on("click",function(){

		alert("Se ha cancelado.");
	});



});//cierra jquery onready

//funcion que recupera datos de la base

function marcadores(){

	$.ajax({
			url: 'php/interfaz_ajax.php',
			type: 'POST',
			dataType: 'json',
			data: "&tipo=mostrar",//solo envia el tipo de accion a realizar

			success: function (data_resultado){

				//alert(data_resultado.mensaje);

				if (data_resultado.estado == "Ok") {

					//alert("Hay marcadores en la base de datos.");

					//este each funciona con el objeto en primer lugar, luego la funcion que lleva el auxiliar
					$.each(data_resultado.mensaje, function(i, item) {
						 
						//obteber las coordenadas del punto
						var coordenadas_bd = new google.maps.LatLng(item.cx,item.cy);
						/*la variable item es el objeto que se trae de la consulta que se 
						ejecuta en interfaz_ajax.php */
						//variable para el icono del marcador
						var icono_bd = "icono_2.png";
						//cargar las propiedades al marcador
						var marcador_bd = new google.maps.Marker({
							idMarcador:item.id,
							title:item.titulo,
				    		position:coordenadas_bd,//es la ubicacion de las coordenadas
				    		map:mapa,//la variable mapa que se hace en la inicializacion o el mapa en que se quiera poner el marcador
				    		animation: google.maps.Animation.DROP,//como va a aparecer el marcador
				    		icon: icono_bd//la ruta de la imagen que va a hacer de icono
				    	});

		    			//agregar el evento click al marcador
		    			/*google.maps.event.addListener(marcador_bd, 'click', function(event) {

		    				alert("Se hizo click en el marcador número "+marcador_bd.idMarcador+" - "+marcador_bd.title);

		    			});*/

						//agregar el marcador a la variable marcadores_bd
						marcadores_bd.push(marcador_bd);

						//ubicar el marcador
						//marcador_vacas.setMap(mapa); 

						//=======================================================================================================
		    
				    	//infowindow o ventana de irformacion de cada marcador	

				    	//mensaje que va a llevar el marcador, puede tener texto o codigo
				    	var contenido_bd = 'Ha hecho click en '+marcador_bd.title;

				    	//este es el objeto InfoWindow que es mi ventana y le asigno el contenido de antes.
				    	var ventana_bd = new google.maps.InfoWindow({
						    content: contenido_bd
						  });

				    	
				    	//se agrega un evento listener en click para el marcador que ejecute la funcion de abrir la ventana en el mapa en el marcador_vacas
				    	google.maps.event.addListener(marcador_bd, 'click', function(event) {
							    mapa.setCenter(new google.maps.LatLng(item.cx,item.cy));
							    ventana_bd.open(mapa, marcador_bd);
							    marcador_bd.setAnimation(google.maps.Animation.BOUNCE);							    
							    //item.cx,item.cy google.maps.LatLng(item.cx,item.cy)
							});
						//=====================================================================
					    	//mouseover
					    	google.maps.event.addListener(marcador_bd, 'dblclick', function() {
								    //ventana.open(mapa, marcador_vacas);
								    marcador_bd.setAnimation(null);
								    ventana_bd.close(mapa, marcador_bd);
								});
					    	//mouseout
					    	google.maps.event.addListener(marcador_bd, 'mouseout', function() {
								    //ventana.close(mapa, marcador_vacas);
								    //marcador_bd.setAnimation(null);
								});
					    //=====================================================================================================

						marcador_bd.setMap(mapa);

					});
					//----------------------------------------------------------------------------------------
				}

				else{

					alert("No hay marcadores en la base.");

				}

			},

			beforeSend: function(){

			},

			complete: function(){


			}
				
		});
		
		return false;
}//cierra la funcion de marcadores


//============================================================================================================



