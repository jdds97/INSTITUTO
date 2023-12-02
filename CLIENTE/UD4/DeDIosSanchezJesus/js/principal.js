datosIniciales();
let oAgencia = new Agencia();

function datosIniciales() {
  /*Crear 5 coches y 5 motos nuevos con altaVehiculo*/
}

// Gestión de formularios
function gestionFormularios(sFormularioVisible) {
  ocultarTodosLosFormularios();

  // Hacemos visible el formulario que llega como parámetro
  switch (sFormularioVisible) {
    case "frmAltaCatalogo":
      frmAltaCatalogo.style.display = "block";
      break;
    case "frmEntradaStock":
      frmEntradaStock.style.display = "block";
      break;
    case "frmSalidaStock":
      frmSalidaStock.style.display = "block";
      break;
  }
}

function ocultarTodosLosFormularios() {
  let oFormularios = document.querySelectorAll("form");

  for (let i = 0; i < oFormularios.length; i++) {
    oFormularios[i].style.display = "none";
  }
}
function aceptarAltaCliente() {
  let sDNICliente = frmAltaCliente.txtDNICliente.value.trim();
  let sNombre = frmAltaCliente.txtNombre.value.trim();
  let sApellidos = frmAltaCliente.txtApellidos.value.trim();
  if (
    sDNICliente.length == 0 ||
    sNombre.length == 0 ||
    sApellidos.length == 0
  ) {
    alert("No se han rellenado todos los campos del formulario");
  } else {
    let oCliente = new Cliente(sDNICliente, sNombre, sApellidos);
    alert(
      oAgencia.altaCliente(oCliente)
        ? "Cliente ya registrado anteriormente"
        : "Cliente registrado correctamente"
    );
    limpiarFormulario("frmAltaCliente");
  }
}
function aceptarAltaVehiculo() {
  let sMatricula = frmAltaVehiculo.txtMatricula.value.trim();
  let sMarca = frmAltaVehiculo.txtMarca.value.trim();
  let sModelo = frmAltaVehiculo.txtModelo.value.trim();
  let bCiclomotor = frmAltaVehiculo.rbtTipoMoto.value;
  let opCombustible = frmAltaVehiculo.selCombustible.value;
  let nPlazas = frmAltaVehiculo.selPlazas.value;
  if (sMatricula.length == 0 || sMarca.length == 0 || sModelo.length == 0) {
    alert("No se han rellenado todos los campos del formulario");
  } else {
    let oVehiculo =
      frmAltaVehiculo.rbtTipoVehiculo.value == "Moto"
        ? new Moto(sMatricula, sMarca, sModelo, bCiclomotor)
        : new Coche(sMatricula, sMarca, opCombustible, sModelo, nPlazas);
    alert(
      oAgencia.altaVehiculo(oVehiculo)
        ? "Vehiculo ya registrado"
        : "Vehiculo registrado correctamente"
    );
    limpiarFormulario("frmAltaVehiculo");
  }
}
function aceptarAltaAlquiler() {
  let dtFechaInicio = Date(frmAltaAlquiler.dtpFechaInicio.value.trim());
  let dtFechaFin = Date(frmAltaAlquiler.dtpFechaFin.value.trim());
  let sDNICliente = frmAltaAlquiler.txtDNICliente.value.trim();
  let sMatricula = frmAltaAlquiler.txtMatricula.value.trim();
  let oAlquiler = new Alquiler(dtFechaInicio, dtFechaFin, sDNICliente, sMatricula);
  alert(
    oAgencia.altaAlquiler(oAlquiler)
      ? "Alquiler ya registrado"
      : "Alquiler registrado correctamente"
  );
  limpiarFormulario("frmAltaAlquiler");

  if (validarCampos("frmAltaAlquiler")) {
    alert("Se ha realizado el alquiler");
    limpiarFormulario("frmAltaAlquiler");
  } else {
    alert("No se han rellenado todos los campos del formulario");
  }
}
function aceptarBajaAlquiler() {
  let sDNICliente = frmBajaAlquiler.txtDNICliente.value.trim();
  let sMatricula = frmBajaAlquiler.txtMatricula.value.trim();
  let oAlquiler = new Alquiler(dtFechaInicio, dtFechaFin, sDNICliente, sMatricula);
  let respuesta = oAgencia.bajaAlquiler(idAlquiler);
  alert(respuesta);
  limpiarFormulario("frmBajaAlquiler");
}

function limpiarFormulario(formulario) {
  formulario.reset();
  formulario.style.display = "none";
}
function mostrarListadoClientes() {
  let listadoClientes = oAgencia.listadoClientes();
  let oVentana = open("", "_blank", "");
  oVentana.document.write("<h2>Listado de clientes</h2><br/><ul>");
  oVentana.document.write(listadoClientes);
  oVentana.document.write("</ul>");
  oVentana.document.close();
  oVentana.document.title = "Listado de clientes";
}
function mostrarListadoVehiculos() {
  let listadoVehiculos = oAgencia.listadoVehiculos();
  let oVentana = open("", "_blank", "");
  oVentana.document.write("<h2>Listado de vehiculos</h2><br/><ul>");
  oVentana.document.write(listadoVehiculos);
  oVentana.document.write("</ul>");
  oVentana.document.close();
  oVentana.document.title = "Listado de vehiculos";
}
function mostrarListadoAlquileres() {
  let listadoAlquileres = oAgencia.listadoAlquileres();
  let oVentana = open("", "_blank", "");
  oVentana.document.write("<h2>Listado de alquileres</h2><br/><ul>");
  oVentana.document.write(listadoAlquileres);
  oVentana.document.write("</ul>");
  oVentana.document.close();
  oVentana.document.title = "Listado de alquileres";
}
function mostrarListadoAlquileresEntreFechas() {
  let dtFechaInicio = Date(frmListadoAlquileresEntreFechas.dtpFechaInicio.value.trim());
  let dtFechaFin = Date(frmListadoAlquileresEntreFechas.dtpFechaFin.value.trim());
  let listadoAlquileres = oAgencia.listadoAlquileresEntreFechas(dtFechaInicio, dtFechaFin);
  let oVentana = open("", "_blank", "");
  oVentana.document.write("<h2>Listado de alquileres entre fechas</h2><br/><ul>");
  oVentana.document.write(listadoAlquileres);
  oVentana.document.write("</ul>");
  oVentana.document.close();
  oVentana.document.title = "Listado de alquileres entre fechas";
}
function mostrarListadoAlquileresCliente() {
  let sDNICliente = frmListadoAlquileresCliente.txtDNICliente.value.trim();
  let listadoAlquileres = oAgencia.listadoAlquileresCliente(sDNICliente);
  let oVentana = open("", "_blank", "");
  oVentana.document.write("<h2>Listado de alquileres de un cliente</h2><br/><ul>");
  oVentana.document.write(listadoAlquileres);
  oVentana.document.write("</ul>");
  oVentana.document.close();
  oVentana.document.title = "Listado de alquileres de un cliente";
}
function mostrarListadoCochesElectricos(){
  let listadoCochesElectricos = oAgencia.listadoCochesElectricos();
  let oVentana = open("", "_blank", "");
  oVentana.document.write("<h2>Listado de coches electricos</h2><br/><ul>");
  oVentana.document.write(listadoCochesElectricos);
  oVentana.document.write("</ul>");
  oVentana.document.close();
  oVentana.document.title = "Listado de coches electricos";
}

