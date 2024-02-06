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
//Agregamos el titulo de pedido al 3 cuadro
let cuadroPedido = document.getElementById("pedido");
let h1 = document.createElement("h1");
let formComercial = document.getElementById("frmComercial");
formComercial.addEventListener("change", cargarComerciales);
formComercial.comerciales.addEventListener("change", limpiarClientes);
h1.innerText = "Pedido";
cuadroPedido.prepend(h1);

/**
 * Carga los datos iniciales en el catálogo.
 * @function cargaDatosIniciales
 * @memberof catalogo
 * @returns {void}
 */
/**
 * Carga los datos iniciales en el catálogo.
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
cargaDatosIniciales();
/**
 * Carga los comerciales en el formulario y carga los clientes del primer comercial.
 * @param {object} gestor - El objeto gestor que contiene la lista de clientes.
 */
function cargarComerciales(gestor) {
  for (let comercial in gestor.clientes) {
    let option = document.createElement("option");
    option.value = comercial;
    option.text = comercial;
    formComercial.comerciales.add(option);
  }
  // Cargar los clientes del primer comercial
  let primerComercial = formComercial.comerciales.options[0].value;
  cargarClientes(primerComercial, gestor);
}

/**
 * Limpia los clientes antiguos y carga nuevos clientes según el comercial seleccionado.
 * @function limpiarClientes
 */
function limpiarClientes() {
  let comercialSeleccionado = formComercial.comerciales.value;
  // Primero, eliminar los clientes antiguos
  document.querySelectorAll(".cliente").forEach((cliente) => cliente.remove());
  cargarClientes(comercialSeleccionado, gestor);
  primerTitulo(comercialSeleccionado, gestor);
}
/**
 * Añade un título h2 al cuadro de pedido con el nombre del cliente seleccionado.
 * @param {number} comercialSeleccionado - El índice del cliente seleccionado en el arreglo de clientes del gestor.
 * @param {object} gestor - El objeto gestor que contiene el arreglo de clientes.
 */
function primerTitulo(comercialSeleccionado, gestor) {
  debugger;
  let h2 = document.createElement("h2");
  h2.innerText = gestor.clientes[comercialSeleccionado][0];
  cuadroPedido.firstChild.after(h2);
}
/**
 * Carga los clientes del gestor seleccionado en el cuadro de pedido.
 * @param {string} comercialSeleccionado - El nombre del comercial seleccionado.
 * @param {object} gestor - El objeto gestor que contiene la lista de clientes.
 */
function cargarClientes(comercialSeleccionado, gestor) {
  cuadroPedido.querySelectorAll("h2").forEach((cliente) => cliente.remove());
  gestor.clientes[comercialSeleccionado].forEach((cliente) => {
    let cuadroCliente = document.createElement("div");
    cuadroCliente.innerHTML = cliente;
    cuadroCliente.classList.add("pagado");
    cuadroCliente.classList.add("cliente");
    formComercial.parentNode.append(cuadroCliente);
    cuadroCliente.addEventListener("click", pendiente);
  });
}
/**
 * Función que marca un cliente como pendiente y muestra su título en el cuadro de pedido.
 * @param {Event} event - El evento que desencadena la función.
 */
function pendiente(event) {
  cuadroPedido.querySelectorAll("h2").forEach((cliente) => cliente.remove());
  let tituloCliente = document.createElement("h2");
  tituloCliente.innerText = "Cliente " + event.target.innerText;
  cuadroPedido.append(tituloCliente);
  event.target.classList.add("pendiente");
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
cargarComerciales(gestor);
