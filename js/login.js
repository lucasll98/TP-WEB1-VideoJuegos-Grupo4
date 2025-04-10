let email = document.getElementById("email");
let contra = document.getElementById("contraseña");
let boton = document.getElementById("boton");
let formulario = document.getElementById("formulario");


formulario.addEventListener("keyup",function(){
	let desabilitar = false;
	if(formulario.email.value == ""){
	desabilitar = true;
	}
	if (formulario.contraseña.value == ""){
	desabilitar = true;
    }
	if(desabilitar == true){
	boton.disabled = true;
	}else{
	boton.disabled = false;
	}
});


function validar_inicio_sesion() {
    var regexpmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.(com|org|net)+$/;
    var regexpcontraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!%$])[A-Za-z\d#?!%$]{8,12}$/;
 
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;
 
    if(!regexpmail.test(email) || email.length === 0) {
        alert("Error. Direccion de email inválida, introduzca un formato válido de mail (un @ en el medio) y que termine con .com, .org o .net");
        document.getElementById("email").focus();
        return false;
    }
 
    if(!regexpcontraseña.test(contraseña)) {
        alert("Error. Contraseña invalida, introduzca una contraseña de al menos 8 y máxima de 12 caracteres, y que contenga al menos una mayúscula, una minúscula, un número, y cualquiera de los siguientes caracteres especiales: # ? ! % $ ")
        document.getElementById("contraseña").focus();
        return false;
    }
 
    alert("Formulario enviado con éxito!");
    document.form.submit();
    
}