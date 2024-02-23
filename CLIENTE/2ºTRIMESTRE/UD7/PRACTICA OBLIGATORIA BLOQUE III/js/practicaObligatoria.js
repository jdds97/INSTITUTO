/*
 * Datos iniciales
 */
// Francotirador de frms READ
let frmComercial = document.getElementById("frmComercial");
frmComercial.comerciales.addEventListener("change", limpiarClientes);
frmComercial.comerciales.addEventListener("change", cargarClientes);
let frms = document.getElementById("formularios");
let frmControles = document.getElementById("frmControles");

frmControles.categorias.addEventListener("change", limpiarProductos);
frmControles.categorias.addEventListener("change", cargarProductos);

// Carga de datos iniciales al cargar la página y poner el valor del comercial a 0.
document.addEventListener("DOMContentLoaded", cargaDatos);

let btnGestionCategorias = document.getElementById("btnGestionCategorias");
btnGestionCategorias.addEventListener("click", () => {
  mostrarfrm("gestionCategorias");
});
let btnGestionProductos = document.getElementById("btnGestionProductos");
btnGestionProductos.addEventListener("click", () => {
  mostrarfrm("gestionProductos");
});
let btnGestionClientes = document.getElementById("btnGestionClientes");
btnGestionClientes.addEventListener("click", () => {
  mostrarfrm("gestionClientes");
});
let btnGestionComerciales = document.getElementById("btnGestionComerciales");
btnGestionComerciales.addEventListener("click", () => {
  mostrarfrm("gestionComerciales");
});
function mostrarfrm(frmId) {
  // Oculta todos los divs de los frms
  let divsfrms = frms.querySelectorAll("div");
  divsfrms.forEach((div) => {
    div.classList.add("oculto");
  });

  // Muestra el frm correspondiente
  let divfrm = document.getElementById(frmId);
  divfrm.classList.remove("oculto");
}
let frmNuevaCategoria = document.getElementById("frmNuevaCategoria");
// frmNuevaCategoria.addEventListener(
//   "submit",
//   actualizarDatos("categorias", "POST")
// );
let frmEditarCategoria = document.getElementById("frmEditarCategoria");
// frmEditarCategoria.addEventListener(
//   "submit",
//   actualizarDatos("categorias", "PUT")

let frmBorrarCategoria = document.getElementById("frmBorrarCategoria");
// frmBorrarCategoria.addEventListener(
//   "submit",
//   actualizarDatos("categorias", "DELETE")
// );
let frmNuevoProducto = document.getElementById("frmNuevoProducto");
// frmNuevoProducto.addEventListener(
//   "submit",
//   actualizarDatos("productos", "POST")
// );
let frmEditarProducto = document.getElementById("frmEditarProducto");
// frmEditarProducto.addEventListener(
//   "submit",
//   actualizarDatos("productos", "PUT")
// );
frmEditarProducto.categoriasProductosAEditar.addEventListener(
  "change",
  limpiarProductos
);
frmEditarProducto.categoriasProductosAEditar.addEventListener(
  "change",
  cargarProductos
);
let frmBorrarProducto = document.getElementById("frmBorrarProducto");
// frmBorrarProducto.addEventListener(
//   "submit",
//   actualizarDatos("productos", "DELETE")
// );
let frmNuevoCliente = document.getElementById("frmNuevoCliente");
// frmNuevoCliente.addEventListener(
//   "submit",
//   actualizarDatos("clientes", "POST")
// );
let frmEditarCliente = document.getElementById("frmEditarCliente");
// frmEditarCliente.addEventListener(
//   "submit",
//   actualizarDatos("clientes", "PUT")
// );
let frmBorrarCliente = document.getElementById("frmBorrarCliente");
// frmBorrarCliente.addEventListener(
//   "submit",
//   actualizarDatos("clientes", "DELETE")
// );
let frmNuevoComercial = document.getElementById("frmNuevoComercial");
// frmNuevoComercial.addEventListener(
//   "submit",
//   actualizarDatos("comerciales", "POST")
// );
let frmEditarComercial = document.getElementById("frmEditarComercial");
// frmEditarComercial.addEventListener(
//   "submit",
//   actualizarDatos("comerciales", "PUT")
// );
let frmBorrarComercial = document.getElementById("frmBorrarComercial");
// frmBorrarComercial.addEventListener(
//   "submit",
//   actualizarDatos("comerciales", "DELETE")
// );
function cargaDatos() {
  cargarComerciales();
  cargarClientes();
  cargarCategorias();
  cargarProductos();
}

function cargarComerciales(valorComercial) {
  fetch(
    "https://proyectopracticaobligatoria-default-rtdb.europe-west1.firebasedatabase.app/comerciales.json"
  )
    .then((response) => response.json())
    .then((data) => {
      cargaComerciales(data, valorComercial);
    });
}

function cargarClientes() {
  fetch(
    "https://proyectopracticaobligatoria-default-rtdb.europe-west1.firebasedatabase.app/clientes.json"
  )
    .then((response) => response.json())
    .then((data) => {
      cargaClientes(data);
    });
}

function cargarCategorias() {
  fetch(
    "https://proyectopracticaobligatoria-default-rtdb.europe-west1.firebasedatabase.app/categorias.json"
  )
    .then((response) => response.json())
    .then((data) => {
      cargaCategorias(data);
    });
}

function cargarProductos() {
  fetch(
    "https://proyectopracticaobligatoria-default-rtdb.europe-west1.firebasedatabase.app/productos.json"
  )
    .then((response) => response.json())
    .then((data) => {
      cargaProductos(data);
    });
}

// function actualizarDatos(entrada, respuesta, event) {
//   event.preventDefault();
//   let datos = event.target.value;
//   let url = `https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/${entrada}.json`;
//   fetch(url, {
//     method: `${respuesta}`, //PATH O DELETE
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify(datos),
//   });
//   setTimeout(recuperarDatos, 800);
// }

/*
/**
 * Funciones de carga de datos
 */
/**
 * Carga los comerciales en el frm .
 */
function cargaComerciales(objetoComerciales) {
  let comerciales = Object.values(objetoComerciales);

  comerciales.forEach((comercial, i) => {
    let option = document.createElement("option");
    option.value = i;
    option.setAttribute("id", Object.keys(objetoComerciales)[i]);
    option.text = comercial;
    frmComercial.comerciales.add(option);
    frmEditarComercial.comercialesAEditar.add(option.cloneNode(true));
    frmBorrarComercial.comercialesABorrar.add(option.cloneNode(true));
    frmEditarCliente.comercialesClientesAEditar.add(option.cloneNode(true));
    frmBorrarCliente.comercialesClientesABorrar.add(option.cloneNode(true));
  });
}

/**
 * Carga los clientes del comercial seleccionado en el cuadro de pedido.
 */
function cargaClientes(objetoClientes) {
  let clientesComercial =
    Object.values(objetoClientes)[frmComercial.comerciales.value];

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
    frmEditarCliente.clientesAEditar.add(option.cloneNode(true));
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
    option.index = indice;
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
