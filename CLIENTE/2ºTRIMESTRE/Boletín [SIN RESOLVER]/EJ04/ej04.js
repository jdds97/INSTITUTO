function agregarProvincia() {
  let codigo = frmEntrada.txtCodigo.value.trim();
  let provincia = frmEntrada.txtProvincia.value.trim();
  let opcion = '<option value="' + codigo + '" >' + provincia + "</option>";

  if (!existeProvincia(codigo)) {
    alert("Ya existe esa provincia");
  } else {
    frmEntrada.lstProvincias.append(opcion);
  }
}
function existeProvincia(codigo) {
  let encontrado = false;
  for (let opcion of frmEntrada.lstProvincias) {
    if (opcion.value == codigo) {
      encontrado = true;
    }
  }
}

