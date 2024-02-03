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
  let ordenLista = document.getElementById("combo").value;
  switch (opcionSeleccionada) {
    case "aprob":
      ordenLista === "primero"
        ? aprobados.prepend(elemento)
        : aprobados.append(elemento);
      break;
    case "recup":
      ordenLista === "primero"
        ? recuperacion.prepend(elemento)
        : recuperacion.append(elemento);
      break;
    case "repet":
      ordenLista === "primero"
        ? repetir.prepend(elemento)
        : repetir.append(elemento);
      break;
    default:
      alert("No has escogido ninguno " + opcionSeleccionada);
      break;
  }
}
let btnTablas = document.getElementById("btnCrearTablas");
btnTablas.addEventListener("click", crearTablas);
function crearTablas() {
  let recuadroTablas = document.getElementById("tablas");
  //Creacion de tablas
  let tablaAprobados = document.createElement("table");
  let tablaRecuperacion = document.createElement("table");
  let tablaRepetidores = document.createElement("table");
  //Captions NO LO PIDE
  let captionAprobados = document.createElement("caption");
  captionAprobados.innerHTML = "<b>Aprobados</b>";
  tablaAprobados.prepend(captionAprobados);
  let captionRecuperacion = document.createElement("caption");
  captionRecuperacion.innerHTML = "<b>Recuperadores</b>";
  tablaRecuperacion.prepend(captionRecuperacion);
  let captionRepetidores = document.createElement("caption");
  captionRepetidores.innerHTML = "<b>Repetidores</b>";
  tablaRepetidores.prepend(captionRepetidores);
  //Estilos
  tablaAprobados.style.border = "1px solid green";
  tablaRecuperacion.style.border = "1px solid yellow";
  tablaRepetidores.style.border = "1px solid red";
  //Recogida de elementos alumnos
  let aprobados = document.getElementById("aprobados").querySelectorAll("li");
  let recuperadores = document
    .getElementById("recuperacion")
    .querySelectorAll("li");
  let repetidores = document.getElementById("repetir").querySelectorAll("li");
  //Insercion de alumnos por fila
  aprobados.forEach(function (aprobado) {
    let row = tablaAprobados.insertRow();
    row.innerHTML = aprobado.innerText;
  });

  recuperadores.forEach(function (recuperador) {
    let row = tablaRecuperacion.insertRow();
    row.innerHTML = recuperador.innerText;
  });

  repetidores.forEach(function (repetidor) {
    let row = tablaRepetidores.insertRow();
    row.innerHTML = repetidor.innerText;
  });
  //Insercion de nodos en el div vacio de las tablas
  recuadroTablas.append(tablaAprobados);
  recuadroTablas.append(tablaRecuperacion);
  recuadroTablas.append(tablaRepetidores);
}
let botonBorrar = document.getElementById("btnBorrarTablas");
botonBorrar.addEventListener("click", borrarTablas);
function borrarTablas() {
  let tablas = document.getElementById("tablas").querySelectorAll("table");
  tablas.forEach((tabla) => (tabla.innerHTML = ""));
}
