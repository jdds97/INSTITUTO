function almacenar(){
    let sueldo=frmOperario.sueldo.value;
    let nombre=frmOperario.nombre.value;
    document.getElementById("salida1").innerHTML=nombre+" "+" tiene un sueldo de\n "+sueldo+" euros";
}