import * as funciones from "./funciones.js";

export async function cargarComerciales() {
  return fetch(
    "https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/comerciales.json"
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function cargarClientes() {
  return fetch(
    "https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/clientes.json"
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function cargarCategorias() {
  return fetch(
    "https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/categorias.json"
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function cargarProductos() {
  return fetch(
    "https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/productos.json"
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function actualizarDatos(event) {
  event.preventDefault();

  let respuesta = event.target.dataset.respuesta;
  let entrada = event.target.parentElement.dataset.entrada;

  const selectElements = event.target.querySelectorAll("select");
  const selectElement =
    selectElements.length > 1 ? selectElements[1] : selectElements[0];
  const idDatoAModificar = selectElement.id
    ? selectElement.selectedOptions[0].id
    : undefined;

  const valorDatoAModificar = selectElement.valor
    ? selectElement.selectedOptions[0].valor
    : undefined;
  let funcionLimpiar = `limpiar${entrada}`;
  let funcionCargar = `cargar${entrada}`;
  // Obtener el valor del input de texto
  const inputTextElement = event.target.querySelector('input[type="text"]');
  let datoNuevo = inputTextElement.value;
  let datos;

  if (idDatoAModificar && valorDatoAModificar) {
    entrada = entrada + "/" + idDatoAModificar;
    datos = {
      [valorDatoAModificar]: datoNuevo,
    };
  } else if (idDatoAModificar) {
    entrada = entrada + "/" + idDatoAModificar;
    datos = {
      nombreProducto: datoNuevo,
    };
  } else {
    datos = datoNuevo;
  }
  // Si hay datos, realizamos la solicitud
  if (datos) {
    console.log("Haciendo la solicitud...");
    let url = `https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/${entrada}.json`;
    console.log(url);
    fetch(url, {
      method: `${respuesta}`,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(datos),
    }).catch((error) => console.log(error));
  }
  //Quiero que la primera letra de la entrada se convierta en mayuscula y que quite la barra del final de la palabra
  entrada = entrada.charAt(0).toUpperCase();

  // Esperamos un segundo para cargar los datos actualizados
  setTimeout(() => {
    if (typeof funciones.funcionLimpiar === "function") {
      funciones.funcionLimpiar();
    }

    if (typeof funciones.funcionCargar === "function") {
      funciones.funcionCargar();
    }
  }, 1000);
}
