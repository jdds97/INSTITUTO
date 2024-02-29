/**
 * Envia una solicitud a la API con la entrada y los datos correspondientes a la solicitud.
 * @param {string} entrada La entrada de la url.
 * @param {Object} datos Los datos a enviar a la API.
 * @param {string} respuesta La respuesta de la solicitud.
 */
document.addEventListener("submit", (event) => enviarSolicitud(event));

function enviarSolicitud(event) {
  // Enviamos la solicitud a la API con la entrada y los datos correspondientes a la solicitud
  debugger;
  let datosFiltrados = "";
  let url = `https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/partidos.json`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(Object.keys(data));
      let indice=i;
      const partido = Object.values(data).find(
        (partido, i) => partido.equipoLocal === event.target.equipoLocal.value
        indice=i;
      );
      console.log(partido);
      datosFiltrados = partido ? Object.keys(data)[0] : "";
    });
  if (event.target.dataset.respuesta !== "DELETE") {
    datos = {
      equipoLocal: event.target.equipoLocal.value,
      equipoVisitante: event.target.equipoVisitante.value,
      golesLocal: event.target.golesLocal.value,
      golesVisitante: event.target.golesVisitante.value,
    };
  } else {
    datos = {
      [datosFiltrados]: "",
    };
  }
  url = `https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/partidos/${datosFiltrados}.json`;
  fetch(url, {
    method: event.target.dataset.respuesta,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(datos),
  }).catch((error) => console.log(error));
}
