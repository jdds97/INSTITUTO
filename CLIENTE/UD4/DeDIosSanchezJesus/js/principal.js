"use strict";
/**
 * Representa una agencia.
 * @typedef {Object} oAgencia
 * @property {string} nombre - El nombre de la agencia.
 * @property {string} direccion - La dirección de la agencia.
 * @property {string} telefono - El número de teléfono de la agencia.
 */
let oAgencia = new Agencia();
datosIniciales();

/**
 * Inicializa los datos para la agencia, incluyendo clientes, vehículos y alquileres.
 */

function datosIniciales() {
  // Clientes
  let cliente1 = new Cliente(12345678, "Carlos", "Gómez López");
  let cliente2 = new Cliente(87654321, "Laura", "Sánchez Rodríguez");
  let cliente3 = new Cliente(12121212, "Javier", "García Pérez");
  let cliente4 = new Cliente(34343434, "Elena", "Martínez Sánchez");
  let cliente5 = new Cliente(13131231, "Pedro", "Fernández García");

  oAgencia.altaCliente(cliente1);
  oAgencia.altaCliente(cliente2);
  oAgencia.altaCliente(cliente3);
  oAgencia.altaCliente(cliente4);
  oAgencia.altaCliente(cliente5);
  // Vehiculos
  //Coches
  let coche1 = new Coche("1234ABC", "Renault", "Clio", 5, "Gasolina");
  let coche2 = new Coche("2345BCD", "Peugeot", "208", 5, "Gasolina");
  let coche3 = new Coche("3456CDE", "Volskwagen", "Golf", 5, "Gasolina");
  let coche4 = new Coche("4567DEF", "BMW", "Serie 3", 5, "Gasolina");
  let coche5 = new Coche("5678EFG", "Mercedes", "Clase A", 5, "Gasolina");
  //Motos
  let moto1 = new Moto("6789FGH", "Duke 390", "KTM", false);
  let moto2 = new Moto("7890GHI", "Iron 883", "Harley-Davidson", false);
  let moto3 = new Moto("8901HIJ", "Monster 821", "Ducati", false);
  let moto4 = new Moto("9012IJK", "GSX-R750", "Suzuki", false);
  let moto5 = new Moto("0123JKL", "Star Tracer", "Yamaha", false);
  oAgencia.altaVehiculo(coche1);
  oAgencia.altaVehiculo(coche2);
  oAgencia.altaVehiculo(coche3);
  oAgencia.altaVehiculo(coche5);
  oAgencia.altaVehiculo(moto1);
  oAgencia.altaVehiculo(moto2);
  oAgencia.altaVehiculo(moto3);
  oAgencia.altaVehiculo(moto4);
  oAgencia.altaVehiculo(moto5);

  //Alquileres
  let alquiler1 = new Alquiler(
    1,
    cliente1,
    [coche1],
    "2023-12-10",
    "2023-12-15"
  );
  let alquiler2 = new Alquiler(
    2,
    cliente2,
    [moto1, coche2],
    "2023-12-20",
    "2023-12-25"
  );
  //Alquiler fallido porque la fecha de inicio es anterior a la actual
  let alquiler3 = new Alquiler(
    3,
    cliente1,
    [moto1],
    "2022-12-20",
    "2024-12-25"
  );
  let alquiler4 = new Alquiler(
    4,
    cliente2,
    [coche2, moto3],
    "2023-12-20",
    "2023-12-25"
  ); // Alquiler fallido porque el coche ya está alquilado
  let alquiler5 = new Alquiler(
    5,
    cliente3,
    [coche3, moto3],
    "2023-12-20",
    "2023-12-25"
  );
  //Alquiler fallido ya que ningun cliente tiene algún vehículo alquilado en esas fechas
  let alquiler6 = new Alquiler(
    6,
    cliente4,
    [coche4, moto4],
    "2023-12-20",
    "2023-12-25"
  );
  oAgencia.altaAlquiler(alquiler1);
  oAgencia.altaAlquiler(alquiler2);
  oAgencia.altaAlquiler(alquiler6);
}
/**
 * Función que gestiona la visibilidad de los formularios.
 * @param {string} sFormularioVisible - El formulario que se va a mostrar.
 */
function gestionFormularios(sFormularioVisible) {
  ocultarTodosLosFormularios();

  // Hacemos visible el formulario que llega como parámetro
  switch (sFormularioVisible) {
    case "frmAltaCliente":
      frmAltaCliente.style.display = "block";
      break;
    case "frmAltaVehiculo":
      frmAltaVehiculo.style.display = "block";
      break;
    case "frmAltaAlquiler":
      frmAltaAlquiler.style.display = "block";
      break;
    case "frmBajaAlquiler":
      frmBajaAlquiler.style.display = "block";
      break;
    case "frmAlquileresPorFecha":
      frmAlquileresPorFecha.style.display = "block";
      break;
    case "frmAlquileresCliente":
      frmAlquileresCliente.style.display = "block";
      break;
  }
}

/**
 * Oculta todos los formularios en la página.
 */
function ocultarTodosLosFormularios() {
  let oFormularios = document.querySelectorAll("form");

  for (let i = 0; i < oFormularios.length; i++) {
    oFormularios[i].style.display = "none";
  }
}
/**
 * Función que se ejecuta al aceptar el alta de un cliente.
 * Valida los campos del formulario y registra al cliente si están completos.
 * @returns {void}
 */
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
/**
 * Función que se ejecuta al aceptar el alta de un vehículo.
 * Obtiene los valores de los campos del formulario y crea un objeto Vehiculo.
 * Si se han rellenado todos los campos, se registra el vehículo en la agencia.
 * @returns {void}
 */
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
/**
 * Función que se ejecuta al aceptar el alta de un alquiler.
 * Realiza la validación de los campos del formulario y registra el alquiler si los campos están completos.
 * @returns {void}
 */
