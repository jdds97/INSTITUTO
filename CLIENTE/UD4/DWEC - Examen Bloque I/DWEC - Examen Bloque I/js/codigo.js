datosIniciales();
let oTienda = new Tienda();

function datosIniciales() {




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

function aceptarAltaCatalogo() {
  // Añadir código
  let marca = frmAltaCatalogo.txtMarca.value.trim();
  let modelo = frmAltaCatalogo.txtModelo.value.trim();
  let precio = Number(frmAltaCatalogo.txtPrecio.value.trim());
  let pulgadas = Number(frmAltaCatalogo.txtPulgadas.value.trim());
  let discoSSD = frmAltaCatalogo.rbtDiscoSSD;
  let bDiscoSSD = discoSSD == "S" ? true : false;
  let tarjetaGrafica = frmAltaCatalogo.txtGrafica.value.trim();
  let oOrdenador;
  if (frmAltaCatalogo.rbtOrdenador.value == "sobremesa") {
    oOrdenador = new Sobremesa(marca, modelo, precio, tarjetaGrafica, bDiscoSSD);
  } else {
    oOrdenador = new Portatil(marca, modelo, precio, pulgadas);
  }
  if (!oTienda.altaCatalogo(oOrdenador)) {
    alert("Ordenador registrado");
    frmAltaCatalogo.reset(); // Vaciamos los campos del formulario
    frmAltaCatalogo.style.display = "none";
  } else {
    alert("Ordenador registrado previamente");
  }
}

function aceptarEntradaStock() {
  // Añadir código
  let marca = frmEntradaStock.txtMarca.value.trim();
  let modelo = frmEntradaStock.txtModelo.value.trim();
  let unidades = Number(frmEntradaStock.txtUnidades.value.trim());
  let respuesta = oTienda.entradaStock(marca, modelo, unidades);
  if (respuesta.includes("Si")) {
    alert(respuesta);
    frmEntradaStock.reset(); // Vaciamos los campos del formulario
    frmEntradaStock.style.display = "none";
  } else {
    alert(respuesta);
  }
}

function aceptarSalidaStock() {
  // Añadir código
  let marca = frmSalidaStock.txtMarca.value.trim();
  let modelo = frmSalidaStock.txtModelo.value.trim();
  let unidadesEliminadas = frmSalidaStock.txtUnidades.value.trim();
  let respuesta = oTienda.salidaStock(marca, modelo, unidadesEliminadas);
  if (respuesta.includes("Si")) {
    alert(respuesta);
    frmSalidaStock.reset(); // Vaciamos los campos del formulario
    frmSalidaStock.style.display = "none";
  } else {
    alert(respuesta);
  }
}

function mostrarListadoCatalogo() {
  // Añadir código
  let listadoCatalogo = oTienda.listadoCatalogo();
  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write(
    "<h1>Listado </h1>"
  );
  oVentana.document.write(listadoCatalogo);
  oVentana.document.close();
  oVentana.document.title = "Listado ";

  // Reseteamos y ocultamos el formulario
  frmAltaCatalogo.reset();
  frmAltaCatalogo.style.display = "none";

}

function mostrarListadoStock() {
  // Añadir código
  let listadoStock = oTienda.listadoStock();
  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write(
    "<h1>Listado </h1>"
  );
  oVentana.document.write(listadoStock);
  oVentana.document.close();
  oVentana.document.title = "Listado Stock ";

  // Reseteamos y ocultamos el formulario
  frmListadoPerennes.reset();
  frmListadoPerennes.style.display = "none";

}

function mostrarTotales() {
  // Añadir código
  let listadoStock= oTienda.importeTotalStock();
  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write(
    "<h1>Totales</h1>"
  );
  oVentana.document.write(listadoStock);
  oVentana.document.close();
  oVentana.document.title = "Listado Stock Portatiles";

  // Reseteamos y ocultamos el formulario
  frmListadoPerennes.reset();
  frmListadoPerennes.style.display = "none";

}