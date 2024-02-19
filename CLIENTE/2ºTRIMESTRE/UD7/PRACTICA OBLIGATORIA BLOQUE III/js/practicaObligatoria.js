/*
 * Datos iniciales
 */
let frmComercial = document.getElementById("frmComercial");
frmComercial.comerciales.addEventListener("change", cargaDatosIniciales);
frmComercial.comerciales.addEventListener("change", cargaClientes);
function cargaDatosIniciales() {
  fetch(
    "https://proyectopracticaobligatoria-default-rtdb.europe-west1.firebasedatabase.app/.json"
  )
    .then((response) => response.json())
    .then(
      (data) => {
        cargaComerciales(Object.values(data.comerciales)),
          cargaClientes(Object.values(data.clientes));
      }
      // cargaClientes(data.clientes),
      // añadirProductos(data.productos)
    );
}

// function actualizarDatos(entrada,respuesta,event) {
//   event.preventDefault();
//   let url = `https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/${entrada}.json`;
//   fetch(url, {
//     method: `${respuesta}`,//PATH O DELETE
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify(datos),
//   })
//   setTimeout(recuperarDatos, 800);
// }

// .then((response) => response.json())
//     .then(cargarDatos);
//   fetch(apiRest + fichero + idFirebase, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//   }).then((res) => res.json());
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(update),
//   };
// }
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
// const gestor = new Gestor(comerciales, clientes, categorias);
/**
 * Francotirador y addEventListener principales
 */

// frmComercial.comerciales.addEventListener(
//   "change",
//   limpiarPedidoClienteAnterior
// );
// frmComercial.comerciales.addEventListener("change", primerTitulo);

// let frmControles = document.getElementById("frmControles");
// frmControles.categorias.addEventListener("change", limpiarProductos);
// frmControles.categorias.addEventListener("change", cargaProductos);

// let unidades = document.getElementById("teclado").querySelectorAll(".tecla");
// unidades.forEach((unidad) => {
//   unidad.addEventListener("click", añadirPedido);
// });

/**
 * Funciones
 */
/**
 * Carga los datos iniciales en el catálogo.
 *
 * Esta función añade productos al catálogo utilizando el método addProducto.
 * Cada producto se define con un identificador, nombre, precio y tipo.
 * El tipo de producto se representa con un número entero, donde:
 *  - 0: Aceite de oliva virgen extra
 *  - 1: Aceitunas
 *  - 2: Salsas
 */

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
      cargaComerciales();
      cargaClientes();
      cargaCategorias();
      cargaProductos();
      primerTitulo();
    }
  });
}

/*
 *Funciones de limpieza clientes
 */
/**
 * Limpia el cliente anterior.
 */
function limpiarClienteAnterior() {
  let h2 = cuadroPedido.querySelector("h2");
  if (h2 !== null) h2.remove();
  let h3 = cuadroPedido.querySelector("h3");
  if (h3 !== null) h3.remove();
  let tabla = cuadroPedido.querySelector("table");
  if (tabla !== null) tabla.remove();
}
/**
 * Limpia el pedido y el cliente anterior.
 */
function limpiarPedidoClienteAnterior() {
  let h2 = cuadroPedido.querySelectorAll("h2");
  h2.forEach((h2) => {
    if (h2 !== null) h2.remove();
  });
  let h3 = cuadroPedido.querySelector("h3");
  if (h3 !== null) h3.remove();
  let tabla = cuadroPedido.querySelector("table");
  if (tabla !== null) tabla.remove();
  let clientes = document.querySelectorAll(".cliente");
  clientes.forEach((cliente) => cliente.remove());
}
/**
 * Limpia los productos del formulario.
 */
function limpiarProductos() {
  frmControles.productos
    .querySelectorAll("option")
    .forEach((producto) => producto.remove());
}

/**
 * Funciones de carga de datos
 */
/**
 * Carga los comerciales en el formulario .
 */
function cargaComerciales(comerciales) {
  comerciales.forEach((comercial, i) => {
    let option = document.createElement("option");
    option.value = i;
    option.text = comercial;
    frmComercial.comerciales.add(option);
  });
}

/**
 * Carga los clientes del comercial seleccionado en el cuadro de pedido.
 */
function cargaClientes(clientes) {
  limpiarClienteAnterior();
  let clientesComercial = Object.values(
    clientes[frmComercial.comerciales.value]
  );
  clientesComercial.forEach((cliente, i) => {
    let cuadroCliente = document.createElement("div");
    cuadroCliente.innerHTML = cliente;
    cuadroCliente.value = i;
    frmComercial.parentNode.append(cuadroCliente);
    cuadroCliente.classList.add("cliente");
    cuadroCliente.classList.add("pagado");
    cuadroCliente.addEventListener("click", limpiarClienteAnterior);

    // cuadroCliente.addEventListener("click", limpiarClienteAnterior);
    // cuadroCliente.addEventListener("click", clienteSeleccionado);
  });
}
/**
 * Carga los productos de la categoría seleccionada en el formulario.
 */

