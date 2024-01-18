function campos_vacios() {
  let inputs = Array.from(document.querySelectorAll("input"));
  salida.innerHTML = "<ul>Lista de campos vacíos";
  for (let input of inputs) {
    if (input.value === "") {
      salida.innerHTML += "<li>" + input.name + "</li>";
    }
  }
  salida.innerHTML += "</ul>";
  salida.innerHTML += "<ul>Lista de errores";
  for (let input of inputs) {
    if (input. === "") {
      salida.innerHTML += "<li>" + input.name + "</li>";
    }
  }
}

formulario.addEventListener("submit", campos_vacios);