function aceptarAltaAlquiler() {
  let dtFechaInicio = Date(frmAltaAlquiler.txtFechaInicio.value.trim());
  let dtFechaFin = Date(frmAltaAlquiler.txtFechaFin.value.trim());
  let sDNICliente = frmAltaAlquiler.txtDNICliente.value.trim();
  let sMatricula = frmAltaAlquiler.txtMatricula.value.trim();
  if (sDNICliente.length == 0 || sMatricula.length == 0) {
    alert("No se han rellenado todos los campos del formulario");
  } else {
    let oAlquiler = new Alquiler(
      oAgencia.siguienteCodigoAlquiler(),
      dtFechaInicio,
      dtFechaFin,
      sDNICliente,
      sMatricula
    );
    alert(
      oAgencia.altaAlquiler(oAlquiler)
        ? "Alquiler ya registrado"
        : "Alquiler registrado correctamente"
    );
    limpiarFormulario("frmAltaAlquiler");
  }
}

/**
 * Función que se ejecuta al aceptar la baja de un alquiler.
 * @returns {void}
 */
function aceptarBajaAlquiler() {
  let idAlquiler = Number(frmBajaAlquiler.txtIdAlquiler.value.trim());
  if (idAlquiler <= 0) {
    alert("No se han rellenado todos los campos del formulario");
  } else {
    alert(
      oAgencia.bajaAlquiler(idAlquiler)
        ? "Alquiler no registrado"
        : "Alquiler registrado correctamente"
    );
    limpiarFormulario("frmBajaAlquiler");
  }
}

/**
 * Muestra el listado de clientes en una ventana emergente.
 */
function mostrarListadoClientes() {
  let listadoClientes = oAgencia.listadoClientes();
  let oVentana = open("", "_blank", "");
  oVentana.document.write("<h2>Listado de clientes</h2><br/><ul>");
  oVentana.document.write(listadoClientes);
  oVentana.document.write("</ul>");
  oVentana.document.close();
  oVentana.document.title = "Listado de clientes";
}

/**
 * Muestra el listado de vehículos en una ventana emergente.
 */
function mostrarListadoVehiculos() {
  let oVentana = open("", "_blank", "");
  //Intento de meter bootstrap en las ventanas emergentes
  // Enlaces a Bootstrap (CSS)
  var bootstrapCSS = document.createElement("link");
  bootstrapCSS.rel = "stylesheet";
  bootstrapCSS.href = "bootstrap/css/bootstrap.min.css";
  oVentana.document.head.appendChild(bootstrapCSS);

  // Enlaces a Bootstrap (JS) 
  var bootstrapJS = document.createElement("script");
  bootstrapJS.src = "bootstrap/js/bootstrap.min.js";
  oVentana.document.body.appendChild(bootstrapJS);
  var bootstrapJS2 = document.createElement("script");
  bootstrapJS2.src = "bootstrap/js/jquery.min.js";
  oVentana.document.body.appendChild(bootstrapJS2);

  let listadoVehiculos = oAgencia.listadoVehiculos();

  oVentana.document.write(
    "<h2>Listado de vehiculos</h2> <br/>" + listadoVehiculos
  );
  oVentana.document.close();
  oVentana.document.title = "Listado de vehiculos";
}
/**
 * Acepta el listado de alquileres y muestra la información en una ventana emergente.
 */
function aceptarListadoAlquileres() {
  let dtFechaInicio = Date(frmAlquileresPorFecha.txtFechaInicio.value.trim());
  let dtFechaFin = Date(frmAlquileresPorFecha.txtFechaFin.value.trim());
  let listadoAlquileres = oAgencia.listadoAlquileres(dtFechaInicio, dtFechaFin);
  let oVentana = open("", "_blank", "");
  oVentana.document.write("<h2>Listado de alquileres</h2><br/><ul>");
  oVentana.document.write(listadoAlquileres);
  oVentana.document.write("</ul>");
  oVentana.document.close();
  oVentana.document.title = "Listado de alquileres";
}
/**
 * Acepta el listado de alquileres de un cliente.
 */
function aceptarListadoAlquileresCliente() {
  let sDNICliente = frmAlquileresCliente.txtDNICliente.value.trim();
  let listadoAlquileresCliente = oAgencia.listadoAlquileresCliente(sDNICliente);
  let oVentana = open("", "_blank", "");
  oVentana.document.write("<h2>Listado Alquileres Cliente</h2><br/><ul>");
  oVentana.document.write(listadoAlquileresCliente);
  oVentana.document.write("</ul>");
  oVentana.document.close();
  oVentana.document.title = "Listado de alquileres cliente";
}
/**
 * Muestra el listado de coches eléctricos en una ventana emergente.
 */
function mostrarListadoCochesElectricos() {
  let listadoCochesElectricos = oAgencia.listadoCochesElectricos();
  let oVentana = open("", "_blank", "");
  oVentana.document.write("<h2>Listado de coches electricos</h2><br/><ul>");
  oVentana.document.write(listadoCochesElectricos);
  oVentana.document.write("</ul>");
  oVentana.document.close();
  oVentana.document.title = "Listado de coches electricos";
}

/**
 * Limpia el formulario y oculta su visualización.
 * @param {HTMLFormElement} formulario - El formulario a limpiar.
 */
function limpiarFormulario(formulario) {
  formulario.reset();
  formulario.style.display = "none";
}
