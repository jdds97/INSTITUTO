let min,seg,dec=0;
let funcionando = false;
let ejecucionPeriodica;

function playPause() {
  if (funcionando) {
    clearInterval(ejecucionPeriodica);
    funcionando = false;
  } else {
    ejecucionPeriodica = setInterval(actualizarCrono, 100);
    funcionando = true;
  }
  imprimirCrono();

}
function actualizarCrono() {
  if (dec <9) {
    dec++;
  }else if(dec==9 && seg<59){
        dec=0;
        seg++;
  }else 
    if (seg == 59) {
      segundos = 0;
      minutos++;
    }
    imprimirCrono();
  }
function imprimirCrono() {
    document.getElementById("minutos").innerHTML = minutos + " :";
    document.getElementById("segundos").innerHTML = segundos + ":";
    document.getElementById("milisegundos").innerHTML = milisegundos;
}
function reset() {
  clearTimeout(cronometro);
}
