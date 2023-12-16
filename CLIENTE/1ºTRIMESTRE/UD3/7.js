function desglose(){
    let desglose="Jesus:de dios:692638767:jesusdediossanchez@gmail.com:41702";
    desglose=desglose.split(":");
    let nombre=desglose[0];
    let apellidos=desglose[1];
    let telefono=desglose[2];
    let email=desglose[3];
    let codigopostal=desglose[4];
    let servidor=""
    servidor=email.substring(email.indexOf("@")+1,email.indexOf("."));
    document.getElementById("salida").innerHTML="<br>Código Postal: "+codigopostal+"<br>Nombre: "+nombre+"<br>Apellidos: "+apellidos+"<br>Teléfono: "+telefono+"<br>Email: "+email+"<br>Servidor: "+servidor;
}