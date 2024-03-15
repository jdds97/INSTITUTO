/**
 * Envia una solicitud a la API con la entrada y los datos correspondientes a la solicitud.
 * @param {string} entrada La entrada de la url.
 * @param {Object} datos Los datos a enviar a la API.
 * @param {string} respuesta La respuesta de la solicitud.
 */
document.addEventListener("submit", (event) => enviarSolicitud(event));
function enviarSolicitud(event) {
  event.preventDefault();

  let url = `https://ejercicio1-c9ce3-default-rtdb.europe-west1.firebasedatabase.app/vuelos.json`;

  //proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/vuelos/-Nru0w5uBivqKWAp2tIZ.json

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let datosFiltrados = Object.keys(data).find(
        (key) =>
          data[key].aerolinea === event.target.aerolinea.value &&
          data[key].destino === event.target.destino.value
      );

      if (!datosFiltrados) {
        console.log(
          "No se encontró un vuelo que coincida con los criterios de búsqueda."
        );
      }

      if (event.target.dataset.respuesta !== "POST") {
        url = `https://ejercicio1-c9ce3-default-rtdb.europe-west1.firebasedatabase.app/vuelos/${datosFiltrados}.json`;
      }
      if (event.target.dataset.respuesta === "DELETE") {
        fetch(url, {
          method: "DELETE",
        })
          .then((response) => console.log("Objeto eliminado"))
          .catch((error) => console.log(error));
      } else {
        // Para POST y PATCH, creamos 'datos' aquí
        let datos = {
          aerolinea: event.target.aerolinea.value,
          destino: event.target.destino.value,
          duracion: event.target.duracion.value,
          origen: event.target.origen.value,
        };
        console.log(datosFiltrados);
        console.log(datos);
        console.log(url);
        console.log(event.target.dataset.respuesta);
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
