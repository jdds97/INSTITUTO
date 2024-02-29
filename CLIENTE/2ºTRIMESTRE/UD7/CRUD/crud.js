/**
 * Envia una solicitud a la API con la entrada y los datos correspondientes a la solicitud.
 * @param {string} entrada La entrada de la url.
 * @param {Object} datos Los datos a enviar a la API.
 * @param {string} respuesta La respuesta de la solicitud.
 */
document.addEventListener("submit", (event) => enviarSolicitud(event));

function enviarSolicitud(event) {
  event.preventDefault();
  let url = `https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/partidos.json`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let datosFiltrados = Object.keys(data).find(
        (key) => data[key].equipoLocal === event.target.equipoLocal.value
      );

      if (event.target.dataset.respuesta === "DELETE") {
        url = `https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/partidos/${datosFiltrados}.json`;
        fetch(url, {
          method: "DELETE",
        })
          .then((response) => console.log("Objeto eliminado"))
          .catch((error) => console.log(error));
      } else {
        // Para POST y PATCH, creamos 'datos' aquí
        let datos = {
          equipoLocal: event.target.equipoLocal.value,
          equipoVisitante: event.target.equipoVisitante.value,
          golesLocal: event.target.golesLocal.value,
          golesVisitante: event.target.golesVisitante.value,
        };

        fetch(url, {
          method: event.target.dataset.respuesta, // Esto será 'POST' o 'PATCH'
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(datos),
        })
          .then((response) => console.log("Operación realizada con éxito"))
          .catch((error) => console.log(error));
      }
    })
    .catch((error) => console.log(error));
}
