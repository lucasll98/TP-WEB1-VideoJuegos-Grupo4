let form = document.querySelector("#form");
let boton = document.querySelector("#boton");
let boton2 = document.querySelector("#botonDos");
form.addEventListener("keyup",function(){
    let desabilitar = false;
    if(form.email.value == ""){
    desabilitar = true;
    }
    if(desabilitar == true){
    boton.disabled = true;
    
    }else{
    boton.disabled = false;
    
    }
});

function validaremail() {
    var regexpmail = /^[0-9a-zA-Z..-]+@[0-9a-zA-Z._.-]+.(com|org|net)+$/;
  
    var email = document.getElementById("email").value;
 
    if(!regexpmail.test(email) || email.length === 0) {
        alert("Error. Direccion de email inválida, introduzca un formato válido de mail (un @ en el medio) y que termine con .com, .org o .net");
        document.getElementById("email").focus();
        return false;
    }
 
    alert("Email correcto");
    

}

function validarCampo(){
    var validacion = document.getElementById("email"); 
    if (validacion.value.trim() === "") {
        alert("El campo de mail no puede estar vacío!");
        return false; 
    }
    return true; 
}

function validacionContrasenia(){

     var validacion = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!%$])[A-Za-z\d#?!%$]{8,12}$/;
     var contrasenia = document.getElementById("contrasenia").value;
    

    if(validacion.test(contrasenia)){
        return true;
    }else{
        alert("Contraseña invalida, debe ser de longitud de al menos 8 y máxima de 12 caracteres, y que contenga al menos una mayúscula, una minúscula, un número, y cualquiera de los siguientes caracteres especiales: # ? ! % $");
        return false;
    }
}

function validarNombre(){
    let validacionNombreYApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]+$/;
    let nombre = document.querySelector("#nombre").value;

    if(validacionNombreYApellido.test(nombre)){
        return true;
    }else{
        alert("Nombre invalido, debe permitir solamente caracteres alfabéticos (acentuados y no acentuados), espacios intermedios, apóstrofe y guión. Cualquier otro carácter es inválido");
        return false;
    }
}

function validarApellido(){
    let validacionNombreYApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]+$/;
    let apellido = document.querySelector("#apellido").value;

    if(validacionNombreYApellido.test(apellido)){
        return true;
    }else{
        alert("Apellido invalido, debe permitir solamente caracteres alfabéticos (acentuados y no acentuados), espacios intermedios, apóstrofe y guión. Cualquier otro carácter es inválido");
        return false;
    }
}

function validarNroDocumento(){
    let validacionNro = /^[0-9]*$/;
    let nro = document.querySelector("#nroDoc").value;

    if(validacionNro.test(nro)){
        return true;
    }else{
        alert("Documento invalido, permite sólo números");
        return false;
    }
}

function validarTelefono(){
    let validacionTelefono = /^[0-9+\-()]*$/;
    let telefono = document.querySelector("#telefono").value;

    if(validacionTelefono.test(telefono)){
        return true;
    }else{
        alert("Telefono invalido. Debe permitir números, guiones, el símbolo de más y paréntesis. Cualquier otro carácter es inválido");
        return false;
    }
}

function validarTipoDoc(){
    let tipo = document.querySelector("#tipoDocumento").value;
    if(tipo != 0){
        return true
    }else{
        alert("Numero De Documento invalido. seleccionable entre los valores DNI | CI | PASAPORTE")
        return false;
    }

}

function validarFecha() {
    const fechaInput = document.getElementById("fechaNacimiento").value;
    const fechaNacimiento = new Date(fechaInput);
    const fechaLimite = new Date();
    fechaLimite.setFullYear(fechaLimite.getFullYear() - 16);
 
    if (fechaNacimiento < fechaLimite) {
        return true;
    }else {
        alert("Fecha invalida, debe tener al menos 16 años");
        return false;
    }
}
