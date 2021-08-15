window.addEventListener("load" , function(){

const formulario = document.querySelector(".creacion-producto")
const inputs = document.querySelectorAll(".creacion-producto input") 
const textAreas = document.querySelectorAll(".creacion-producto textarea")
const selectMarca = this.document.querySelector(".marca")

console.log(formulario);
console.log(inputs);
console.log(textAreas);

const expresiones = {
	modelo: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,12}$/, // 6 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    stock: /^\d{1,5}$/,
    rodados: /^[0-9\,]{1,20}$/,
    colores: /^[a-zA-Z\,]{1,30}$/,
    precio: /^[0-9\,]{1,7}$/,
    descuento: /^[0-9\,]{1,3}$/,
    cuotas: /^[0-9\,]{1,2}$/
}

errores = {
    desc1: "La descripcion de articulo no debe estar vacia",
    desc2: "La descripcion de articulo no debe estar vacia",
    marca: "Debes seleccionar la maraca",
    modelo: "El nombre del modelo del producto no debe quedar vacio",
    imagen: "La imagen no debe estar vaia",
    stock: "El producto debe tener al menos 1 unidad de stock",
    precio: "El precio tiene que estar insertado",
    descuento: "El descuento debe estar insertado",
    cuotas: "El producto debe tener como por lo menos 1 cuota"    
}

erroresVacio = {
    desc1: "",
    desc2: "",
    marca: "",
    modelo: "",
    imagen: "",
    stock: "",
    precio: "",
    descuento: "",
    cuotas: ""    
}


//fucniones de validacion de campos select
validarMarca = function(e){
    console.log("la marce seleccionada:")
    console.log(e.target.value);
    if(e.target.value != "no")
    {
        errores.marca = ""
    }
    else
    {
        errores.marca = "Debes seleccionar la maraca"
    }
}


//validaciones de selects
const selectValidator = (e) => {
    var error = document.querySelector("#errorMarca")
    console.log("validando la marca");
    validarMarca(e);
    error.innerText = errores.marca
}




//fucniones de validacion de textareas
validarDesc1 = function(e){
    //logica de error
    if(e.target.value == "")
    {
    document.querySelector(".desc1").style.border = "none"
    document.querySelector(".desc1").style.outline = "1px solid gray"
    errores.desc1 = "La descripcion de articulo no debe estar vacia"
    }
    else if(e.target.name != "" && e.target.value.length <= 20)
    {
    document.querySelector(".desc1").style.outline = "2px solid red"   
    errores.desc1 = "La descripcion del producto debe tener mas de 20 caracteres"            
    }
    else 
    { 
    document.querySelector(".desc1").style.outline = "2px solid green"     
    errores.desc1 = ""          
    }
}
validarDesc2 = function(e){
    if(e.target.value == "")
        {
		document.querySelector(".desc2").style.border = "none"
		document.querySelector(".desc2").style.outline = "1px solid gray"
        errores.desc2 = "La descripcion de articulo no debe estar vacia"
        }
        else if(e.target.name != "" && e.target.value.length <= 20)
        {
        errores.desc2 = "La descripcion del producto debe tener mas de 20 caracteres"
        document.querySelector(".desc2").style.outline = "2px solid red"               
        }
        else 
        { 
        errores.desc2 = ""
        document.querySelector(".desc2").style.outline = "2px solid green"               
        }
}
//Validaciones de text areas
const validatorTextArea = (e) => {
    switch (e.target.name){
        case "desc1":
        var error = document.querySelector("#desc1Error")
        console.log("desc1 de producto");
        validarDesc1(e);
        error.innerText = errores.desc1
        break
        case "desc2":
        var error = document.querySelector("#desc2Error")
        console.log("desc2 de producto");
        validarDesc2(e);
        error.innerText = errores.desc2
        break
    }
}



//funciones de validacion de inputs

validarModelo = function(e){
    modelo = document.querySelector(".modelo");
    if(e.target.value == "")
    {
        modelo.style.border = "none"
        modelo.style.outline = "1px solid gray"
        errores.modelo = "El nombre del modelo del producto no debe quedar vacio"
    }
    else if(e.target.value.length > 16 || e.target.value.length < 5 )
    {
        modelo.style.border = "none"
        modelo.style.outline = "2px solid red"   
        errores.modelo = "El nombre del modelo debe tener entre 5 y 16 caracteres"

    }
    else
    {
        modelo.style.border = "none"
        modelo.style.outline = "2px solid green"   
        errores.modelo = ""
    }
}
validarImagen = function(e){
    const imagen = document.querySelector(".foto-principal")
    console.log(e.target.value);
    if(e.target.value.includes(".jpg")  || e.target.value.includes(".jpeg") || e.target.value.includes(".png"))
    {
        console.log("Imagen valida");
        errores.imagen = ""
    }
    else 
    {
        console.log("Imagen invalida");
        errores.imagen = "La imagen tiene que se de tipo .jpg, .jpeg o .png"
    }
}
/*
validarRodados = function(e){
    rodados = document.querySelector(".rodados")
    if(rodados.value == "")
    {
        rodados.style.border = "none"
        rodados.style.outline = "1px solid gray"
        errores.rodado = "El campo de los rodados no puede quedar vacio"
    }
    else if(expresiones.rodados.test(rodados.value))
    {
        rodados.style.border = "none"
        rodados.style.outline = "2px solid green"   
        errores.rodado = ""
    }
    else
    {
        rodados.style.border = "none"
        rodados.style.outline = "2px solid red"   
        errores.rodado = "Los rodadps deben ser ingresado separados por coma sin espacisos"
    }
}

validarColores = function(e){
    colores = document.querySelector(".colores");
    if(colores.value == "")
    {
        colores.style.border = "none"
        colores.style.outline = "1px solid gray"
        errores.color = "El campo de los colores no puede quedar vacio"
    }
    else if(expresiones.colores.test(colores.value))
    {
        colores.style.border = "none"
        colores.style.outline = "2px solid green"
        errores.color = ""
    }
    else
    {
        colores.style.border = "none"
        colores.style.outline = "2px solid red"
        errores.color = "Los colores deber ser ingresados con letras sin acentos separados por una coma"
    }
}
*/
validarStock = function(e){
    stock = document.querySelector(".stock")
    if(stock.value == "")
    {
        stock.style.border = "none"
        stock.style.outline = "1px solid gray"    
        errores.stock = "El campo stock no puede quedar vacio"    
    }
    else if(expresiones.stock.test(stock.value))
    {
        stock.style.border = "none"
        stock.style.outline = "2px solid green"
        errores.stock = ""
    }
    else
    {
        stock.style.border = "none"
        stock.style.outline = "2px solid red"
        errores.stock = "El stock debe ser un numero entre 1 y 99999"
    }
}
validarPrecio = function(e){
    let precio = document.querySelector(".precio")
    if(precio == "")
    {
        precio.style.border = "none"
        precio.style.outline = "1px solid gray"
        errores.precio = "El campo del precio no debe quedar vacio"
    }
    else if(expresiones.precio.test(precio.value))
    {
        precio.style.border = "none"
        precio.style.outline = "2px solid green"
        errores.precio = ""
    }
    else
    {
        precio.style.border = "none"
        precio.style.outline = "2px solid red"
        errores.precio = "El precio debe ser ingresado con numeros entre 1 a 9999999"
    }
}
validarDescuento = function(e)
{
    let descuento = document.querySelector(".descuento")
    if(descuento == "")
    {
        descuento.style.border = "none"
        descuento.style.outline = "1px solid gray"
        errores.descuento = "El campo del descuento no debe quedar vacio"
    }
    else if(expresiones.descuento.test(descuento.value) && descuento.value <=100)
    {
        descuento.style.border = "none"
        descuento.style.outline = "2px solid green"
        errores.descuento = "";
    }
    else
    {
        descuento.style.border = "none"
        descuento.style.outline = "2px solid red"
        errores.descuento = "El campo del descuento debe ser un numero entre 1 y 100"
    }
}
validarCuotas = function(e)
{
    let cuotas = document.querySelector(".cuotas")
    if(cuotas.value == "")
    {
        cuotas.style.border = "none"
        cuotas.style.outline = "1px solid gray"
        errores.cuotas = "El campo de cuotas no debe quedar vacio"
    }
    else if(expresiones.cuotas.test(cuotas.value) && cuotas.value <=12)
    {
        cuotas.style.border = "none"
        cuotas.style.outline = "2px solid green"
        errores.cuotas = ""
    }
    else
    {
        cuotas.style.border = "none"
        cuotas.style.outline = "2px solid red"
        errores.cuotas = "El campo de cuotas debe ser entre 1 y 12 cuotas"
    }
}



//Validaciones de Inputs
const validarInputs = (e) => {
    switch(e.target.name){
        case "marcaProducto":
            console.log("marca Producto");
            validarMarca(e)
            break;
        case "modeloProducto":
            var error = document.querySelector("#errorModelo")
            console.log("Modelo Producto");
            validarModelo(e);
            error.innerHTML = errores.modelo
            break;
        case "imagen":
            var error = document.querySelector("#errorImagen")
            console.log("Imagen");
            validarImagen(e);
            error.innerHTML = errores.imagen
            break
            /*
        case "rodadosProducto":
            var error = document.querySelector("#errorRodado")
            console.log("Rodado Prudctos");
            validarRodados(e);
            error.innerHTML = errores.rodado
            break
        case "coloresProducto":
            var error = document.querySelector("#errorColor")
            console.log("Colores Producto");
            validarColores(e);
            error.innerHTML = errores.color
            break
            */
        case "stockProducto":
            var error = document.querySelector("#errorStock")
            console.log("stock Productos");
            validarStock(e)
            error.innerHTML = errores.stock
            break
        case "precioProducto":
            var error = document.querySelector("#errorPrecio")
            console.log("Precio");
            validarPrecio(e)
            error.innerHTML = errores.precio
            break
        case "descuentoProducto":
            var error = document.querySelector("#errorDescuento")
            console.log("Descuento");
            validarDescuento(e);
            error.innerHTML = errores.descuento
            break
        case "cuotasProducto":
            var error = document.querySelector("#errorCuotas")
            console.log("Cuotas");
            validarCuotas(e);
            error.innerHTML = errores.cuotas
            break    
    }
}


//ejecucion de las validacion en casos de blurs o keyups

inputs.forEach((input) => {
    input.addEventListener("blur" , validarInputs);
    input.addEventListener("keyup" , validarInputs);
    input.addEventListener("click" ,validarInputs)

})


textAreas.forEach((textArea) =>{
    textArea.addEventListener("blur" , validatorTextArea);
    textArea.addEventListener("keyup" , validatorTextArea);
    textArea.addEventListener("click" ,validatorTextArea)

})

selectMarca.addEventListener("blur" ,selectValidator)
selectMarca.addEventListener("click" ,selectValidator)






//Acto de validacion pre envio de formulario

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