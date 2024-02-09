/*
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
let unidades = document.getElementById("teclado").querySelectorAll(".tecla");
unidades.forEach((unidad) => {
  unidad.addEventListener("click", añadirPedido);
});

/**
 * Funciones
 */
/**
 * Carga los datos iniciales en el catálogo.
 * @function cargaDatosIniciales
 * @memberof catalogo
 * @returns {void}
 */
/**
 * Carga los datos iniciales del catálogo.
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
      frmControles.categorias.value = gestor.categorias[0];
      gestor.comercialActual = gestor.comerciales[0];
      let cliente = gestor.clientes[gestor.comerciales[0]][0];
      let indice = gestor.clientes[gestor.comerciales[0]].indexOf(cliente);
      gestor.clienteActual = indice;
      cargaClientes();
      cargaCategorias();
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
  // Elimina el título h2 del cuadro de pedido si lo hay y pintar el primero del primer comercial
  primerTitulo();
  // Elimina los clientes anteriores
  limpiarClienteAnterior();
  //Quitar total
  cuadroPedido.querySelectorAll("h4").forEach((total) => total.remove());
  if (cuadroPedido.querySelector("table") !== null)
    cuadroPedido.querySelector("table").remove();
  document.querySelectorAll(".cliente").forEach((cliente) => cliente.remove());
  gestor.comercialActual = frmComercial.comerciales.value;
  gestor.clientes[gestor.comercialActual].forEach((cliente, i) => {
    let cuadroCliente = document.createElement("div");
    cuadroCliente.innerHTML = cliente.nombre;
    cuadroCliente.classList.add("pagado");
    cuadroCliente.classList.add("cliente");
    cuadroCliente.value = i;
    frmComercial.parentNode.append(cuadroCliente);
    if (cliente.cuentaAbierta) {
      cuadroCliente.classList.add("pendiente");
    }
    cuadroCliente.addEventListener("click", clienteSeleccionado);
  });
}

/**
 * Añade un título h2 al cuadro de pedido con el nombre del cliente seleccionado.
 *
 * @function primerTitulo
 * @memberof frmComercial
 * @returns {void}
 * @todo Eliminar los títulos h2 anteriores.
 * @todo Crear un nuevo título h2 con el nombre del cliente seleccionado.
 * @todo Llamar a la función pintarPedido.
 * @todo Añadir un evento 'click' a cuadroCliente que llame a la función pagado.
 * @todo Añadir un evento 'click' a cuadroCliente que llame a la función clienteSeleccionado.
 * @todo Añadir la clase 'pendiente' a cuadroCliente si el cliente tiene la cuenta abierta.
 * @todo Añadir la clase 'pagado' a cuadroCliente si el cliente no tiene la cuenta abierta.
 */

function primerTitulo() {
  // Eliminar los títulos h2 anteriores
  cuadroPedido.querySelectorAll("h2").forEach((cliente) => cliente.remove());
  let comercialSeleccionado = frmComercial.comerciales.value;
  let h2 = document.createElement("h2");
  h2.innerText = "Cliente " + gestor.clientes[comercialSeleccionado][0].nombre;
  cuadroPedido.firstElementChild.after(h2);
  pintarPedido();
}
/**
 * Carga las categorías en el formulario.
 * @function cargaCategorias
 * @memberof frmControles
 * @returns {void}
 */
function cargaCategorias() {
  gestor.categorias.forEach((categoria, indice) => {
    let option = document.createElement("option");
    option.index = indice;
    option.value = indice;
    option.textContent = categoria;
    frmControles.categorias.add(option);
  });
}

/**
 * Carga los productos de la categoría seleccionada en el formulario.
 *
 * @function cargaProductos
 * @memberof frmControles
 * @returns {void}
 *
 */
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
    option.value = producto.idProducto;
    option.textContent = producto.nombreProducto;
    frmControles.productos.add(option);
  });
}
/**
 * Función que marca un cliente como pendiente y muestra su título en el cuadro de pedido.
 * @param {Event} event - El evento que desencadena la función.
 */

