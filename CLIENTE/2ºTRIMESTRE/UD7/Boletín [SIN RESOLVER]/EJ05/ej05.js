let boton = document.getElementById("addJSON");
boton.addEventListener("click", mostrarInfo);
function mostrarInfo() {
  let url = "https://picsum.photos/list";

  fetch(url)
    .then((response) => response.json())
    .then(pintarInfo);
}
function pintarInfo(imagenes) {
  let ul = document.createElement("ul");
  let salida = document.getElementById("salida");
  imagenes.forEach((imagen) => {
    let li = document.createElement("li");
    let urlImagen = document.createElement("a");
    urlImagen.setAttribute("href", imagen.post_url);
    urlImagen.innerHTML = imagen.post_url;
    let autorImagen = imagen.author;
    li.append(urlImagen);
    li.innerHTML += autorImagen;
    ul.append(li);
  });
  salida.append(ul);
}
