document.addEventListener("DOMContentLoaded", atacarApiGET);

function atacarApiGET() {
  let url = "./partidos.json";
  fetch(url)
    .then((response) => response.json())
    .then(mostrarCoches);
}

function mostrarCoches(data) {
  console.log(Object.values(data.partidos));
  let tabla = document.createElement("table");
  let partidos = Object.values(data.partidos);
  let th = tabla.insertRow();
  let local = th.insertCell();
  let marcador = th.insertCell();
  let visitante = th.insertCell();

  [local, marcador, visitante].forEach((celda) => {
    celda.style.border = "none";
    celda.style.borderBottom = "1px solid black";
    celda.style.fontWeight = "bolder"; // Añade un borde solo en la parte inferior
  });
  local.textContent = "Local";
  marcador.textContent = "Marcador";
  visitante.textContent = "Visitante";

  partidos.forEach((partido) => {
    let fila = tabla.insertRow();
    let local = fila.insertCell();
    let marcador = fila.insertCell();
    let visitante = fila.insertCell();

    local.textContent = partido.equipoLocal;
    marcador.textContent = partido.golesLocal + " - " + partido.golesVisitante;
    visitante.textContent = partido.equipoVisitante;
  });
  let titulo = document.createElement("h4");
  titulo.innerHTML = "Resultado de los partidos";
  let salida = document.getElementById("salida");
  salida.append(titulo);
  salida.append(tabla);
}
