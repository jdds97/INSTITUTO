/*
 * Datos iniciales
 */
let frmComercial = document.getElementById("frmComercial");
frmComercial.comerciales.addEventListener("change", limpiarClientes);
frmComercial.comerciales.addEventListener("change", cargarClientes);

let frmControles = document.getElementById("frmControles");
frmControles.categorias.addEventListener("change", cargarCategorias);
frmControles.categorias.addEventListener("change", limpiarCategorias);
frmControles.categorias.addEventListener("change", limpiarProductos);

function cargaDatos() {
  cargarComerciales();
  cargarClientes();
  cargarCategorias();
  cargarProductos();
}

function cargarComerciales() {
  fetch(
    "https://proyectopracticaobligatoria-default-rtdb.europe-west1.firebasedatabase.app/comerciales.json"
  )
    .then((response) => response.json())
    .then((data) => {
      cargaComerciales(data);
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

// let formularioNuevaCategoria = document.getElementById("frmNuevaCategoria");
// formularioNuevaCategoria.addEventListener(
//   "submit",
//   actualizarDatos("categorias", "POST", event)
// );
// let formularioBorrarCategoria = document.getElementById("frmBorrarCategoria");
// formularioBorrarCategoria.addEventListener(
//   "submit",
//   actualizarDatos("categorias", "DELETE")
// );
// let formularioNuevoProducto = document.getElementById("frmNuevoProducto");
// formularioNuevoProducto.addEventListener(
//   "submit",
//   actualizarDatos("productos", "POST")
// );
// let formularioBorrarProducto = document.getElementById("frmBorrarProducto");
// formularioBorrarProducto.addEventListener(
//   "submit",
//   actualizarDatos("productos", "DELETE")
// );
// let formularioNuevoCliente = document.getElementById("frmNuevoCliente");
// formularioNuevoCliente.addEventListener(
//   "submit",
//   actualizarDatos("clientes", "POST")
// );
// let formularioBorrarCliente = document.getElementById("frmBorrarCliente");
// formularioBorrarCliente.addEventListener(
//   "submit",
//   actualizarDatos("clientes", "DELETE")
// );
// let formularioNuevoComercial = document.getElementById("frmNuevoComercial");
// formularioNuevoComercial.addEventListener(
//   "submit",
//   actualizarDatos("comerciales", "POST")
// );
// let formularioBorrarComercial = document.getElementById("frmBorrarComercial");
// formularioBorrarComercial.addEventListener(
//   "submit",
//   actualizarDatos("comerciales", "DELETE")
// );

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
 * Carga los comerciales en el formulario .
 */
function cargaComerciales(objetoComerciales) {
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
function cargaClientes(objetoClientes) {
  let clientesComercial =
    Object.values(objetoClientes)[frmComercial.comerciales.value];

  clientesComercial.forEach((cliente, i) => {
    let cuadroCliente = document.createElement("div");
    cuadroCliente.innerHTML = Object.values(clientesComercial)[i];
    cuadroCliente.value = i;
    cuadroCliente.setAttribute("idComercial", Object.keys(objetoClientes));
    cuadroCliente.setAttribute("id", i);
    frmComercial.parentNode.append(cuadroCliente);
    cuadroCliente.classList.add("cliente");
    cuadroCliente.classList.add("pagado");
  });
}

/**
 * Carga las categorías en el formulario.
 */
function cargaCategorias(objetoCategorias) {
  let categorias = Object.values(objetoCategorias);
  categorias.forEach((categoria, indice) => {
    let option = document.createElement("option");
    option.index = indice;
    option.value = indice;
    console.log(Object.keys(objetoCategorias)[indice]);
    option.setAttribute("id", Object.keys(objetoCategorias)[indice]);
    option.textContent = categoria;
    if (frmControles.categorias.options.length < categorias.length)
      frmControles.categorias.add(option);
  });
}

/**
 * Carga los productos de la categoría seleccionada en el formulario.
 */

function cargaProductos(productos) {
  let categoriaSeleccionada = frmControles.categorias.value;
  let productosSeleccionados = Object.values(productos).filter((producto) => {
    return producto.idCategoria == categoriaSeleccionada;
  });
  productosSeleccionados.forEach((producto) => {
    let option = document.createElement("option");
    option.value = producto.idProducto;
    option.textContent = producto.nombreProducto;
    frmControles.productos.add(option);
  });
}
/**
 * Limpia los comerciales del formulario.
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
 * Limpia las categorías del formulario.
 */
function limpiarCategorias() {
  frmControles.categorias
    .querySelectorAll("option")
    .forEach((categoria) => categoria.remove());
}
/**
 * Limpia los productos del formulario.
 */
function limpiarProductos() {
  frmControles.productos
    .querySelectorAll("option")
    .forEach((producto) => producto.remove());
}

cargaDatos();
