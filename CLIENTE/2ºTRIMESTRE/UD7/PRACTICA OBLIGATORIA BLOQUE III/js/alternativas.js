// region  Formularios
// let frmNuevaCategoria = document.getElementById("frmNuevaCategoria");
// frmNuevaCategoria.addEventListener("submit", (event) =>
//   actualizarDatos("categorias", "POST", event)
// );
// let frmEditarCategoria = document.getElementById("frmEditarCategoria");
// frmEditarCategoria.addEventListener("submit", (event) =>
//   actualizarDatos("categorias", "PUT", event)
// );
// let frmBorrarCategoria = document.getElementById("frmBorrarCategoria");
// frmBorrarCategoria.addEventListener("submit", (event) =>
//   actualizarDatos("categorias", "DELETE", event)
// );

// let frmNuevoProducto = document.getElementById("frmNuevoProducto");
// frmNuevoProducto.addEventListener("submit", (event) =>
//   actualizarDatos("productos", "POST", event)
// );

// let frmEditarProducto = document.getElementById("frmEditarProducto");
// frmEditarProducto.addEventListener("submit", (event) =>
//   actualizarDatos("productos", "PUT", event)
// );
// frmEditarProducto.categoriasProductosAEditar.addEventListener(
//   "change",
//   limpiarProductos
// );
// frmEditarProducto.categoriasProductosAEditar.addEventListener(
//   "change",
//   cargaProductos(api.cargarProductos)
// );
// let frmBorrarProducto = document.getElementById("frmBorrarProducto");
// frmBorrarProducto.addEventListener(
//   "submit",
//   async (event) => await api.actualizarDatos("productos", "DELETE", event)
// );
// let frmNuevoCliente = document.getElementById("frmNuevoCliente");
// frmNuevoCliente.addEventListener("submit", async (event) =>
//   api.actualizarDatos("clientes", "POST", event)
// );
// let frmEditarCliente = document.getElementById("frmEditarCliente");
// frmEditarCliente.addEventListener("submit", async (event) =>
//   api.actualizarDatos("clientes", event)
// );
// let frmBorrarCliente = document.getElementById("frmBorrarCliente");
// frmBorrarCliente.addEventListener("submit", async (event) =>
//   api.actualizarDatos(event)
// );
// let frmNuevoComercial = document.getElementById("frmNuevoComercial");
// frmNuevoComercial.addEventListener("submit", async (event) =>
//   api.actualizarDatos(event)
// );
// let frmEditarComercial = document.getElementById("frmEditarComercial");
// frmEditarComercial.addEventListener("submit", async (event) =>
//   api.actualizarDatos(event)
// );
// let frmBorrarComercial = document.getElementById("frmBorrarComercial");
// frmBorrarComercial.addEventListener("submit", async (event) =>
//   api.actualizarDatos(event)
// );
// #endregion
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
document.addEventListener("submit", async (event) => {
  event.preventDefault();
  await api.actualizarDatos(event);
  limpiarDatos();
  await cargaDatos();
});
let frmComercial = document.getElementById("frmComercial");
frmComercial.comerciales.addEventListener("change", limpiarClientes);
frmComercial.comerciales.addEventListener("change", async () =>
  cargaClientes(await api.cargarClientes())
);
let clienteSeleccionado;
let frmControles = document.getElementById("frmControles");
frmControles.categorias.addEventListener("change", limpiarProductos);
frmControles.categorias.addEventListener("change", async () =>
  cargaProductos(await api.cargarProductos())
);

// #endregion
// #region Eventos de selección de cliente
function clienteSeleccionadoForm(event) {
  document
    .querySelectorAll(".cliente")
    .forEach((cliente) => cliente.classList.remove("pendiente"));
  clienteSeleccionado = event.target.value;

  formulariosGestion
    .querySelectorAll(".clienteActual")
    .forEach((cliente) => (cliente.innerHTML = event.target.innerHTML));

  event.target.classList.add("pendiente");
}
// #endregion

