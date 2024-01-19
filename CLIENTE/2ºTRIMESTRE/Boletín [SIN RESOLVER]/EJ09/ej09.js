function cancelarCopiar() {
  alert("No se puede copiar");
  event.preventDefault();
}
txtEntrada.addEventListener("copy", cancelarCopiar);
