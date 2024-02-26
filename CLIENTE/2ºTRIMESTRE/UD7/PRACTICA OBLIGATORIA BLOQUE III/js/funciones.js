import * as api from "./api.js";

// #region Datos iniciales
/*
 * Datos iniciales
 */
// Carga de datos iniciales al poner el valor del comercial a 0.
document.addEventListener("DOMContentLoaded", () => {
  frmComercial.comerciales.value = 0;
  cargaDatos();
});
// #endregion
// #region Eventos de cambio de valores

let frmComercial = document.getElementById("frmComercial");
frmComercial.comerciales.addEventListener("change", limpiarClientes);
frmComercial.comerciales.addEventListener("change", async () =>
  cargaClientes(await api.cargarClientes())
);

let frmControles = document.getElementById("frmControles");
frmControles.categorias.addEventListener("change", limpiarProductos);
frmControles.categorias.addEventListener("change", async () =>
  cargaProductos(await api.cargarProductos())
);
let formulariosGestion = document.getElementById("formulariosGestion");
formulariosGestion
  .querySelector("#gestionClientes")
  .addEventListener("change", limpiarClientes);
formulariosGestion
  .querySelector("#gestionClientes")
  .addEventListener("change", async (event) =>
    cargaClientes(await api.cargarClientes(), event)
  );
formulariosGestion
  .querySelector("#gestionProductos")
  .addEventListener("change", limpiarProductos);
formulariosGestion
  .querySelector("#gestionProductos")
  .addEventListener("change", async () =>
    cargaProductos(await api.cargarProductos())
  );
formulariosGestion.addEventListener("submit", async (event) => {
  await api.actualizarDatos(event);
  limpiarDatos();
  setTimeout(1000, cargaDatos());
});

// #endregion
// #region Carga de datos iniciales
export async function cargaDatos(event) {
  console.log("Cargando datos");
  let comerciales = await api.cargarComerciales();
  cargaComerciales(comerciales);
  let clientes = await api.cargarClientes();
  cargaClientes(clientes, event);
  let categorias = await api.cargarCategorias();
  cargaCategorias(categorias);
  let productos = await api.cargarProductos();
  cargaProductos(productos);
}
// #endregion
// #region Eventos de botones formulariosGestion
let btnGestionCategorias = document.getElementById("btnGestionCategorias");
btnGestionCategorias.addEventListener("click", () => {
  mostrarForm("gestionCategorias");
});
let btnGestionProductos = document.getElementById("btnGestionProductos");
btnGestionProductos.addEventListener("click", () => {
  mostrarForm("gestionProductos");
});
let btnGestionClientes = document.getElementById("btnGestionClientes");
btnGestionClientes.addEventListener("click", () => {
  mostrarForm("gestionClientes");
});
let btnGestionComerciales = document.getElementById("btnGestionComerciales");
btnGestionComerciales.addEventListener("click", () => {
  mostrarForm("gestionComerciales");
});

function mostrarForm(frmId) {
  // Oculta todos los divs de los frms
  let divsformularios = formulariosGestion.querySelectorAll("div");
  divsformularios.forEach((div) => {
    div.classList.add("oculto");
  });

  // Muestra el frm correspondiente
  let divformulario = document.getElementById(frmId);
  divformulario.classList.remove("oculto");
}

// #endregion

// #region Funciones de carga de datos

/**
 * Carga los comerciales en el frm .
 */
async function cargaComerciales(objetoComerciales) {
  let comerciales = Object.values(objetoComerciales);
  comerciales.forEach((comercial, i) => {
    let option = document.createElement("option");
    option.value = i;
    option.setAttribute("id", Object.keys(objetoComerciales)[i]);
    option.text = comercial;
    frmComercial.comerciales.add(option);
    // Añade los comerciales a los formularios de gestión de comerciales
    frmEditarComercial.comercialesAEditar.add(option.cloneNode(true));
    frmBorrarComercial.comercialesABorrar.add(option.cloneNode(true));
    // Añade los comerciales a los formularios de gestión de clientes
    frmNuevoCliente.comercialesClientesANuevo.add(option.cloneNode(true));
    frmEditarCliente.comercialesClientesAEditar.add(option.cloneNode(true));
    frmBorrarCliente.comercialesClientesABorrar.add(option.cloneNode(true));
  });
}

