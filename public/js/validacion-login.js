window.addEventListener("load" , function(){

const formulario = document.querySelector(".formLogin")
const inputs = document.querySelectorAll(".formLogin input") 

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,12}$/, // 6 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

let errores = {
	email: "El email no puede estar vacio",
	password : "La password no puede estar vacia",

}

let erroresVacio = {
	email: "",
	password : "",
}

//funciones de validacion 

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





const validarFormulario = (e) => {
    switch(e.target.name){
        case "email":
            var error = document.querySelector("#emailError")
			console.log("estoy validando el Email");
			validarEmail(e);
			error.innerText = errores.email
        break
        case "password":
            var error = document.querySelector("#passError")
			console.log("estoy Validando la pass");
			validarPass(e);
			error.innerText = errores.password
        break    
    }
}



inputs.forEach((input) => {
    input.addEventListener("keyup" , validarFormulario)
    input.addEventListener("blur" , validarFormulario)     
})




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