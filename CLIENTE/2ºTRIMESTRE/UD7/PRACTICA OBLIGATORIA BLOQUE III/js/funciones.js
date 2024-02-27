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
let clienteSeleccionado;
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
  event.preventDefault();
  await api.actualizarDatos(event);
  limpiarDatos();
  setTimeout(cargaDatos, 100);
});

// #endregion
// #region Eventos de selección de cliente
function clienteSeleccionadoForm(event) {
  document
    .querySelectorAll(".cliente")
    .forEach((cliente) => cliente.classList.remove("pendiente"));
  clienteSeleccionado = event.target.value;

  formulariosGestion.querySelectorAll(".clienteActual").forEach((cliente) => {
    cliente.innerHTML = event.target.innerHTML;
    cliente.id = event.target.id;
    cliente.setAttribute("valor", event.target.value);
  });

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
    const option = document.createElement("option");
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
  let comercialSeleccionado = frmComercial.comerciales.selectedOptions[0];
  comercialSeleccionado.setAttribute(
    "idComercial",
    Object.keys(objetoClientes)[comercialSeleccionado.value] //-Nqj2Fot88r20MVZipj6
  );
  //Aqui ya tengo los clientes de ese comercial ==key
  console.log(
    "Key comercial " + comercialSeleccionado.getAttribute("idComercial")
  ); //-Nqj2Fot88r20MVZipj6
  let clientesComercial = Object.values(
    objetoClientes[comercialSeleccionado.getAttribute("idComercial")]
  );
  let keyComercial = comercialSeleccionado.getAttribute("idComercial");

  if (clientesComercial === undefined) {
    clientesComercial = [];
  }
  console.log("Key comercial clientes " + keyComercial);

  clientesComercial.forEach((cliente, i) => {
    if (
      cliente !== null &&
      comercialSeleccionado.getAttribute("idComercial") === keyComercial
    ) {
      let cuadroCliente = document.createElement("div");

      cuadroCliente.innerHTML = cliente;
      cuadroCliente.value = i;
      cuadroCliente.setAttribute("id", keyComercial);
      cuadroCliente.setAttribute("valor", i);
      cuadroCliente.classList.add("cliente");
      cuadroCliente.classList.add("pagado");
      cuadroCliente.addEventListener("click", clienteSeleccionadoForm);
      frmComercial.parentNode.append(cuadroCliente);
    }
  });
  formulariosGestion
    .querySelectorAll(".comercialActual")
    .forEach((comercial) => {
      if (comercial.tagName === "SPAN") {
        comercial.id = frmComercial.comerciales.selectedOptions[0].id;

        if (comercial.classList.contains("nuevoCliente")) {
          comercial.id = keyComercial;
          comercial.setAttribute("valor", clientesComercial.length);
        }
        if (
          comercial.classList.contains("editarCliente") ||
          comercial.classList.contains("borrarComercial")
        ) {
          comercial.setAttribute("valor", keyComercial);
        }
      }

      comercial.innerHTML = frmComercial.comerciales.selectedOptions[0].text;
    });

  // formulariosGestion
  //   .querySelectorAll(".comercialActualCliente")
  //   .forEach((comercial) => {
  //     comercial.id = keyComercial;
  //     comercial.innerHTML = frmComercial.comerciales.selectedOptions[0].text;
  //     comercial.setAttribute("valor", clienteSeleccionado);
  //   });
  formulariosGestion
    .querySelectorAll(".comercialActualClienteNuevo")
    .forEach((comercial) => {
      comercial.id = keyComercial;
      comercial.innerHTML = frmComercial.comerciales.selectedOptions[0].text;
      comercial.setAttribute(
        "valor",
        document.querySelectorAll(".cliente").length
      );
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
  if (productosSeleccionados.length === 0) {
    productosSeleccionados = [
      { nombreProducto: "No hay productos en esta categoría" },
    ];
  }
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
      });
    categoriaProducto.innerHTML =
      frmControles.categorias.selectedOptions[0].text;
    producto.id = frmControles.categorias.selectedOptions[0].id;
  });
}
// #endregion
// #region Funciones de limpieza de datos
/**
 * Limpia los comerciales del frm.
 */
function limpiarComerciales() {
  console.log("Limpiando comerciales");
  let selectElement = frmComercial.comerciales;
  let valorSeleccionado = selectElement.value;

  selectElement.querySelectorAll("option").forEach((comercial) => {
    if (comercial.value !== valorSeleccionado) {
      comercial.remove();
    }
  });
}
/**
 * Limpia el pedido y el cliente anterior.
 */
function limpiarClientes() {
  console.log("Limpiando clientes");
  let clientes = document.querySelectorAll(".cliente");
  clientes.forEach((cliente) => cliente.remove());
  formulariosGestion
    .querySelectorAll(".clienteActual")
    .forEach((cliente) => (cliente.innerHTML = ""));
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
  limpiarComerciales();
  limpiarClientes();
  limpiarCategorias();
  limpiarProductos();
}

// #endregion
