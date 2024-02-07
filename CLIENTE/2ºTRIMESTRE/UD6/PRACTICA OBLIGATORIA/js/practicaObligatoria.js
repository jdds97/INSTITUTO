/**
 * Datos iniciales
 */
const comerciales = [
  "Carmen Gómez",
  "Lucía Gil",
  "Andrés Martínez",
  "Antonio Salinas",
];
const clientes = [
  [
    "Alimentación Daniel",
    "Cash El Puerto",
    "Ultramarinos Claudia",
    "Supermercado Nazareno",
    "Alimentación Guzmán",
    "Supermercado Superprecio",
    "Kiosko La Espera",
    "M&B Alimentación",
    "Ultramarinos Vistabella",
  ],
  [
    "Ultramarinos La Delicia",
    "Supermercado La Esquinita",
    "Alimentación Gómez",
    "Supermercado El Veloz",
    "Kiosko 24h Desavío",
    "Tienda La Manchega",
    "Ultramarinos Tajo",
    "Alimentación Víctor",
  ],
  [
    "Alimentación Millán",
    "Supermercado La Guinda",
    "Kiosko Callejón",
    "Tienda Cantero",
    "Ultramarinos Mérida",
    "Alimentación Moreno",
    "Cash El Hostelero",
  ],
  [
    "Kiosko La Lumbre",
    "Tienda Abad",
    "Ultramarinos Hernández",
    "Alimentación Cervantes",
    "Cash El Panal",
    "CyR Alimentación",
    "Supermercado Los Mosqueteros",
    "Alimentación Carpanta",
    "Supermercado El Percebe",
  ],
];
const categorias = ["Aceite", "Encurtidos", "Salsas"];

const catalogo = new Catalogo();
const gestor = new Gestor(comerciales, clientes, categorias);
/**
 * Francotirador y addEventListener principales
 */
let cuadroPedido = document.getElementById("pedido");
let frmComercial = document.getElementById("frmComercial");
frmComercial.comerciales.addEventListener("change", cargaClientes);
let frmControles = document.getElementById("frmControles");
frmControles.categorias.addEventListener("change", cargaProductos);
/**
 * Funciones
 */
/**
 * Carga los datos iniciales en el catálogo.
 * @function cargaDatosIniciales
 * @memberof catalogo
 * @returns {void}
 */
function cargaDatosIniciales() {
  catalogo.addProducto(1, "Aceite Oliva Virgen Extra 1l (Caja 20)", 178.15, 0);
  catalogo.addProducto(
    2,
    "Aceite Oliva Virgen Extra 700ml (Caja 30)",
    208.5,
    0
  );
  catalogo.addProducto(3, "Aceite Oliva Virgen Extra 5l (Caja 6)", 247.5, 0);
  catalogo.addProducto(4, "Aceite Oliva 1l (Caja 20)", 109.25, 0);
  catalogo.addProducto(5, "Aceituna Gordal 340gr (Caja de 50)", 180.75, 1);
  catalogo.addProducto(
    6,
    "Aceituna Gordal deshuesada 350gr (Caja de 50)",
    205.45,
    1
  );
  catalogo.addProducto(7, "Aceituna Manzanilla 250 gr (Caja de 50)", 124.85, 1);
  catalogo.addProducto(
    8,
    "Aceituna Manzanilla deshuesada 250 gr (Caja de 50)",
    141.35,
    1
  );
  catalogo.addProducto(9, "Aceituna Negra 350gr (Caja de 50)", 87.5, 1);
  catalogo.addProducto(
    10,
    "Aceituna Negra deshuesada 350gr (Caja de 50)",
    99.35,
    1
  );
  catalogo.addProducto(11, "Mayonesa 350gr (Caja de 50)", 124.45, 2);
  catalogo.addProducto(12, "Mayonesa 1Kg (Caja de 30)", 178.65, 2);
  catalogo.addProducto(13, "Salsa Cocktail 350gr (Caja de 50)", 99.65, 2);
  catalogo.addProducto(14, "Salsa Gaucha 350gr (Caja de 50)", 124.85, 2);
  catalogo.addProducto(15, "Salsa Alioli 350 gr (Caja de 50)", 113.75, 2);
  catalogo.addProducto(16, "Salsa Barbacoa 500gr (Caja de 30)", 67.5, 2);
}
/**
 * Función que se ejecuta cuando el contenido del documento HTML ha sido cargado.
 * Comprueba si existe un objeto gestor y si tiene comerciales registrados.
 * Si se cumplen las condiciones, establece el valor del primer comercial en el formulario y carga los clientes.
 */
