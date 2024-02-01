document.getElementById("boton").addEventListener("click", agregarTarea);

function agregarTarea() {
  debugger;
  let prioridad = document.getElementsByName("prioridad")[0].value;
  let tarea = document.getElementsByName("tarea")[0].value.trim();
  let tbody = document.getElementById("tbody");
  let id = 1;
  tbody.innerHTML += `<tr><td>${id}</td><td>${tarea}</td><td>${prioridad}</td><td><i class="fa fa-trash" onclick="eliminarTarea(${id},${tarea},${prioridad})"></i></td></tr>`;
  id++;
}
function eliminarTarea(id, tarea, prioridad) {
  let filas = document.getElementById("tbody").rows;
  for (let fila of rows){
    if(id)
  }
}
