document.addEventListener("DOMContentLoaded", async () => {
  cargarCategorias().then((categorias) => {
    cargarProductos(categorias);
  });
});
let frmControles = document.getElementById("frmControles");

/**
 * Carga los datos de las categorías desde una API.
 * @returns {Promise<Object>} Una promesa que se resuelve con los datos de las categorías.
 */
async function cargarCategorias() {
  return fetch(
    "https://ejercicio2-f432d-default-rtdb.europe-west1.firebasedatabase.app/categorias.json"
  )
    .then((response) => response.json())
    .then(cargaCategorias)
    .catch((error) => console.log(error));
}
/**
 * Carga las categorías en el formulario.
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
 * Carga los datos de los productos desde una API.
 * @returns {Promise<Object>} Una promesa que se resuelve con los datos de los productos.
 */
async function cargarProductos() {
  return fetch(
    "https://ejercicio2-f432d-default-rtdb.europe-west1.firebasedatabase.app/productos.json"
  )
    .then((response) => response.json())
    .then(cargaProductos)
    .catch((error) => console.log(error));
}
/**
 * Carga los productos de la categoría seleccionada en el formulario.
 */

function cargaProductos(productos) {
  let categoriaSeleccionada = frmControles.categorias.selectedOptions[0].value;
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
    if (
      productosSeleccionados.length !== frmControles.categorias.options.length
    ) {
      let option = document.createElement("option");
      option.setAttribute("id", producto.idProducto);
      option.textContent = producto.nombreProducto;
      frmControles.productos.add(option);
    }
  });
  cargarProductosGestion();
}

frmControles.categorias.addEventListener("change", () => {
  frmControles.productos.innerHTML = "";
  limpiarProductosGestion();
  cargarProductos();
});
frmControles.productos.addEventListener("change", () => {
  limpiarProductosGestion();
  cargarProductosGestion();
});

function cargarProductosGestion() {
  let productoSeleccionado = frmControles.productos.selectedOptions[0];
  let salida = document.getElementById("datosProducto");

  salida.innerHTML = "Id producto : " + productoSeleccionado.id + "</br>";
  salida.innerHTML += "Nombre producto : " + productoSeleccionado.value;
}
/**
 * Limpia los productos del frm.
 */
function limpiarProductos() {
  frmControles.productos
    .querySelectorAll("option")
    .forEach((producto) => producto.remove());
}
/**
 * Limpia los productos del formulario de gestión de productos.
 */
function limpiarProductosGestion() {
  let salida = document.getElementById("datosProducto");
  salida.innerHTML = "";
}
