formulario.opciones.addEventListener("change", comprobar);

function comprobar() {
  let opciones = formulario.opciones.value;
  switch (opciones) {
    case "quitarEstilos":
      limpiarEstilos();
      break;
    case "atributoStyle":
      asignarEstilosClases();
      break;
    case "asignandoClases":
      asignarEstilosPaginas();
      break;
    case "estilosPagina":
      asignarEstilosPaginas();
      break;
    default:
      alert("Opción no válida");
  }
}
function asignarAtributosStyle() {
  limpiarEstilos();
  let texto = document.getElementById("texto");
  texto.style.color = "green";
}
function asignarEstilosClases() {
  limpiarEstilos();
  let texto = document.getElementById("texto");
  texto.classList.add("claseEstilo");
}

function asignarEstilosPaginas() {
  limpiarEstilos();
  let texto = document.getElementById("texto");
  texto.setAttribute("href", "ej08.css");
}
function limpiarEstilos() {
  link.setAttribute("href", "");
  texto.classList.remove("estilosClases");
  texto.style.color = "";
}
