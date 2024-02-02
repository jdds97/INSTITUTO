function agregarProvincia() {
  debugger;
  let codigo = frmEntrada.txtCodigo.value.trim();
  let provincia = frmEntrada.txtProvincia.value.trim();

  if (!existeProvincia(codigo)) {
    let opcion = '<option value="' + codigo + '" >' + provincia + "</option>";
    frmEntrada.lstProvincias.innerHTML += opcion;
  }
}
function existeProvincia(codigo) {
  let encontrado = false;
  for (let opcion of frmEntrada.lstProvincias) {
    if (opcion.value == codigo) {
      encontrado = true;
    }
  }
  return encontrado;
}

// function pasarDerecha() {
/*Al usar frmEntrada.lstProvincias.selectedOptions, estamos accediendo a la colección de opciones seleccionadas en la lista (<select>) de lstProvincias.
  Esta colección representa los elementos (<option>) que actualmente están marcados o seleccionados. Sin embargo, al usar un for...of con esa colección,
   solo se itera sobre las opciones seleccionadas en ese momento, y si seleccionamos múltiples opciones, el bucle solo recorrerá una opción a la vez. */
/*Convertimos la colección HTMLCollection de opciones seleccionadas en un array utilizando Array.from()*/
// const opcionesSeleccionadas = Array.from(
//   frmEntrada.lstProvincias.selectedOptions
// );
// La función Array.from() toma una estructura iterable (como un HTMLCollection) y la convierte en un array de JavaScript. Esto nos permite trabajar con un array estándar y aplicar operaciones como el bucle for...of.
//   for (let opcion of opcionesSeleccionadas) {
//     frmEntrada.lstDestino.appendChild(opcion);
//   }
// }
/*Alternativa una linea convirtiendo en array la coleccion HTML resultante*/
function pasarDerecha() {
  Array.from(frmEntrada.lstProvincias.selectedOptions).map((option) =>
    frmEntrada.lstDestino.appendChild(option)
  );
}
function pasarIzquierda() {
  Array.from(frmEntrada.lstDestino.selectedOptions).map((option) =>
    frmEntrada.lstProvincias.appendChild(option)
  );
}

// function pasarIzquierda() {
//   const opcionesSeleccionadas = Array.from(
//     frmEntrada.lstDestino.selectedOptions
//   );
//   for (let opcion of opcionesSeleccionadas) {
//     frmEntrada.lstProvincias.appendChild(opcion);
//   }
// }
