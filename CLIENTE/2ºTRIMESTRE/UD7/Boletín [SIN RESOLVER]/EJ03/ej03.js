let formulario = document.getElementsByName("formulario")[0];
let salida = document.getElementById("capa");
let boton = document.getElementById("addTexto");

boton.addEventListener("click", procesarFichero);
function procesarFichero(event) {
  event.preventDefault();
  let texto = formulario.nombreFichero.value.trim(); // Obtiene el valor una vez

  salida.innerHTML += texto; // Usa el valor directamente
  fetch(texto)
    .then((response) => response.text())
    .then(añadirTextoCapa)
    .catch(console.log);
}
const añadirTextoCapa = (texto) => (salida.innerHTML += texto);
