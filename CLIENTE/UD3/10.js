function calcularEdad(){
    let nombre=frmDatos.nombre.value;
    nombre=nombre[0].toUpperCase()+nombre.substring(1).toLowerCase();
    let fechaActual=Date.now();
    let fechaNacimiento=new Date(frmDatos.fechaNacimiento.value);
    let diferencia=(fechaActual.valueOf()-fechaNacimiento.valueOf())/(1000*3600*24);
    diferencia=Math.round(diferencia);
    document.getElementById("resultado").innerHTML=nombre+" has vivido "+diferencia+" dias";
}