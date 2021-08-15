
window.addEventListener("load" , function(){

//declaracion del objeto de errores vacio
let errores = {
	nombre: "El nombre no puede esta vacio",
	email: "El email no puede estar vacio",
	password : "La password no puede estar vacia",
	confrimPass: "Las contraseñas deben ser iguales",
	telefono: "El numero de telefono no debe estar vacio",
	imagen: "Debes seleccionar una imagen"
}

let erroresVacio = {
	nombre: "",
	email: "",
	password : "",
	confrimPass: "",
	telefono: "",
	imagen: ""
}

//expresiones para compara los campos
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,12}$/, // 6 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10,10}$/ // 7 a 14 numeros.
}

//declaracion y capturacion de variables
const formulario = document.querySelector(".formRegister")
const inputs = document.querySelectorAll(".formRegister input")
const genero = document.querySelector("select")


//funciones de validcaion 

validarNombre = function(e)
{
	if(e.target.value.includes(" ")  && expresiones.nombre.test(e.target.value))
	{
		console.log("nombre correcto");
		document.querySelector("#nombreUsuario").style.border = "none"
		document.querySelector("#nombreUsuario").style.outline = "2px solid green"
		errores.nombre = ""
	}
	else if(e.target.value == "")
	{
		errores.nombre = "El campo nombre no puede quedar vacio"
		document.querySelector("#nombreUsuario").style.border = "none"
		document.querySelector("#nombreUsuario").style.outline = "1px solid gray"
		console.log(errores.nombre);
	
	}
	else if(!expresiones.nombre.test(e.target.value) && e.target.value != "")
	{
		errores.nombre = "El nombre no debe tener numeros o #,$,%.."
		document.querySelector("#nombreUsuario").style.border = "none"
		document.querySelector("#nombreUsuario").style.outline = "2px solid red"
		console.log(errores.nombre);

	}
	else
	{
		errores.nombre  = "El nombre debe tener apellido incluido"
		document.querySelector("#nombreUsuario").style.border = "none"
		document.querySelector("#nombreUsuario").style.outline = "2px solid red"
		console.log(errores.nombre);
		
	}	

}
validarEmail = function(e)
{
	if(expresiones.correo.test(e.target.value))
	{
		console.log("Email correcto");
		document.querySelector("#email").style.border = "none"
		document.querySelector("#email").style.outline = "2px solid green"
		errores.email = ""
	}
	else if(e.target.value == "")
	{
		errores.email  = "El campo email no puede estar vacio"
		document.querySelector("#email").style.border = "none"
		document.querySelector("#email").style.outline = "1px solid gray"
		console.log(errores.email);
	}
	else
	{
		errores.email = "El formato debe ser Email"
		document.querySelector("#email").style.border = "none"
		document.querySelector("#email").style.outline = "2px solid red"
		console.log(errores.email);
	}

}
validarPass = function(e)
{
	if(e.target.value != "" && expresiones.password.test(e.target.value)) // caso correcto
	{
		console.log("password correcta");
		document.querySelector("#password").style.border = "none"
		document.querySelector("#password").style.outline = "2px solid green"
		errores.password = ""
	}	
	else if(!expresiones.password.test(e.target.value) && e.target.value != "") // chekeamos que tiene 4-12 caracters
	{
		errores.password = "la contraseña tiene que ser entre 6 y 12 caracteres"
		document.querySelector("#password").style.border = "none"
		document.querySelector("#password").style.outline = "2px solid red"
		console.log(errores.password);
	}
	else if(e.target.value == "") //caso vacio
	{
		errores.password = "la contraseña no puede estar vacia"
		document.querySelector("#password").style.border = "none"
		document.querySelector("#password").style.outline = "1px solid gray"
		console.log(errores.password);
	}
}
confirmarPass = function(e){
	if(e.target.value != inputs[2].value)
	{
		errores.confrimPass = "las contraseñas tienen que ser iguales"
		document.querySelector("#passConfirm").style.border = "none"
		document.querySelector("#passConfirm").style.outline = "2px solid red"
		console.log(errores.confrimPass);
	}
	else if(e.target.value == inputs[2].value && e.target.value != "")
	{	
		console.log("contraseñas matchean");
		document.querySelector("#passConfirm").style.border = "none"
		document.querySelector("#passConfirm").style.outline = "2px solid green"
		errores.confrimPass = ""
	}
	else
	{
		errores.confrimPass = "El campo no puede quedar vacio"
		document.querySelector("#passConfirm").style.border = "none"
		document.querySelector("#passConfirm").style.outline = "1px solid gray"
		console.log(errores.confrimPass);
	}	
}
validarTelefono = function(e)
{
	if(expresiones.telefono.test(e.target.value))
	{
		console.log("Numero bueno");
		document.querySelector("#telefono").style.border = "none"
		document.querySelector("#telefono").style.outline = "2px solid green"
		errores.telefono = ""
	}
	else if(e.target.value != "" && !expresiones.telefono.test(e.target.value))
	{
		errores.telefono  = "El numero debe contener 10 numeros"
		document.querySelector("#telefono").style.border = "none"
		document.querySelector("#telefono").style.outline = "2px solid red"
		console.log(errores.telefono);
	}
	else if(e.target.value == "")
	{
		errores.telefono = "El campo no puede quedar vacio"
		document.querySelector("#telefono").style.border = "none"
		document.querySelector("#telefono").style.outline = "1px solid gray"
		console.log(errores.telefono);
	}

}
validarTipoDeImagen = function(e)
{
	if(e.target.value.includes(".jpg")  || e.target.value.includes(".jpeg") || e.target.value.includes(".png"))
	{
		console.log("Imagen valida");
        errores.imagen = ""
	}
	else if(e.target.value == "")
	{
		console.log("Imagen vacio");
		errores.imagen = "La imagen no debe quedar vacia"
	}
	else
	{
		console.log("Imagen no vacia pero invalida");
		errores.imagen = "Las extensiones permitidas son: .jpg , .jpeg , .png"
	}

}
validarGenero = function()
{
	console.log("validar genero");
}

	

