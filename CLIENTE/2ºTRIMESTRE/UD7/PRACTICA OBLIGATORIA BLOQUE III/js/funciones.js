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
document.addEventListener("submit", async (event) => {
  debugger;
  await api.actualizarDatos(event);
  limpiarDatos(event);
  await cargaDatos(event);
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
  let evento;

  if (event) {
    evento = event.target.parentElement.id || event.target.form.id;
    switch (evento) {
      case "frmNuevoCliente":
        //Este return se hace para que no se carguen de nuevo clientes en los demás formularios
        valorComercial = frmComercial.comerciales.value;
        break;
      case "frmEditarCliente":
        valorComercial = frmEditarCliente.comercialesClientesAEditar.value;
        break;
      case "frmBorrarCliente":
        valorComercial = frmBorrarCliente.comercialesClientesABorrar.value;
        break;
      default:
        valorComercial = frmComercial.comerciales.value;
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
    frmNuevoCliente.comercialesClientesANuevo.selectedOptions[0].setAttribute(
      "id",
      keyComercial
    );
    frmNuevoCliente.comercialesClientesANuevo.selectedOptions[0].setAttribute(
      "valor",
      i++ + 1
    );
    frmEditarCliente.comercialesClientesAEditar.selectedOptions[0].setAttribute(
      "id",
      keyComercial
    );
    if (event != undefined) {
      switch (evento) {
        case "frmComercial":
          cuadroCliente.innerHTML = cliente;
          cuadroCliente.value = i;
          cuadroCliente.setAttribute("id", keyComercial);
          cuadroCliente.setAttribute("valor", i);
          cuadroCliente.classList.add("cliente");
          cuadroCliente.classList.add("pagado");
          frmComercial.parentNode.append(cuadroCliente);
          break;
        case "frmEditarCliente":
          frmEditarCliente.clientesAEditar.add(option);
          break;
        case "frmBorrarCliente":
          frmBorrarCliente.clientesABorrar.add(option);
          break;
      }
    } else {
      cuadroCliente.innerHTML = cliente;
      cuadroCliente.value = i;
      cuadroCliente.setAttribute("id", keyComercial);
      cuadroCliente.setAttribute("valor", i);
      cuadroCliente.classList.add("cliente");
      cuadroCliente.classList.add("pagado");
      frmComercial.parentNode.append(cuadroCliente);
      frmEditarCliente.clientesAEditar.add(option);
      frmBorrarCliente.clientesABorrar.add(option.cloneNode(true));
    }
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
  frmBorrarCliente.comercialesClientesABorrar
    .querySelectorAll("option")
    .forEach((comercial) => comercial.remove());
  frmEditarComercial.comercialesAEditar
    .querySelectorAll("option")
    .forEach((comercial) => comercial.remove());
  frmBorrarComercial.comercialesABorrar
    .querySelectorAll("option")
    .forEach((comercial) => comercial.remove());
}
/**
 * Limpia el pedido y el cliente anterior.
 */
function limpiarClientes(event) {
  console.log("Limpiando clientes");
  if (event.target.form.id) {
    switch (event.target.form.id) {
      case "frmComercial":
        let clientes = document.querySelectorAll(".cliente");
        clientes.forEach((cliente) => cliente.remove());
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
  } else {
    let clientes = document.querySelectorAll(".cliente");
    clientes.forEach((cliente) => cliente.remove());
    frmEditarCliente.clientesAEditar
      .querySelectorAll("option")
      .forEach((cliente) => cliente.remove());
    frmBorrarCliente.clientesABorrar
      .querySelectorAll("option")
      .forEach((cliente) => cliente.remove());
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

  switch (event.target.id) {
    case "frmControles":
      frmControles.productos
        .querySelectorAll("option")
        .forEach((producto) => producto.remove());
      break;
    case "frmEditarProducto":
      frmEditarProducto.productosAEditar
        .querySelectorAll("option")
        .forEach((producto) => producto.remove());
      break;
    case "frmBorrarProducto":
      frmBorrarProducto.productosABorrar
        .querySelectorAll("option")
        .forEach((producto) => producto.remove());
      break;
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
function limpiarDatos(event) {
  console.log("Limpiando datos");
  limpiarCategorias();
  limpiarProductos(event);
  limpiarComerciales();
  limpiarClientes(event);
}
// #endregion
