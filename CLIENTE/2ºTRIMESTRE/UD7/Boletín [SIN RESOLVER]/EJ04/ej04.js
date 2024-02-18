let boton = document.getElementById("addJSON");
boton.addEventListener("click", mostrarInfo);
function mostrarInfo() {
  let formulario = document.getElementsByName("formulario")[0];
  let url = formulario.url.value;
  fetch(url)
    .then((response) => response.text())
    .then((data) => console.log(data));
}
