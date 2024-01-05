function cancelarCopiar() {
  alert("No se puede copiar");
  event.defaultPrevented();
}
txtEntrada.addEventListener("copy", cancelarCopiar);
