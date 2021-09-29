function validar_nombreUsuario(){
    alert(document.getElementById("in_usuario").value);
/*  alert(document.querySelector("#in_usuario").value); //Captura por Query usando el ID #in_usuario */
/*  alert(document.querySelector(".data").value); //Captura por Query usando el clase .data */
    var user = "";
    var user = document.getElementById("in_usuario").value
    if(user === ""){
        user += "El Usuario es obligatorio \n";
    }
    alert(user);
    return false;
}


\w{4,9}