function clienteSeleccionado(event) {
  limpiarClienteAnterior();
  cuadroPedido.querySelectorAll("h2").forEach((cliente) => cliente.remove());
  cuadroPedido.querySelectorAll("table").forEach((tabla) => tabla.remove());

  let cliente = gestor.clientes[gestor.comerciales[0]][0];
  let indice = gestor.clientes[gestor.comerciales[0]].indexOf(cliente);
  gestor.clienteActual = indice;
  gestor.clienteActual = event.currentTarget.value;
  let tituloCliente = document.createElement("h2");
  tituloCliente.innerText = "Cliente " + event.currentTarget.innerText;
  cuadroPedido.append(tituloCliente);
  pintarPedido();

  // event.target.addEventListener("click", pagado);
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
function añadirPedido(event) {
  debugger;
  gestor.clientes[gestor.comercialActual][
    gestor.clienteActual
  ].cuentaAbierta = true;
  comprobarCuentaClienteActual();
  let divClienteActual =
    document.querySelectorAll(".cliente")[gestor.clienteActual];
  divClienteActual.classList.add("pendiente");
  let unidades = event.target.value;
  let idProducto = frmControles.productos.value;
  gestor.añadirPedidos(unidades, idProducto);
  pintarPedido();
}
function limpiarClienteAnterior() {
  for (let i = 1; i < cuadroPedido.children; i++) {
    cuadroPedido.remove(i);
  }
}
//si la cuenta esta a false no pinta el pedido
function pintarPedido() {
  debugger;

  limpiarClienteAnterior();
  let pedidos = gestor.pedidos[gestor.comercialActual][gestor.clienteActual];
  let precio = 0;
  pedidos.forEach((pedido) => {
    precio += catalogo.calcularPrecio(pedido.idProducto, pedido.unidades);
  });
  let total = document.createElement("h4");
  total.innerHTML = "TOTAL : ";
  if (precio > 0) {
    cuadroPedido.querySelectorAll("h4").forEach((total) => total.remove());
    cuadroPedido.querySelectorAll(".boton").forEach((boton) => boton.remove());
    total.innerHTML += precio + "€";
    let h2Pedido = cuadroPedido.querySelector("h2");
    h2Pedido.append(total);
    creacionTabla();
  } else if (
    precio === 0 &&
    gestor.clientes[gestor.comercialActual][gestor.clienteActual].cuentaAbierta
  ) {
    cuadroPedido.querySelectorAll("h4").forEach((total) => total.remove());
    cuadroPedido.querySelectorAll(".boton").forEach((boton) => boton.remove());
    total.innerHTML += precio + "€";
    let h2Pedido = cuadroPedido.querySelector("h2");
    h2Pedido.append(total);
    creacionTabla();
  }
}
function creacionTabla() {
  debugger;
  if (cuadroPedido.querySelector("table") !== null)
    cuadroPedido.querySelector("table").remove();
  let tabla = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let caption = tabla.createCaption();
  caption.innerHTML = "PEDIDO ENVIADO Y COBRADO";
  caption.classList.add("boton");
  caption.addEventListener("click", terminarPedido);
  let modificadorTh = document.createElement("th");
  modificadorTh.textContent = "Modificar ";
  thead.append(modificadorTh);
  let unidadesTh = document.createElement("th");
  unidadesTh.textContent = "Uds.";
  thead.append(unidadesTh);
  let idProductoTh = document.createElement("th");
  idProductoTh.textContent = "Id.";
  thead.append(idProductoTh);
  let productoTh = document.createElement("th");
  productoTh.textContent = "Producto";
  thead.append(productoTh);
  let precioTh = document.createElement("th");
  precioTh.textContent = "Precio";
  thead.append(precioTh);
  tabla.append(thead);
  tabla.append(tbody);
  cuadroPedido.append(tabla);

  añadirPedidos(tabla);
}
function añadirPedidos(tabla) {
  let pedidos = gestor.pedidos[gestor.comercialActual][gestor.clienteActual];
  pedidos.forEach((pedido) => {
    let fila = tabla.insertRow(0);
    let modificador = fila.insertCell(0);
    let unidades = fila.insertCell(1);
    let idProducto = fila.insertCell(2);
    let productoTd = fila.insertCell(3);
    let precio = fila.insertCell(4);
    let mas = document.createElement("button");
    mas.classList.add("modificador");
    mas.innerHTML = "+";
    mas.addEventListener("click", sumarPedido);
    let menos = document.createElement("button");
    menos.classList.add("modificador");
    menos.innerText = "-";
    menos.addEventListener("click", restarPedido);
    modificador.append(mas);
    modificador.append(menos);
    let producto = catalogo.buscarProducto(pedido.idProducto);
    productoTd.textContent =
      producto.nombreProducto + "(ud:" + producto.precioUnidad + " €)";
    unidades.textContent = pedido.unidades;
    idProducto.textContent = pedido.idProducto;
    precio.textContent =
      catalogo.calcularPrecio(pedido.idProducto, pedido.unidades) + "€";
  });
}
function sumarPedido() {
  debugger;
  let pedido = gestor.pedidos[gestor.comercialActual][gestor.clienteActual];
  pedido.forEach((lineaPedido) => {
    if (
      lineaPedido.idProducto ==
      this.parentElement.parentElement.cells[2].innerText
    ) {
      lineaPedido.unidades++;
    }
  });
  pintarPedido();
}
function restarPedido(event) {
  debugger;
  let pedido = gestor.pedidos[gestor.comercialActual][gestor.clienteActual];
  pedido.forEach((lineaPedido) => {
    if (
      lineaPedido.idProducto ==
      this.parentElement.parentElement.cells[2].innerText
    ) {
      if (lineaPedido.unidades == 1) {
        let respuesta = confirm(
          "¿Estás seguro que quieres eliminar este producto del pedido?"
        );
        if (respuesta) {
          let indice = pedido.indexOf(lineaPedido);

          pedido.splice(indice, 1);
          event.target.parentElement.parentElement.remove();
          pintarPedido();
        } else {
          return; //No hace nada NO ELIMINA
        }
      }
      lineaPedido.unidades--;
    }
  });
  creacionTabla();
}

function terminarPedido() {
  debugger;
  let respuesta = confirm(
    "¿Estás seguro que quieres dar por finalizado este pedido?"
  );
  if (respuesta) {
    gestor.clienteActual.cuentaAbierta = false;
    comprobarCuentaClienteActual();
    cuadroPedido.querySelectorAll("h4").forEach((total) => total.remove());
    cuadroPedido.querySelectorAll(".boton").forEach((boton) => boton.remove());
    cuadroPedido.querySelector("table").remove();
    gestor.eliminarPedidos();
  }
}
function comprobarCuentaClienteActual() {
  let divClienteActual =
    document.querySelectorAll(".cliente")[gestor.clienteActual];
  if (!gestor.clienteActual.cuentaAbierta) {
    divClienteActual.classList.remove("pendiente");
  }
}
contentLoaded();
cargaComerciales();
cargaDatosIniciales();
