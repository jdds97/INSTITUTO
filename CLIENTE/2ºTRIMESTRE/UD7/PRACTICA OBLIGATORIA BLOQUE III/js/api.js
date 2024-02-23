export async function cargarComerciales() {
  const response = await fetch(
    "https://proyectopracticaobligatoria-default-rtdb.europe-west1.firebasedatabase.app/comerciales.json"
  );
  const data = await response.json();
  return data;
}

export async function cargarClientes() {
  const response = await fetch(
    "https://proyectopracticaobligatoria-default-rtdb.europe-west1.firebasedatabase.app/clientes.json"
  );
  const data = await response.json();
  return data;
}

export async function cargarCategorias() {
  const response = await fetch(
    "https://proyectopracticaobligatoria-default-rtdb.europe-west1.firebasedatabase.app/categorias.json"
  );
  const data = await response.json();
  return data;
}

export async function cargarProductos() {
  const response = await fetch(
    "https://proyectopracticaobligatoria-default-rtdb.europe-west1.firebasedatabase.app/productos.json"
  );
  const data = await response.json();
  return data;
}

export async function actualizarDatos(event) {
  event.preventDefault();
  console.log(event.target.dataset.respuesta);
  console.log(event.target.parentElement.dataset.entrada);
  let respuesta = event.target.dataset.respuesta;
  let entrada = event.target.parentElement.dataset.entrada;

  // Verificar si el formulario contiene un select
  const selectElement1 = event.target.querySelectorAll("select")[0];
  const selectElement2 = event.target.querySelectorAll("select")[1];
  const valorSelect1 = selectElement1 ? selectElement1.value : undefined;
  const valorSelect2 = selectElement2 ? selectElement2.value : undefined;
  let datoAModificar;
  let datoNuevo;

  // Obtener el valor del input de texto
  const inputTextElement = event.target.querySelector('input[type="text"]');
  if (inputTextElement) {
    datoNuevo = inputTextElement.value;
  }

  let datos;

  // Si hay un valor de select, lo usamos como dato a modificar
  if (valorSelect1 !== undefined && valorSelect1 !== null) {
    datoAModificar = valorSelect1;
  } else if (valorSelect2 !== undefined && valorSelect2 !== null) {
    datoAModificar = valorSelect2;
  }

  // Si tanto el dato a modificar como el dato nuevo no están vacíos, creamos un objeto con ambos
  if (datoAModificar && datoNuevo) {
    datos = {
      [datoAModificar]: datoNuevo,
    };
  }
  // Si solo hay un dato a modificar, lo asignamos al objeto de datos
  else if (datoAModificar) {
    datos = datoAModificar;
  }
  // Si solo hay un dato nuevo, lo asignamos al objeto de datos
  else if (datoNuevo) {
    datos = datoNuevo;
  }

  // Si hay datos, realizamos la solicitud
  if (datos) {
    let url = `https://proyectojsfinal-c3299-default-rtdb.europe-west1.firebasedatabase.app/${entrada}.json`;
    await fetch(url, {
      method: `${respuesta}`,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(datos),
    });
  }
}
