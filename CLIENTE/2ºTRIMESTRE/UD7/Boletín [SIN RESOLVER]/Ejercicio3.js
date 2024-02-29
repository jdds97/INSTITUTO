document.addEventListener("DOMContentLoaded", atacarApiGET);

function atacarApiGET() {
  let url =
    "https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/coches.json";
  fetch(url)
    .then((response) => response.json())
    .then(mostrarCoches);
}

function mostrarCoches(data) {
  let tabla = document.createElement("table");
  let coches = Object.values(data);
  let th = tabla.insertRow();
  let marca = th.insertCell();
  let modelo = th.insertCell();
  let matricula = th.insertCell();
  let kms = th.insertCell();
  [marca, modelo, matricula, kms].forEach((celda) => {
    celda.style.border = "none";
    celda.style.borderBottom = "1px solid black";
    celda.style.fontWeight = "bolder"; // Añade un borde solo en la parte inferior
  });
  marca.textContent = "Marca";
  modelo.textContent = "Modelo";
  matricula.textContent = "Matrícula";
  kms.textContent = "Kms";
  coches.forEach((coche) => {
    let fila = tabla.insertRow();
    let marca = fila.insertCell();
    let modelo = fila.insertCell();
    let matricula = fila.insertCell();
    let kms = fila.insertCell();

    marca.textContent = coche.marca;
    modelo.textContent = coche.modelo;
    matricula.textContent = coche.matricula;
    kms.textContent = coche.kilometros;
  });
  console.log(tabla);
  let salida = document.getElementById("salida");
  salida.append(tabla);
}