//Acto de validacion
validarFormulario = (e) => {
	switch(e.target.name){
		case "nombreUsuario":
			var error = document.querySelector("#nombreError")
			console.log("estoy validando el nombre");
			validarNombre(e);
			error.innerText = errores.nombre
			break;
		case "emailUsuario":
			var error = document.querySelector("#emailError")
			console.log("estoy validando el Email");
			validarEmail(e);
			error.innerText = errores.email
			break;
		case "passwordUsuario":
			var error = document.querySelector("#passError")
			console.log("estoy Validando la pass");
			validarPass(e);
			error.innerText = errores.password
			break;
		case "confirmarPass":
			var error = document.querySelector("#confrimpassError")
			console.log("Estoy confrimando la password");
			confirmarPass(e);
			error.innerText = errores.confrimPass
			break;
		case "telefono":
			var error = document.querySelector("#phoneError")
			console.log("Estoy validando el numero de telefono");
			validarTelefono(e);
			error.innerText = errores.telefono
			break;
		case "imagen": 
			var error = document.querySelector("#imageError")
			console.log("Estoy validando tipo de imagen");
			validarTipoDeImagen(e);
			error.innerText = errores.imagen
			break;
	}
}


//validacion de inputs

inputs.forEach((input) => {
	input.addEventListener("blur" , validarFormulario);
	input.addEventListener("keyup" , validarFormulario);
})

//validacion de genero
genero.addEventListener("click" , validarGenero)



//hasta que no se valida todo no seguimos
formulario.addEventListener("submit" , (e) => {
	console.log(errores == erroresVacio)
	if(JSON.stringify(errores) != JSON.stringify(erroresVacio))
	{
		console.log("hay errores");
		console.log(errores);
		console.log(erroresVacio)
		e.preventDefault()
	}
	else
	{
		console.log("no hay errores sigo");
	}
	

})

})