function cargaProductos() {
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
 * Carga las categorías en el formulario.
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
 * Funciones de cliente actual
 */
/**
 * Añade un título h2 al cuadro de pedido con el nombre del cliente seleccionado.
 */

function primerTitulo() {
  let comercialSeleccionado = frmComercial.comerciales.value;
  let h2 = document.createElement("h2");
  h2.innerText = "Cliente " + gestor.clientes[comercialSeleccionado][0].nombre;
  cuadroPedido.firstElementChild.after(h2);
}

/**
 * Función que marca un cliente como pendiente y muestra su título en el cuadro de pedido.
 * @param {Event} event - El evento que desencadena la función.
 */

function clienteSeleccionado(event) {
  gestor.clienteActual = event.target.value;
  let tituloCliente = document.createElement("h2");
  tituloCliente.innerText = "Cliente " + event.currentTarget.innerText;
  cuadroPedido.append(tituloCliente);
  if (
    gestor.clientes[gestor.comercialActual][gestor.clienteActual].cuentaAbierta
  ) {
    let pedidos = gestor.pedidos[gestor.comercialActual][gestor.clienteActual];

    if (pedidos.length === 0) {
      let h3 = document.createElement("h3");
      h3.innerHTML = "TOTAL : 0€";
      cuadroPedido.append(h3);
    }
    creacionTabla();
  }
}
/**
 * Función que comprueba si la cuenta del cliente actual está abierta y la marca como pagada si no lo está y elimina la clase 'pendiente'.
 */
function comprobarCuentaClienteActual() {
  let divClienteActual =
    document.querySelectorAll(".cliente")[gestor.clienteActual];

  if (
    !gestor.clientes[gestor.comercialActual][gestor.clienteActual].cuentaAbierta
  ) {
    divClienteActual.classList.remove("pendiente");
    divClienteActual.classList.add("pagado");
  }
}
/**
 * Funciones de pedidos clientes
 */
/**
 * Función que se ejecuta cuando se marca un elemento como pagado.
 * Elimina el texto de todos los elementos h2 dentro de cuadroPedido si cuadroCliente no tiene la clase 'pendiente'.
 *
 * @param {Event} event - El evento que desencadenó la función.
 */
function añadirPedido(event) {
  gestor.clientes[gestor.comercialActual][
    gestor.clienteActual
  ].cuentaAbierta = true;
  let divClienteActual =
    document.querySelectorAll(".cliente")[gestor.clienteActual];
  divClienteActual.classList.add("pendiente");
  let unidades = event.target.value;
  let idProducto = frmControles.productos.value;
  gestor.añadirPedidos(unidades, idProducto);
  if (document.querySelector("table") === null) {
    creacionTabla();
  } else {
    document.querySelector("table").remove();
    document.querySelector("h3").remove();
    creacionTabla();
  }
}

/**
 * Función que crea una tabla con los pedidos del cliente actual.
 */
function creacionTabla() {
  let tabla = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let caption = document.createElement("caption");
  caption.innerHTML = "PEDIDO ENVIADO Y COBRADO";
  caption.classList.add("boton");
  caption.addEventListener("click", terminarPedido);
  tabla.append(caption);
  let modificadorTh = document.createElement("th");
  modificadorTh.textContent = "Modificar ";
  thead.append(modificadorTh);
  let unidadesTh = document.createElement("th");
  unidadesTh.textContent = "Uds.";
  thead.append(unidadesTh);
  let idProductoTh = document.createElement("th");
  idProductoTh.textContent = "Id.";
  thead.append(idProductoTh);
  tabla.append(thead);
  tabla.append(tbody);
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
/**
 * Función que añade los pedidos del cliente actual a la tabla.
 * @param {HTMLTableElement} tabla - La tabla en la que se añadirán los pedidos.
 */
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
  actualizarPrecio();
}
/**
 * Funciones de modificación pedido
 */
/**
 * Función que actualiza el precio total del pedido.
 */
function actualizarPrecio() {
  debugger;
  let pedidos = gestor.pedidos[gestor.comercialActual][gestor.clienteActual];
  let precio = 0;
  let clienteh2 = cuadroPedido.querySelector("h2");
  let total = document.createElement("h3");

  pedidos.forEach((pedido) => {
    precio += catalogo.calcularPrecio(pedido.idProducto, pedido.unidades);
    if (precio > 0) {
      total.innerHTML = "TOTAL : " + precio + "€";
      clienteh2.after(total);
    } else if (
      precio === 0 &&
      gestor.clientes[gestor.comercialActual][gestor.clienteActual]
        .cuentaAbierta
    ) {
      total.innerHTML = "TOTAL : " + precio + "€";
      clienteh2.after(total);
    }
  });
}
/**
 * Función que suma una unidad a un pedido.
 */
function sumarPedido() {
  debugger;
  document.querySelector("table").remove();
  document.querySelector("h3").remove();
  let pedido = gestor.pedidos[gestor.comercialActual][gestor.clienteActual];
  pedido.forEach((lineaPedido) => {
    if (
      lineaPedido.idProducto ==
      this.parentElement.parentElement.cells[2].innerText
    ) {
      lineaPedido.unidades++;

      creacionTabla();
    }
  });
}
/**
 * Función que resta una unidad a un pedido.
 * @param {Event} event - El evento que desencadena la función.
 */
function restarPedido(event) {
  document.querySelector("table").remove();
  document.querySelector("h3").remove();
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
          if (pedido.length === 0) {
            let h3 = document.createElement("h3");
            h3.innerHTML = "TOTAL : 0€";
            cuadroPedido.append(h3);
          }
          creacionTabla();
        } else {
          creacionTabla();
        }
      } else {
        lineaPedido.unidades--;
        creacionTabla();
      }
    }
  });
}
/**
 * Función que finaliza un pedido.
 */
function terminarPedido() {
  let respuesta = confirm(
    "¿Estás seguro que quieres dar por finalizado este pedido?"
  );
  if (respuesta) {
    gestor.clientes[gestor.comercialActual][
      gestor.clienteActual
    ].cuentaAbierta = false;
    comprobarCuentaClienteActual();
    let cuadroPedido = document.getElementById("pedido");
    cuadroPedido.querySelector("h3").remove();
    cuadroPedido.querySelectorAll(".boton").forEach((boton) => boton.remove());
    cuadroPedido.querySelector("table").remove();
    gestor.eliminarPedidos();
  }
}

// // Ejecución de funciones
// contentLoaded();
cargaDatosIniciales();
