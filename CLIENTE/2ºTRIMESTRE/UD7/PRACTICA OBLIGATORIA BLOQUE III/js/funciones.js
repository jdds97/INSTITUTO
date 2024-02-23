import * as api from "./api.js";
/*
 * Datos iniciales
 */
// Carga de datos iniciales al poner el valor del comercial a 0.
document.addEventListener("DOMContentLoaded", () => {
  frmComercial.comerciales.value = 0;
  cargaDatos();
});
// #region Eventos de cambio de valores
let frmComercial = document.getElementById("frmComercial");
frmComercial.comerciales.addEventListener("change", limpiarClientes);
frmComercial.comerciales.addEventListener("change", async () =>
  cargaClientes(await api.cargarClientes())
);
let frms = document.getElementById("formularios");
let frmControles = document.getElementById("frmControles");

frmControles.categorias.addEventListener("change", limpiarProductos);
frmControles.categorias.addEventListener("change", async () =>
  cargaProductos(await api.cargarProductos())
);
// #endregion
export async function cargaDatos() {
  let comerciales = await api.cargarComerciales();
  console.log(comerciales);
  cargaComerciales(comerciales);
  let clientes = await api.cargarClientes();
  cargaClientes(clientes);
  let categorias = await api.cargarCategorias();
  cargaCategorias(categorias);
  let productos = await api.cargarProductos();
  cargaProductos(productos);
}
// #region Eventos de botones Formularios
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
  let divsfrms = frms.querySelectorAll("div");
  divsfrms.forEach((div) => {
    div.classList.add("oculto");
  });

  // Muestra el frm correspondiente
  let divfrm = document.getElementById(frmId);
  divfrm.classList.remove("oculto");
}
// #endregion
// region  Formularios
let frmNuevaCategoria = document.getElementById("frmNuevaCategoria");
frmNuevaCategoria.addEventListener("submit", (event) =>
  actualizarDatos("categorias", "POST", event)
);
let frmEditarCategoria = document.getElementById("frmEditarCategoria");
frmEditarCategoria.addEventListener("submit", (event) =>
  actualizarDatos("categorias", "PUT", event)
);
let frmBorrarCategoria = document.getElementById("frmBorrarCategoria");
frmBorrarCategoria.addEventListener("submit", (event) =>
  actualizarDatos("categorias", "DELETE", event)
);

let frmNuevoProducto = document.getElementById("frmNuevoProducto");
frmNuevoProducto.addEventListener("submit", (event) =>
  actualizarDatos("productos", "POST", event)
);

let frmEditarProducto = document.getElementById("frmEditarProducto");
frmEditarProducto.addEventListener("submit", (event) =>
  actualizarDatos("productos", "PUT", event)
);
frmEditarProducto.categoriasProductosAEditar.addEventListener(
  "change",
  limpiarProductos
);
frmEditarProducto.categoriasProductosAEditar.addEventListener(
  "change",
  cargaProductos(api.cargarProductos)
);
let frmBorrarProducto = document.getElementById("frmBorrarProducto");
frmBorrarProducto.addEventListener(
  "submit",
  async (event) => await api.actualizarDatos("productos", "DELETE", event)
);
let frmNuevoCliente = document.getElementById("frmNuevoCliente");
frmNuevoCliente.addEventListener(
  "submit",
  async (event) => await api.actualizarDatos("clientes", "POST", event)
);
let frmEditarCliente = document.getElementById("frmEditarCliente");
frmEditarCliente.addEventListener(
  "submit",
  async (event) => await api.actualizarDatos("clientes", event)
);
let frmBorrarCliente = document.getElementById("frmBorrarCliente");
frmBorrarCliente.addEventListener(
  "submit",
  async (event) => await api.actualizarDatos("clientes", "DELETE", event)
);
let frmNuevoComercial = document.getElementById("frmNuevoComercial");
frmNuevoComercial.addEventListener(
  "submit",
  async (event) => await api.actualizarDatos(event)
);
let frmEditarComercial = document.getElementById("frmEditarComercial");
frmEditarComercial.addEventListener(
  "submit",
  async (event) => await api.actualizarDatos("comerciales", "PATCH", event)
);
let frmBorrarComercial = document.getElementById("frmBorrarComercial");
frmBorrarComercial.addEventListener(
  "submit",
  async (event) => await api.actualizarDatos("comerciales", "DELETE", event)
);
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
    // frmEditarComercial.comercialesAEditar.add(option);
    // frmBorrarComercial.comercialesABorrar.add(option);
    // frmEditarCliente.comercialesClientesAEditar.add(option);
    // frmBorrarCliente.comercialesClientesABorrar.add(option.cloneNode(true));
  });
}

/**
 * Carga los clientes del comercial seleccionado en el cuadro de pedido.
 */
async function cargaClientes(objetoClientes) {
  let clientesComercial =
    Object.values(objetoClientes)[frmComercial.comerciales.value];
  console.log(objetoClientes[0]);
  let keyComercial =
    Object.keys(objetoClientes)[frmComercial.comerciales.value];

  clientesComercial.forEach((cliente, i) => {
    let cuadroCliente = document.createElement("div");
    let option = document.createElement("option");
    option.value = i;
    option.setAttribute("idArrayClientes", keyComercial);
    option.text = cliente;
    option.setAttribute("id", i);
    cuadroCliente.innerHTML = cliente;
    cuadroCliente.value = i;
    cuadroCliente.setAttribute("idArrayClientes", keyComercial);
    cuadroCliente.setAttribute("id", i);
    frmComercial.parentNode.append(cuadroCliente);
    cuadroCliente.classList.add("cliente");
    cuadroCliente.classList.add("pagado");
    frmEditarCliente.clientesAEditar.add(option);
    frmBorrarCliente.clientesABorrar.add(option.cloneNode(true));
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
    option.value = keysProductos[i];
    option.textContent = producto.nombreProducto;
    frmControles.productos.add(option);
    frmEditarProducto.productosAEditar.add(option.cloneNode(true));
    frmBorrarProducto.productosABorrar.add(option.cloneNode(true));
  });
}
// #endregion
// #region Funciones de limpieza de datos
/**
 * Limpia los comerciales del frm.
 */
function limpiarComerciales() {
  frmComercial.comerciales
    .querySelectorAll("option")
    .forEach((comercial) => comercial.remove());
}
/**
 * Limpia el pedido y el cliente anterior.
 */
function limpiarClientes() {
  let clientes = document.querySelectorAll(".cliente");
  clientes.forEach((cliente) => cliente.remove());
}
/**
 * Limpia las categorías del frm.
 */
function limpiarCategorias() {
  frmControles.categorias
    .querySelectorAll("option")
    .forEach((categoria) => categoria.remove());

  frmEditarCategoria.categoriasAEditar
    .querySelectorAll("option")
    .forEach((categoria) => categoria.remove());
  frmBorrarCategoria.categoriasABorrar
    .querySelectorAll("option")
    .forEach((categoria) => categoria.remove());
}
/**
 * Limpia los productos del frm.
 */
function limpiarProductos() {
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
// #endregion
