function validacion() {
  if (formulario.txtTexto.value.length == 0) {
    alert("Tiene que escribir algo en el Texto");
    event.preventDefault();
  }
}
formulario.addEventListener("submit", validacion);