// #endregion
// #region Carga de datos iniciales
async function cargaDatos() {
  console.log("Cargando datos");
  let comerciales = await api.cargarComerciales();
  cargaComerciales(comerciales);
  let clientes = await api.cargarClientes();
  cargaClientes(clientes);
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
  document
    .querySelectorAll(".cliente")
    .forEach((cliente) => cliente.classList.remove("pendiente"));
  formulariosGestion
    .querySelectorAll(".comercialActual")
    .forEach((comercial) => {
      comercial.id = frmComercial.comerciales.selectedOptions[0].id;
      comercial.innerHTML = frmComercial.comerciales.selectedOptions[0].text;
    });
  formulariosGestion
    .querySelectorAll(".comercialActualClienteNuevo")
    .forEach((cliente) => {
      cliente.id = frmComercial.comerciales.selectedOptions[0].id;
      cliente.innerHTML = frmComercial.comerciales.selectedOptions[0].text;
    });
  formulariosGestion
    .querySelectorAll(".comercialActualCliente")
    .forEach((comercial) => {
      comercial.id = event.target.id;
      comercial.innerHTML = frmComercial.comerciales.selectedOptions[0].text;
      comercial.setAttribute("valor", clienteSeleccionado);
    });
  formulariosGestion
    .querySelectorAll(".comercialActualClienteNuevo")
    .forEach((comercial) => {
      comercial.id = event.target.id;
      comercial.innerHTML = frmComercial.comerciales.selectedOptions[0].text;
      comercial.setAttribute(
        "valor",
        document.querySelectorAll(".cliente").length
      );
    });
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
  });
}

/**
 * Carga los clientes del comercial seleccionado en el cuadro de pedido.
 */
async function cargaClientes(objetoClientes) {
  let clientesComercial =
    Object.values(objetoClientes)[frmComercial.comerciales.value];
  let keyComercial =
    Object.keys(objetoClientes)[frmComercial.comerciales.value];

  clientesComercial.forEach((cliente, i) => {
    let cuadroCliente = document.createElement("div");
    cuadroCliente.innerHTML = cliente;
    cuadroCliente.value = i;
    cuadroCliente.setAttribute("id", keyComercial);
    cuadroCliente.setAttribute("valor", i);
    cuadroCliente.classList.add("cliente");
    cuadroCliente.classList.add("pagado");
    cuadroCliente.addEventListener("click", clienteSeleccionadoForm);
    frmComercial.parentNode.append(cuadroCliente);
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
    frmControles.categorias.add(option);
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
    formulariosGestion
      .querySelectorAll(".categoriaActual")
      .forEach((categoria) => {
        categoria.id = frmControles.categorias.selectedOptions[0].id;
        categoria.innerHTML = frmControles.categorias.selectedOptions[0].text;
        categoriaProducto.innerHTML =
          frmControles.categorias.selectedOptions[0].text;
        producto.id = frmControles.categorias.selectedOptions[0].id;
      });
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
}
/**
 * Limpia el pedido y el cliente anterior.
 */
function limpiarClientes() {
  console.log("Limpiando clientes");
  let clientes = document.querySelectorAll(".cliente");
  clientes.forEach((cliente) => cliente.remove());
}
/**
 * Limpia las categorías del frm.
 */
function limpiarCategorias() {
  console.log("Limpiando categorias");
  frmControles.categorias
    .querySelectorAll("option")
    .forEach((categoria) => categoria.remove());
}
/**
 * Limpia los productos del frm.
 */
function limpiarProductos() {
  console.log("Limpiando productos");
  frmControles.productos
    .querySelectorAll("option")
    .forEach((producto) => producto.remove());
}
function limpiarTexto() {
  console.log("Limpiando texto");
  let texto = document.querySelectorAll("input[type=text]");
  texto.forEach((texto) => (texto.value = ""));
}
function limpiarDatos() {
  console.log("Limpiando datos");
  limpiarTexto();
  limpiarCategorias();
  limpiarProductos();
  limpiarComerciales();
  limpiarClientes();
}

// #endregion

// let formulariosGestion = document.getElementById("formulariosGestion");
// formulariosGestion
//   .querySelector("#gestionClientes")
//   .addEventListener("change", limpiarClientes);
// formulariosGestion
//   .querySelector("#gestionClientes")
//   .addEventListener("change", async (event) =>
//     cargaClientes(await api.cargarClientes(), event)
//   );
// formulariosGestion
//   .querySelector("#gestionProductos")
//   .addEventListener("change", limpiarProductos);
// formulariosGestion
//   .querySelector("#gestionProductos")
//   .addEventListener("change", async () =>
//     cargaProductos(await api.cargarProductos())
//   );
