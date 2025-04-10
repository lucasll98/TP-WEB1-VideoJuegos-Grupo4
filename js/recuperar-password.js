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
 
function validar_email() {
    var regexpmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.(com|org|net)+$/;
 
    var email = document.getElementById("email").value;
 
    if(!regexpmail.test(email) || email.length === 0) {
        alert("Introduzca una dirección de email válida");
        document.getElementById("email").focus();
        return false;
    }
   
    document.form.submit();
}