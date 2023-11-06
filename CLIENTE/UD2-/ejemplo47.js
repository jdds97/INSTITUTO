function horas() {
    var fecha = new Date()
    var hora = fecha.getHours()
    var minuto = fecha.getMinutes()
    var segundo = fecha.getSeconds()
    var horaCompleta = hora + ":" + minuto + ":" + segundo
    document.getElementById("reloj").innerHTML = ho
    setTimeout("horas()", 1000)
}
function calcularHora(){
hora1=hora1*60;
hora2=hora2=60;
minutosHora1=hora1%60;
minutosHora2=hora2%60;
}
function diferenciaHoras() {
    const h1 = Number(frmHoras.h1.value);
    const m1 = Number(frmHoras.m1.value);
    const h2 = Number(frmHoras.h2.value);
    const m2 = Number(frmHoras.m2.value);
    let totalDiferenciaMinutos = h1 * 60 + m1 - (h2 * 60 + m2);
    let salida = "";
    let difMin, difHor;
    if (totalDiferenciaMinutos < 0) {
      salida = "H1 es anterior a H2. La diferencia de tiempo es ";
      totalDiferenciaMinutos = totalDiferenciaMinutos * -1; //Pasarla a positivo
    } else if (totalDiferenciaMinutos > 0) {
      salida = "H1 es posterior a H2. La diferencia de tiempo es ";
    }
    if (totalDiferenciaMinutos == 0) {
      salida = "Son la misma hora";
    } else {
      difHor = Math.floor(totalDiferenciaMinutos / 60); //Parte entera
      difMin = totalDiferenciaMinutos % 60;
      salida += String(difHor) + " horas y " + String(difMin) + " minutos";
    }
    document.getElementById("salida").innerHTML = salida;
}