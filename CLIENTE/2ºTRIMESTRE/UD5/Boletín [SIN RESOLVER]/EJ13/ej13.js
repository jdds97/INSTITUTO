function validacionTipoTexto() {
  const inputs = formulario.querySelectorAll("input[type='text']");
  for (let input of inputs) {
    if (input.value.trim() === "") {
      alert("Tiene que escribir algo en el Texto");
      event.preventDefault();
    }
  }
}
formulario.addEventListener("submit", validacionTipoTexto);
