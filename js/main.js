
function validateForm(){

	var password = document.getElementById("input-password");
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var email = document.getElementById("input-email").value;
	var indice = document.getElementById("selector").selectedIndex;
	// validar datos

// nombre
	if( nombre.value == null || nombre.value.length == 0 || /^\s+$/.test(nombre.value) ) {
		//alert("No debe dejar el campo Nombre en blanco");
		var containerAlertNombre = document.getElementsByClassName ("name-container")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("No debe dejar el campo Nombre en blanco");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);

		return false;
	}
 	else if(/^^[a-zA-Z]*$/.test(nombre.value) == false){
 		// ("Nombre no valido, ingresar solo letras");
 		var containerAlertNombre = document.getElementsByClassName ("name-container")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("Nombre no valido, ingresar solo letras");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);
 		return true;
 	}    
 	else if(nombre.value.charAt(0).toUpperCase()!== nombre.value.charAt(0)){
 		//alert ("Nombre no valido, la primera letra debe ser en mayúscula");
 		var containerAlertNombre = document.getElementsByClassName ("name-container")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("Nombre no valido, la primera letra debe ser en mayúscula");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);
 		return false;
 	}

// apellido
	if( apellido.value == null || apellido.value.length == 0 || /^\s+$/.test(apellido.value) ) {
		//alert("No debe dejar el campo Apellido en blanco");
		var containerAlertNombre = document.getElementsByClassName ("lastname-container")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("No debe dejar el campo Apellido en blanco");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);
		return false;
	}
	else if(/^^[a-zA-Z]*$/.test(apellido.value) == false){
 		//alert ("Apellido no valido, ingresar solo letras");
 		var containerAlertNombre = document.getElementsByClassName ("lastname-container")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("Apellido no valido, ingresar solo letras");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);
 		return true;
 	}
    else if(apellido.value.charAt(0).toUpperCase()!== apellido.value.charAt(0)){
 		//alert ("Apellido no valido, la primera letra debe ser en mayúscula");
 		var containerAlertNombre = document.getElementsByClassName ("lastname-container")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("Apellido no valido, la primera letra debe ser en mayúscula");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);
 		return false;
 	}
    
// email
	if( email === null || email.length === 0 || /^\s+$/.test(email) ) {
		//alert("No debe dejar el campo Mail en blanco");
		var containerAlertNombre = document.getElementsByClassName ("email-container")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("No debe dejar el campo Mail en blanco");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);
		return false;
	}
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if( !re.test(email) ) {
		//alert("Tu correo electrónico no es válido");
		var containerAlertNombre = document.getElementsByClassName ("email-container")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("Tu correo electrónico no es válido");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);
		return false;
	}

	/* cantiadad numeros contraseña */
	function limitada(){
		if (password.value.length < 6){
			//alert("tu contraseña no es valida");
			var containerAlertNombre = document.getElementsByClassName ("form-group")[0];
			var contenedorNombrevacio = document.createElement("span");
			var nodoNombrevacio = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
			contenedorNombrevacio.appendChild(nodoNombrevacio);
			containerAlertNombre.appendChild(contenedorNombrevacio);
			return false;
		} else if (password.value=="password"){
			//alert("tu contraseña no es valida");
			var containerAlertNombre = document.getElementsByClassName ("form-group")[0];
			var contenedorNombrevacio = document.createElement("span");
			var nodoNombrevacio = document.createTextNode("tu contraseña no es valida");
			contenedorNombrevacio.appendChild(nodoNombrevacio);
			containerAlertNombre.appendChild(contenedorNombrevacio);
			return false;	
		} else if (password.value=="123456"){
			//alert("tu contraseña no es valida");
			var containerAlertNombre = document.getElementsByClassName ("form-group")[0];
			var contenedorNombrevacio = document.createElement("span");
			var nodoNombrevacio = document.createTextNode("tu contraseña no es valida");
			contenedorNombrevacio.appendChild(nodoNombrevacio);
			containerAlertNombre.appendChild(contenedorNombrevacio);
			return false;
		} else if (password.value=="098754"){
			//alert("tu contraseña no es valida");
			var containerAlertNombre = document.getElementsByClassName ("form-group")[0];
			var contenedorNombrevacio = document.createElement("span");
			var nodoNombrevacio = document.createTextNode("tu contraseña no es valida");
			contenedorNombrevacio.appendChild(nodoNombrevacio);
			containerAlertNombre.appendChild(contenedorNombrevacio);
			return false;
		}else{
			return true;
		}
	}
	limitada();

/* validar una opcion de la lista */

function seleccion(){
	if (indice == null || indice == 0){
	//alert("No haz seleccionado una opción, elige una");
		var containerAlertNombre = document.getElementsByClassName ("form-group")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("No haz seleccionado una opción, elige una");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);
		return false;
	}
}
seleccion();
}
