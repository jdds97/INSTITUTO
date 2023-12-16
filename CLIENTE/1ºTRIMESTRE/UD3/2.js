function comprobar(){
    let contraseña= frmContra.contraseña.value;
    if(contraseña.contains([a-z]&&[A-Z]&&[0-9])){
        document.getElementById("salida").innerHTML = "Contraseña correcta";
}
}