/**
 * Carga los clientes del comercial seleccionado en el cuadro de pedido.
 */
async function cargaClientes(objetoClientes, event) {
  let valorComercial;
  if (event) {
    console.log(event.target.form.id);
    debugger;
    switch (event.target.form.id) {
      case undefined:
        valorComercial = frmComercial.comerciales.value;
        break;
      case "frmNuevoCliente":
        valorComercial = frmNuevoCliente.comercialesClientesANuevo.value;
        break;
      case "frmEditarCliente":
        valorComercial = frmEditarCliente.comercialesClientesAEditar.value;
        break;
      case "frmBorrarCliente":
        valorComercial = frmBorrarCliente.comercialesClientesABorrar.value;
        break;
    }
  } else {
    valorComercial = frmComercial.comerciales.value;
  }
  let clientesComercial = Object.values(objetoClientes)[valorComercial];
  let keyComercial = Object.keys(objetoClientes)[valorComercial];

  clientesComercial.forEach((cliente, i) => {
    let cuadroCliente = document.createElement("div");
    let option = document.createElement("option");
    option.value = i;
    option.setAttribute("id", keyComercial);
    option.text = cliente;
    cuadroCliente.innerHTML = cliente;
    cuadroCliente.value = i;
    cuadroCliente.setAttribute("id", keyComercial);
    cuadroCliente.setAttribute("valor", i);
    cuadroCliente.classList.add("cliente");
    cuadroCliente.classList.add("pagado");
    frmComercial.parentNode.append(cuadroCliente);

    frmEditarCliente.clientesAEditar.add(option);
    frmBorrarCliente.clientesABorrar.add(option.cloneNode(true));
    // Añade los clientes a los formularios de gestión de clientes
    // frmEditarCliente.clientesAEditar.add(option.cloneNode(true));
    // frmBorrarCliente.clientesABorrar.add(option.cloneNode(true));
    //   frmEditarCliente.clientesAEditar.selectedOptions[0].setAttribute(
    //     "id",
    //     keyComercial
    //   );
    //   frmEditarCliente.clientesAEditar[i].setAttribute("valor", i);
    //   frmBorrarCliente.clientesABorrar[i].setAttribute("valor", i);
    //   frmNuevoCliente.comercialesClientesANuevo.selectedOptions[0].setAttribute(
    //     "id",
    //     keyComercialEdit
    //   );
    //   frmNuevoCliente.comercialesClientesANuevo.selectedOptions[0].setAttribute(
    //     "valor",
    //     clientesComercial.length + 1
    //   );
    //   frmBorrarCliente.comercialesClientesABorrar.selectedOptions[0].setAttribute(
    //     "id",
    //     keyComercialEdit
    //   );
    //   frmBorrarCliente.comercialesClientesABorrar.selectedOptions[0].setAttribute(
    //     "valor",
    //     clientesComercial.length + 1
    //   );
    //   frmBorrarCliente.clientesABorrar.selectedOptions[0].setAttribute(
    //     "id",
    //     keyComercialEdit
    //   );
  });
}

/**
 * Carga las categorías en el frm.
 */
function cargaCategorias(objetoCategorias) {
  let categorias = Object.values(objetoCategorias);
  categorias.forEach((categoria, indice) => {
    let option = document.createElement("option");
    option.value = indice;
    option.setAttribute("id", Object.keys(objetoCategorias)[indice]);
    option.textContent = categoria;
    if (frmControles.categorias.options.length < categorias.length)
      frmControles.categorias.add(option);
    frmEditarCategoria.categoriasAEditar.add(option.cloneNode(true));
    frmBorrarCategoria.categoriasABorrar.add(option.cloneNode(true));
    frmEditarProducto.categoriasProductosAEditar.add(option.cloneNode(true));
    frmBorrarProducto.categoriasProductosABorrar.add(option.cloneNode(true));
  });
}

/**
 * Carga los productos de la categoría seleccionada en el frm.
 */

