function ponerAmarillo(event) {
  cuadrado.classList.add("amarillo");
  salida.innerHTML =
    "Objeto en el que se produce: " +
    event.target +
    "</br>" +
    "Tipo de evento: " +
    event.type +
    "</br>" +
    "Coordenadas X :" +
    event.clientX +
    "</br>" +
    "Coordenadas Y :" +
    event.clientY;
}
cuadrado.addEventListener("mouseover", ponerAmarillo);
function quitarAmarillo() {
  cuadrado.classList.remove("amarillo");
  salida.innerHTML = "";
}
cuadrado.addEventListener("mouseout", quitarAmarillo);
function teclaPulsada() {
  salida.innerHTML = "Tecla pulsada " + event.key;
}
txtEntrada.addEventListener("keypress", teclaPulsada);
