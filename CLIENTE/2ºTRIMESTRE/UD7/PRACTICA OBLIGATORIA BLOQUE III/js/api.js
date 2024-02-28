/**
 * Carga los datos de los comerciales desde una API.
 * @returns {Promise<Object>} Una promesa que se resuelve con los datos de los comerciales.
 */
export async function cargarComerciales() {
  return fetch(
    "https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/comerciales.json"
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

/**
 * Carga los datos de los clientes desde una API.
 * @returns {Promise<Object>} Una promesa que se resuelve con los datos de los clientes.
 */
export async function cargarClientes() {
  return fetch(
    "https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/clientes.json"
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
/**
 * Carga los datos de las categorías desde una API.
 * @returns {Promise<Object>} Una promesa que se resuelve con los datos de las categorías.
 */
export async function cargarCategorias() {
  return fetch(
    "https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/categorias.json"
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
/**
 * Carga los datos de los productos desde una API.
 * @returns {Promise<Object>} Una promesa que se resuelve con los datos de los productos.
 */
export async function cargarProductos() {
  return fetch(
    "https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/productos.json"
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
/**
 * Carga los datos de las ventas desde una API.
 * @returns {Promise<Object>} Una promesa que se resuelve con los datos de los elementos a modificar
 */
export async function actualizarDatos(event) {
  event.preventDefault();

  const { respuesta, nuevaentrada: nuevaEntrada } = event.target.dataset;
  const inputTextElement = event.target.querySelector('input[type="text"]');
  const numberElement = event.target.querySelector('input[type="number"]');
  const datoNuevo = inputTextElement?.value;
  const datoNuevo2 = numberElement?.value;
  let entrada = event.target.parentElement.dataset.entrada;
  let datos = {};

  const spanElement = event.target.querySelector("span");
  // Si el elemento tiene un id, se trata de un elemento que ya existe en la base de datos
  if (spanElement && spanElement.id) {
    // Si el elemento tiene un atributo valor, se trata de un elemento que existe en un array de datos
    const valorDatoAModificar =
      spanElement.getAttribute("valor") !== undefined &&
      spanElement.getAttribute("valor") !== null
        ? spanElement.getAttribute("valor")
        : spanElement.id;
    const idDatoAModificar =
      spanElement.id !== undefined ? spanElement.id : null;
    //Vamos obtener la entrada de la url con el id del elemento a modificar o su valor
    entrada = getEntrada(
      entrada,
      spanElement,
      respuesta,
      idDatoAModificar,
      valorDatoAModificar
    );
    // Vamos a obtener los datos a modificar en la base de datos dependiendo del elemento que se esté modificando
    datos = getDatos(
      spanElement,
      respuesta,
      valorDatoAModificar,
      idDatoAModificar,
      datoNuevo,
      datoNuevo2
    );
  } else {
    // Si el elemento no tiene un id, se trata de un elemento nuevo
    datos = datoNuevo;
  }

  if (entrada) {
    // Enviamos la solicitud a la API con la entrada y los datos correspondientes a la solicitud
    enviarSolicitud(entrada, datos, respuesta);
  }
  // Si hay un atributo nuevaentrada, se trata de un array de clientes ya sea para añadir un nuevo array de clientes o eliminarlo
  if (nuevaEntrada) {
    // Si el atributo respuesta es POST, se trata de añadir un nuevo array de clientes y si es DELETE, se trata de eliminarlo
    const valorDatoAModificar =
      respuesta === "POST" ? 0 : spanElement?.getAttribute("valor");
    //Vamos a obtener la entrada de la url con el id del elemento a modificar o su valor dependiendo de la respuesta
    //Este código no aprovecho el getEntrada porque tendría que modificar el getEntrada y no quiero añadir más condiciones a ese método
    const subEntrada =
      respuesta === "POST"
        ? nuevaEntrada
        : `${nuevaEntrada}/${valorDatoAModificar}`;
    //Vamos a obtener los datos a modificar en la base de datos dependiendo del elemento que se esté modificando
    datos =
      respuesta === "POST"
        ? { [0]: `Primer ${nuevaEntrada.slice(0, -1)}` }
        : { [valorDatoAModificar]: "" };
    // Enviamos la solicitud a la API con la entrada y los datos correspondientes a la solicitud
    enviarSolicitud(subEntrada, datos, respuesta);
  }
}
/**
 * Obtiene la entrada de la url con el id del elemento a modificar o su valor.
 * @param {string} entrada La entrada de la url.
 * @param {HTMLElement} spanElement El elemento que se está modificando.
 * @param {string} respuesta La respuesta de la solicitud.
 * @param {string} idDatoAModificar El id del dato a modificar.
 * @param {string} valorDatoAModificar El valor del dato a modificar.
 * @returns {string} La entrada de la url con el id del elemento a modificar o su valor.
 */
function getEntrada(
  entrada,
  spanElement,
  respuesta,
  idDatoAModificar,
  valorDatoAModificar
) {
  // Si el elemento es un comercial, una categoría, un cliente o un producto, se trata de un elemento que ya existe en la base de datos
  if (
    spanElement.classList.contains("comercialActual") ||
    spanElement.classList.contains("categoriaActual") ||
    spanElement.classList.contains("nuevoCliente") ||
    spanElement.classList.contains("nuevoProducto")
  ) {
    // Si la respuesta es DELETE o el elemento es un nuevo cliente, se trata de eliminar un cliente o un producto ,entonces cambiamos la entrada
    if (
      respuesta === "DELETE" ||
      spanElement.classList.contains("nuevoCliente")
    ) {
      return `${entrada}/${idDatoAModificar}`;
    }
    // Si el elemento es un cliente, un producto o una categoría, se trata de un elemento que ya existe en la base de datos
  } else if (
    spanElement.classList.contains("clienteActual") ||
    spanElement.classList.contains("productoActual")
  ) {
    // Si la respuesta es DELETE y el elemento es un cliente, se trata de eliminar un cliente,entonces cambiamos la entrada
    if (
      respuesta === "DELETE" &&
      spanElement.classList.contains("clienteActual")
    ) {
      return `${entrada}/${idDatoAModificar}/${valorDatoAModificar}`;
    }
    // Si la respuesta es DELETE y el elemento es un producto, se trata de eliminar un producto,entonces cambiamos la entrada
    return `${entrada}/${idDatoAModificar}`;
  }

  return entrada;
}
/**
 * Obtiene los datos a modificar en la base de datos dependiendo del elemento que se esté modificando.
 * @param {HTMLElement} spanElement El elemento que se está modificando.
 * @param {string} respuesta La respuesta de la solicitud.
 * @param {string} valorDatoAModificar El valor del dato a modificar.
 * @param {string} idDatoAModificar El id del dato a modificar.
 * @param {string} datoNuevo El nuevo dato a modificar.
 * @param {string} datoNuevo2 El nuevo dato a modificar.
 * @returns {Object} Los datos a modificar en la base de datos.
 */
function getDatos(
  spanElement,
  respuesta,
  valorDatoAModificar,
  idDatoAModificar,
  datoNuevo,
  datoNuevo2
) {
  // Si el elemento es un nuevo producto o un producto existente, se trata de un producto que ya existe en la base de datos
  if (
    (spanElement.classList.contains("nuevoProducto") && respuesta === "POST") ||
    (spanElement.classList.contains("productoActual") && respuesta === "PATCH")
  ) {
    // Si el elemento es un producto existente, se trata de un producto que ya existe en la base de datos y se va a modificar sólo el nombre y el precio
    if (spanElement.classList.contains("productoActual")) {
      return {
        nombreProducto: datoNuevo,
        precioUnidad: datoNuevo2 !== undefined ? datoNuevo2 : 0,
      };
      // Si el elemento es un nuevo producto, se trata de un producto que no existe en la base de datos y se va a añadir un nuevo producto con su nombre y su precio
    } else {
      return {
        idCategoria: idDatoAModificar,
        nombreProducto: datoNuevo,
        idProducto: valorDatoAModificar,
        precioUnidad: datoNuevo2 !== undefined ? datoNuevo2 : 0,
      };
    }
  } else {
    return {
      // Si el elemento es un nuevo cliente o un cliente existente, se trata de un cliente que ya existe en la base de datos
      [valorDatoAModificar]: datoNuevo !== undefined ? datoNuevo : "",
    };
  }
}
/**
 * Envia una solicitud a la API con la entrada y los datos correspondientes a la solicitud.
 * @param {string} entrada La entrada de la url.
 * @param {Object} datos Los datos a enviar a la API.
 * @param {string} respuesta La respuesta de la solicitud.
 */
function enviarSolicitud(entrada, datos, respuesta) {
  // Enviamos la solicitud a la API con la entrada y los datos correspondientes a la solicitud
  const url = `https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/${entrada}.json`;

  fetch(url, {
    method: respuesta,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(datos),
  }).catch((error) => console.log(error));
}