function cargaProductos(productos) {
  let categoriaSeleccionada = frmControles.categorias.value;
  let productosSeleccionados = Object.values(productos).filter((producto) => {
    return producto.idCategoria == categoriaSeleccionada;
  });
  let keysProductos = Object.keys(productos).filter((producto) => {
    return productos[producto].idCategoria == categoriaSeleccionada;
  });
  productosSeleccionados.forEach((producto, i) => {
    let option = document.createElement("option");
    option.setAttribute("id", keysProductos[i]);
    option.textContent = producto.nombreProducto;
    frmControles.productos.add(option);
    frmEditarProducto.productosAEditar.add(option.cloneNode(true));
    frmBorrarProducto.productosABorrar.add(option.cloneNode(true));
    frmEditarProducto.productosAEditar.selectedOptions[0].setAttribute(
      "id",
      keysProductos[i]
    );
    frmBorrarProducto.productosABorrar.selectedOptions[0].setAttribute(
      "id",
      keysProductos[i]
    );
    frmBorrarProducto.productosABorrar.selectedOptions[0].setAttribute(
      "valor",
      keysProductos[i]
    );

    frmEditarProducto.productosAEditar.selectedOptions[0].setAttribute(
      "id",
      keysProductos[i]
    );
    frmBorrarProducto.productosABorrar.selectedOptions[0].setAttribute(
      "id",
      keysProductos[i]
    );
  });
}
// #endregion
// #region Funciones de limpieza de datos
/**
 * Limpia los comerciales del frm.
 */
function limpiarComerciales() {
  console.log("Limpiando comerciales");
  frmComercial.comerciales
    .querySelectorAll("option")
    .forEach((comercial) => comercial.remove());
  frmNuevoCliente.comercialesClientesANuevo
    .querySelectorAll("option")
    .forEach((comercial) => comercial.remove());
  frmEditarCliente.comercialesClientesAEditar
    .querySelectorAll("option")
    .forEach((comercial) => comercial.remove());
}
/**
 * Limpia el pedido y el cliente anterior.
 */
function limpiarClientes(event) {
  console.log("Limpiando clientes");
  switch (event.target.form.id) {
    case "frmComercial":
      let clientes = document.querySelectorAll(".cliente");
      clientes.forEach((cliente) => cliente.remove());
      break;
    case "frmNuevoCliente":
      frmNuevoCliente.clientesClientesANuevo

        .querySelectorAll("option")
        .forEach((cliente) => cliente.remove());
      break;
    case "frmEditarCliente":
      frmEditarCliente.clientesAEditar
        .querySelectorAll("option")
        .forEach((cliente) => cliente.remove());
      break;
    case "frmBorrarCliente":
      frmBorrarCliente.clientesABorrar
        .querySelectorAll("option")
        .forEach((cliente) => cliente.remove());
      break;
  }
}

/**
 * Limpia las categorías del frm.
 */
function limpiarCategorias() {
  console.log("Limpiando categorias");
  frmControles.categorias
    .querySelectorAll("option")
    .forEach((categoria) => categoria.remove());
  // Limpia las categorías de los formularios de gestión de categorías
  frmEditarCategoria.categoriasAEditar
    .querySelectorAll("option")
    .forEach((categoria) => categoria.remove());
  frmBorrarCategoria.categoriasABorrar
    .querySelectorAll("option")
    .forEach((categoria) => categoria.remove());
  // Limpia las categorías de los formularios de gestión de productos
  frmNuevoProducto.categoriasProductosANuevo
    .querySelectorAll("option")
    .forEach((categoria) => categoria.remove());
  frmEditarProducto.categoriasProductosAEditar
    .querySelectorAll("option")
    .forEach((categoria) => categoria.remove());
  frmBorrarProducto.categoriasProductosABorrar
    .querySelectorAll("option")
    .forEach((categoria) => categoria.remove());
}
/**
 * Limpia los productos del frm.
 */
function limpiarProductos(event) {
  console.log("Limpiando productos");
  switch (event.target.form.id) {
  }
  frmControles.productos
    .querySelectorAll("option")
    .forEach((producto) => producto.remove());
  frmEditarProducto.productosAEditar
    .querySelectorAll("option")
    .forEach((producto) => producto.remove());
  frmBorrarProducto.productosABorrar
    .querySelectorAll("option")
    .forEach((producto) => producto.remove());
}
function limpiarDatos() {
  console.log("Limpiando datos");
  limpiarCategorias();
  limpiarProductos();
  limpiarComerciales();
  limpiarClientes();
}
// #endregion
