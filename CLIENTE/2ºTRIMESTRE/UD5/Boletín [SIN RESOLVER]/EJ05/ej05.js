function addManejador() {
  botonMarcar.addEventListener("click", marcarVerano);
}

function deleteManejador() {
  botonMarcar.removeEventListener("click", marcarVerano);
}

function marcarVerano() {
  verano.checked = !verano.checked;
}
