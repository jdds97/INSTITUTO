let listas = document.querySelectorAll("ul>li>ul>li");

listas.forEach(function (lista) {
  lista.addEventListener("click", moverAlumno);
});
function moverAlumno(event) {
  debugger;
  let elemento = event.target;
  let opcionSeleccionada = document.querySelector("input:checked").value;
  let aprobados = document.getElementById("aprobados");
  let recuperacion = document.getElementById("recuperacion");
  let repetir = document.getElementById("repetir");
  switch (opcionSeleccionada) {
    case "aprob":
      aprobados.append(elemento);
      break;
    case "recup":
      recuperacion.append(elemento);
      break;
    case "repet":
      repetir.append(elemento);
      break;
    default:
      alert("No has escogido ninguno " + opcionSeleccionada);
      break;
  }
}
