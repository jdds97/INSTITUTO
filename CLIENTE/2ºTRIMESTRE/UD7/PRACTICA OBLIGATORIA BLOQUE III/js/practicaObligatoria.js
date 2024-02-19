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

/**
 * Francotirador y addEventListener principales
 */

/*
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
    if (frmComercial.comerciales.options.length <= comerciales.length)
      frmComercial.comerciales.add(option);
  });
}
/**
 * Carga los clientes del comercial seleccionado en el cuadro de pedido.
 */
function cargaClientes(clientes) {
  let clientesComercial = Object.values(
    clientes[frmComercial.comerciales.value]
  );
  clientesComercial.forEach((cliente, i) => {
    let cuadroCliente = document.createElement("div");
    cuadroCliente.innerHTML = cliente;
    cuadroCliente.value = i;
    if (
      frmComercial.parentNode.querySelectorAll(".cliente").length <=
        clientesComercial.length &&
      frmComercial.parentElement
    ) {
      frmComercial.parentNode.append(cuadroCliente);
      cuadroCliente.classList.add("cliente");
      cuadroCliente.classList.add("pagado");
    }
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
 * Limpia el pedido y el cliente anterior.
 */
function limpiarClienteAnteriores() {
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

// // Ejecución de funciones
// contentLoaded();
cargaDatosIniciales();
