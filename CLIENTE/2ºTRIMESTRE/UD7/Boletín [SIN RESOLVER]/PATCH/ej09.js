let formulario = document.getElementsByName("frmActualizaRegistro")[0];
formulario.addEventListener("submit", (event) => actualizaRegistro(event));
function actualizaRegistro(event) {
  event.preventDefault();
  let idFirebase = event.target.idFirebase.value;
  let url = `https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/alumnos/${idFirebase}.json`;

  let datos = {
    apellidos: event.target.apellidos.value,
  };
  fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(datos),
  }).catch((error) => console.log(error));
}
let boton = document.getElementById("recuperarDatos");
boton.addEventListener("click", atacarApiGET);
function atacarApiGET() {
  let url =
    "https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/alumnos.json";
  fetch(url)
    .then((response) => response.json())
    .then(mostrarAlumnos);
}
function mostrarAlumnos(alumnos) {
  let tabla = document.createElement("table");
  let alumnosJSON = Object.values(alumnos);
  let th = tabla.insertRow();
  let idTh = th.insertCell();
  let apellidosTh = th.insertCell();
  let nombreTh = th.insertCell();
  let edadTh = th.insertCell();
  idTh.textContent = "Id";
  apellidosTh.textContent = "Apellidos";
  nombreTh.textContent = "Nombre";
  edadTh.textContent = "Edad";
  alumnosJSON.textContent = alumnosJSON.forEach((alumno) => {
    let fila = tabla.insertRow();
    let id = fila.insertCell();
    let apellidos = fila.insertCell();
    let nombre = fila.insertCell();
    let edad = fila.insertCell();

    id.textContent = alumno.id;
    apellidos.textContent = alumno.apellidos;
    nombre.textContent = alumno.nombre;
    edad.textContent = alumno.edad;
  });
  console.log(tabla);
  let salida = document.getElementById("salida");
  salida.append(tabla);
}
