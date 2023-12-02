"use strict";
let oAlbergue = new Albergue();
// Variables globales

datosIniciales();
function datosIniciales() {
  oAlbergue.altaMascota(new Mascota("Perro", "Firulais"));
  oAlbergue.altaMascota(new Mascota("Gato", "Michi"));
  oAlbergue.altaColaborador(new Colaborador("Juan", "Pérez"));
  oAlbergue.altaColaborador(new Colaborador("María", "González"));
}
function gestionFormularios(sFormularioVisible) {
  ocultarTodosLosFormularios();

  // Hacemos visible el formulario que llega como parámetro
  switch (sFormularioVisible) {
    case "frmAltaMascota":
      frmAltaMascota.style.display = "block";
      break;
    case "frmAltaColaborador":
      frmAltaColaborador.style.display = "block";
      break;
    case "frmMovimiento":
      frmMovimiento.style.display = "block";
      break;
    case "frmListadoCaducos":
      frmListadoCaducos.style.display = "block";
      break;
    case "TotalArboles":
      alert("Hay " + oVivero.totalArbolesVenta() + " árboles a la venta");
      break;
  }
}
function ocultarTodosLosFormularios() {
  let oFormularios = document.querySelectorAll("form");

  for (let i = 0; i < oFormularios.length; i++) {
    oFormularios[i].style.display = "none";
  }
}

function aceptarAltaMascota() {
  //1.Recogemos los datos del formulario y los parseamos y le hacemos el trim
  let sIdMascota = Number(frmAltaMascota.txtIdMascota.value.trim());
  let sPeso = frmAltaMascota.txtPeso.value.trim();
  let sAltura = frmAltaMascota.txtAltura.value.trim();
  let sRaza = frmAltaMascota.txtRaza.value.trim();
  //2.Declaramos el albergue
  //3.Validamos que todos los campos estén rellenos
  if (isNaN(sIdMascota) || isNaN(sPeso) || isNaN(sAltura) || isNaN(sRaza)) {
    alert("Faltan datos por rellenar");
  }
  //4.Comprobamos valor del tipo radio de mascota para añadir uno y otro
  if (frmAltaMascota.rbtTipoMascota.value == "gato") {
    oMascota = new Gato(sIdMascota, sPeso, sRaza);
  } else {
    oMascota = new Perro(sIdMascota, sPeso, sAltura);
  }
  //5.Añadimos la mascota
  if (oAlbergue.altaMascota(oMascota) == "Correcto") {
    alert("Alta mascota OK");
    frmAltaMascota.reset(); // 6.Vaciamos los campos del formulario
    frmAltaMascota.style.display = "none";
  } else {
    alert("La mascota ya existe");
  }
}
function aceptarAltaColaborador() {
  let sDNI = frmAltaColaborador.txtDNI.value.trim();
  let sNombre = frmAltaColaborador.txtNombre.value.trim();
  let sApellidos = frmAltaColaborador.txtApellidos.value.trim();
  if (isNaN(DNI) || isNaN(sNombre) || isNaN(sApellidos)) {
    alert("Faltan datos por rellenar");
  } else {
    let oColaborador = new Colaborador(sDNI, sNombre, sApellidos);
  }
  if (oAlbergue.altaColaborador(oColaborador) == "Correcto") {
    alert("Alta colaborador OK");
    frmAltaColaborador.reset();
    frmAltaColaborador.style.display = "none";
  } else {
    alert("El colaborador ya existe");
  }
}
function aceptarMovimientoMascota() {
  let sTipoMovimiento =
    frmMovimiento.rbtTipoMovimiento.value == "E" ? "E" : "R";
  let sIdMascota = frmMovimiento.txtIdMascota.value.trim();
  let sDNI = frmMovimiento.txtDNI.value.trim();
  let dtFecha = Date.now();
  let oMovimientoMascota;
  if (isNaN(sIdMascota) || isNaN(sDNI)) {
    alert("Faltan datos por rellenar");
  } else {
    oMovimientoMascota = new MovimientoMascota(
      sTipoMovimiento,
      sIdMascota,
      sDNI,
      dtFecha
    );
  }
  if (oAlbergue.movimientoMascota(oMovimientoMascota) == "Correcto") {
    alert("Alta movimiento OK");
    frmAltaColaborador.reset();
    frmAltaColaborador.style.display = "none";
  } else {
    alert("Mascota no registrada previamente”");
  }
}
