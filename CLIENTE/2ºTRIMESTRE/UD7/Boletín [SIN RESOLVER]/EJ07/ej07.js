let boton = document.getElementById("recuperarDatos");
boton.addEventListener("click", atacarApi);

function atacarApi() {
  let url =
    "https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/alumnos.json";
  fetch(url)
    .then((response) => response.text())
    .then(mostrarAlumnos);
}
function mostrarAlumnos(alumnos) {
  let alumnosJSON = Object.values(alumnos);
  let salida = document.getElementById("salida");
  alumnosJSON.forEach((alumno) => {
    salida.innerHTML += alumno;
  });
}