function contentLoaded() {
  document.addEventListener("DOMContentLoaded", () => {
    if (gestor && gestor.comerciales && gestor.comerciales.length > 0) {
      frmComercial.comerciales.value = gestor.comerciales[0];
      cargaClientes();
      cargaProductos();
    }
  });
}

/**
 * Carga los comerciales en el formulario y carga los clientes del primer comercial.
 *
 */
function cargaComerciales() {
  for (let comercial in gestor.clientes) {
    let option = document.createElement("option");
    option.value = comercial;
    option.text = comercial;
    frmComercial.comerciales.add(option);
  }
}

/**
 * Carga los clientes del comercial seleccionado en el cuadro de pedido.
 */
function cargaClientes() {
  document.querySelectorAll(".cliente").forEach((cliente) => cliente.remove());
  let comercialSeleccionado = frmComercial.comerciales.value;
  gestor.clientes[comercialSeleccionado].forEach((cliente) => {
    let cuadroCliente = document.createElement("div");
    cuadroCliente.innerHTML = cliente;
    cuadroCliente.classList.add("pagado");
    cuadroCliente.classList.add("cliente");
    frmComercial.parentNode.append(cuadroCliente);
    cuadroCliente.addEventListener("click", nuevoPedido);
  });
  primerTitulo();
}

/**
 * Añade un título h2 al cuadro de pedido con el nombre del cliente seleccionado.
 */
function primerTitulo() {
  cuadroPedido.querySelectorAll("h2").forEach((cliente) => cliente.remove());
  let comercialSeleccionado = frmComercial.comerciales.value;
  let h2 = document.createElement("h2");
  h2.innerText = "Cliente " + gestor.clientes[comercialSeleccionado][0];
  cuadroPedido.firstElementChild.after(h2);
}

function cargaCategorias() {
  gestor.categorias.forEach((categoria, indice) => {
    let option = document.createElement("option");
    option.index = indice;
    option.value = indice;
    option.textContent = categoria;
    frmControles.categorias.add(option);
  });
}
function cargaProductos() {
  frmControles.productos
    .querySelectorAll("option")
    .forEach((producto) => producto.remove());
  let categoriaSeleccionada = frmControles.categorias.value;
  let productos = catalogo.productos.filter(
    (producto) => producto.idCategoria === parseInt(categoriaSeleccionada)
  );
  productos.forEach((producto) => {
    let option = document.createElement("option");
    option.value = producto;
    option.textContent = producto.nombreProducto;
    frmControles.productos.add(option);
  });
}
/**
 * Función que marca un cliente como pendiente y muestra su título en el cuadro de pedido.
 * @param {Event} event - El evento que desencadena la función.
 */

function nuevoPedido(event) {
  cuadroPedido.querySelectorAll("h2").forEach((cliente) => cliente.remove());
  let tituloCliente = document.createElement("h2");
  tituloCliente.innerText = "Cliente " + event.currentTarget.innerText;
  cuadroPedido.append(tituloCliente);
  event.target.addEventListener("click", pagado);
}
/**
 * Función que se ejecuta cuando se marca un elemento como pagado.
 * Elimina el texto de todos los elementos h2 dentro de cuadroPedido si cuadroCliente no tiene la clase 'pendiente'.
 *
 * @param {Event} event - El evento que desencadenó la función.
 */
function pagado(event) {
  // Obtener todos los elementos h2 dentro de cuadroPedido
  let h2Elements = cuadroPedido.querySelectorAll("h2");

  // Iterar sobre cada elemento h2
  h2Elements.forEach((h2) => {
    // Si cuadroCliente tiene la clase 'pagado', eliminar el texto del elemento h2
    if (!event.target.classList.contains("pendiente")) {
      h2.innerText = "";
    }
  });
}
contentLoaded();
cargaComerciales();
cargaDatosIniciales();
cargaCategorias();
