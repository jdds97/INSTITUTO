let imagenes = document.querySelectorAll("img");
imagenes.forEach(function (imagen) {
  imagen.addEventListener("click", seleccionado);
});
let botonBorrar = document.getElementById("btnBorrar");
botonBorrar.addEventListener("click", borrarImagen);
let botonAplicar = document.getElementById("btnAplicar");
botonAplicar.addEventListener("click", aplicar);
function seleccionado(event) {
  let imagen = event.target;
  imagen.classList.toggle("seleccionado");
}
function borrarImagen() {
  imagenes.forEach((imagen) =>
    imagen.classList.contains("seleccionado") ? imagen.remove() : ""
  );
}
function aplicar() {
  debugger;
  let contenedor1 = document.getElementById("cont1");
  let contenedor2 = document.getElementById("cont2");
  let contenedor3 = document.getElementById("cont3");
  let destino = document.querySelector('input[name="sitio"]:checked').value;
  let posicion = document.querySelector('input[name="lugar"]:checked').value;
  let imagenesArray = Array.from(imagenes);
  let imagenesSeleccionadas = imagenesArray.filter((imagen) =>
    imagen.classList.contains("seleccionado")
  );
  let botonClonar = document.querySelector('input[name="clonar"]').value;

  //Quitarla del contenedor donde esta con replace u otro metodo el nodo a el contenedor
  //donde se elija
  if (botonClonar) {
    imagenesSeleccionadas.forEach((imagen) => {
      let imagenClonada = imagen.cloneNode(true);
    });
  } else {
    imagenesSeleccionadas.forEach((imagen) => {
      let contenedorActual = imagen.parentNode;
      contenedorActual.removeChild(imagen);
    });
  }
}

switch (destino) {
  case "cont1":
    let h3Contenedor1 = contenedor1.querySelector("h3");
    posicion === "first"
      ? h3Contenedor1.after(imagenClonada)
      : contenedor1.append(imagenClonada);
    break;
  case "cont2":
    let h3Contenedor2 = contenedor2.querySelector("h3");
    posicion === "first"
      ? h3Contenedor2.after(imagenClonada)
      : contenedor2.append(imagenClonada);
    break;
  case "cont3":
    let h3Contenedor3 = contenedor3.querySelector("h3");
    posicion === "first"
      ? h3Contenedor3.after(imagenClonada)
      : contenedor3.append(imagenClonada);
    break;
  default:
    alert("No has escogido ninguno " + destino);
    break;
}
