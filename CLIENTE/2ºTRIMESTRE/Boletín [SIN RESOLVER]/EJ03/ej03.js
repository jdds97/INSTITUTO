function mostrarDatos() {
  let texto = "";
  for (let opcion of formulario.provincias) {
    if (opcion.selected) {
      texto = opcion.value + " Provincia " + opcion.text;
      alert(texto);
    }
  }
}
formulario.boton.addEventListener("click", mostrarDatos);
