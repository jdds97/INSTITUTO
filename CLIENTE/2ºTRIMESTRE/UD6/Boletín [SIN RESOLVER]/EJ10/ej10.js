document.getElementById("boton").addEventListener("click", agregarTarea);

function agregarTarea() {
  let prioridad = document.getElementsByName("prioridad")[0].value;
  let tarea = document.getElementsByName("tarea")[0].value.trim();
  let tbody = document.getElementById("tbody");
  let id = tbody.getElementsByTagName("tr").length + 1; // Obtiene el número de la tarea basado en el número de filas existentes
  let fila = `<tr><td>${id}</td><td>${tarea}</td><td>${prioridad}</td><td><i class="fa fa-trash" onclick="eliminarTarea(event)"></i></td></tr>`;
  tbody.innerHTML += fila;
  ordenarTareas();
}

function eliminarTarea(event) {
  let fila = event.target.parentNode.parentNode; // Obtiene la fila que contiene el icono de la papelera
  let tbody = document.getElementById("tbody");
  tbody.removeChild(fila);
  ordenarTareas();
}

function ordenarTareas() {
  let tbody = document.getElementById("tbody");
  let filas = Array.from(tbody.getElementsByTagName("tr")); // Convierte la colección de filas en un array
  filas.sort((a, b) =>
    b.cells[2].innerText.localeCompare(a.cells[2].innerText)
  ); // Ordena las filas por prioridad
  tbody.innerHTML = ""; // Limpia el cuerpo de la tabla
  for (let i = 0; i < filas.length; i++) {
    let fila = filas[i];
    tbody.append(fila);
    fila.cells[0].innerText = i + 1; // Usa el índice del bucle en lugar de fila.rowIndex
  }
}
