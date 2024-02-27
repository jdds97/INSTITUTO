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
export async function handleComercial(event) {
  event.preventDefault();
  let respuesta = event.target.dataset.respuesta; //POST=
  let entrada = event.target.parentElement.dataset.entrada;
  let idDatoAModificar;
  let valorDatoAModificar;
  let datos;
  const inputTextElement = event.target.querySelector('input[type="text"]');
  let datoNuevo =
    inputTextElement && inputTextElement.value !== null
      ? inputTextElement.value
      : undefined;
}
export async function actualizaraDatos(event) {
  event.preventDefault();

  let respuesta = event.target.dataset.respuesta;
  let entrada = event.target.parentElement.dataset.entrada;
  const comercialEscogido = event.target.querySelectorAll("select")[0];
  let idCliente = comercialEscogido.idArrayCliente;
  let valorCliente = divCliente.value;
  let idDatoAModificar;
  let valorDatoAModificar;

  if (selectElements.length > 0) {
    const selectElement =
      selectElements.length > 1 ? selectElements[1] : selectElements[0];
    idDatoAModificar = selectElement.selectedOptions[0].id
      ? selectElement.selectedOptions[0].id
      : undefined;

    valorDatoAModificar = selectElement.selectedOptions[0].getAttribute("valor")
      ? selectElement.selectedOptions[0].getAttribute("valor")
      : undefined;
  } else {
    console.log("No se encontraron elementos select");
  }

  // Obtener el valor del input de texto
  const inputTextElement = event.target.querySelector('input[type="text"]');
  let datoNuevo =
    inputTextElement && inputTextElement.value !== null
      ? inputTextElement.value
      : undefined;
  let datos;
  //CLIENTES
  // Si hay id de Cliente y el valor
  if (idDatoAModificar && valorDatoAModificar) {
    console.log("Modificando cliente");
    entrada = entrada + "/" + idDatoAModificar + "/" + valorDatoAModificar;
    datos = {
      [valorDatoAModificar]: datoNuevo,
    };
    //PRODUCTOS
    // Si hay id de Producto cogemos el id del producto y lo guardamos el nombreProducto con el dato nuevo, los guardamos en un objeto
  } else if (idDatoAModificar) {
    console.log("Modificando producto");

    entrada = entrada + "/" + idDatoAModificar;
    datos = {
      nombreProducto: datoNuevo,
    };
  } else {
    console.log("Nuevo dato");

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
}
export async function actualizarDatos(event) {
  event.preventDefault();
  const respuesta = event.target.dataset.respuesta;
  const nuevaEntrada = event.target.dataset.nuevaentrada;
  const inputTextElement = event.target.querySelector('input[type="text"]');
  const datoNuevo = inputTextElement?.value;
  let entrada = event.target.parentElement.dataset.entrada;
  let valorDatoAModificar;
  let datos = {};
  let spanElement = event.target.querySelector("span");
  if (entrada) {
    if (spanElement && spanElement.id) {
      if (spanElement.getAttribute("valor")) {
        if (respuesta !== "DELETE") {
          valorDatoAModificar = spanElement.getAttribute("valor");
          entrada = `${entrada}/${spanElement.id}/${valorDatoAModificar}`;
        }
        entrada = `${entrada}/${spanElement.id}`;
      } else {
        valorDatoAModificar = spanElement.id;
      }
      datos = {
        [valorDatoAModificar]: datoNuevo !== undefined ? datoNuevo : "",
      };
    } else {
      datos = datoNuevo;
    }
    console.log(entrada);
    console.log(datos);
    console.log(respuesta);
    enviarSolicitud(entrada, datos, respuesta);
  }
  if (nuevaEntrada) {
    const valorDatoAModificar =
      respuesta === "POST"
        ? 0
        : event.target.querySelector("span").getAttribute("valor");

    const subEntrada =
      respuesta === "POST"
        ? nuevaEntrada
        : `${nuevaEntrada}/${valorDatoAModificar}`;
    datos =
      respuesta === "POST"
        ? { [0]: `Primer ${nuevaEntrada.slice(0, -1)}` }
        : { [valorDatoAModificar]: "" };
    console.log(subEntrada);
    console.log(datos);
    console.log(respuesta);
    enviarSolicitud(subEntrada, datos, respuesta);
  }
}

function enviarSolicitud(entrada, datos, respuesta) {
  const url = `https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/${entrada}.json`;
  console.log(url);
  fetch(url, {
    method: respuesta,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(datos),
  }).catch((error) => console.log(error));
}

export async function actualizarDatosa(event) {
  let respuesta = event.target.dataset.respuesta;
  let entrada = event.target.parentElement.dataset.entrada;
  let datos;
  let idDatoAModificar;
  let valorDatoAModificar;
  let spanElement = event.target.querySelector("span");
  if (spanElement && spanElement.id) {
    idDatoAModificar = spanElement.id;
  }
  if (spanElement && spanElement.getAttribute("valor")) {
    valorDatoAModificar = spanElement.getAttribute("valor");
  }
  // Obtener el valor del input de texto
  const inputTextElement = event.target.querySelector('input[type="text"]');
  let datoNuevo =
    inputTextElement && inputTextElement.value !== null
      ? inputTextElement.value
      : undefined;
  if (idDatoAModificar && valorDatoAModificar && inputTextElement) {
    entrada = entrada + "/" + idDatoAModificar;
    console.log(
      "Modificando comercial nuevo cliente ,categoria nuevo producto"
    );
    datos = {
      [valorDatoAModificar]: datoNuevo,
    };
    console.log(datos);
    // Si hay id de Cliente y el valor
  } else if (idDatoAModificar && inputTextElement) {
    console.log("Modificando cliente o categoria");

    datos = {
      [idDatoAModificar]: datoNuevo,
    };
  } else if (idDatoAModificar && valorDatoAModificar) {
    console.log("Eliminar dato");
    entrada = entrada + "/" + idDatoAModificar + "/" + valorDatoAModificar;
    datos = {
      [valorDatoAModificar]: datoNuevo,
    };
  } else if (idDatoAModificar) {
    console.log("Eliminar dato");
    entrada = entrada + "/" + idDatoAModificar;
    datos = {
      [idDatoAModificar]: datoNuevo,
    };
  } else {
    datos = datoNuevo;
  }
  // Si hay id de Producto cogemos el id del producto y lo guardamos el nombreProducto con el dato nuevo, los guardamos en un objeto
  // } else if (idDatoAModificar && valorDatoAModificar) {
  //   entrada = entrada + "/" + idDatoAModificar;
  //   datos[valorDatoAModificar] = datoNuevo;
  // } else if (idDatoAModificar) {
  //   entrada = entrada + "/" + idDatoAModificar;
  //   datos = datoNuevo;

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
}
