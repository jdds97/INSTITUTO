function botonPulsado() {
  salida.innerHTML = "Has pulsado el boton " + event.button;
}

addEventListener("mousedown", botonPulsado);
