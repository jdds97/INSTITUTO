//Francotirador de formulario
let formulario = document.querySelector('form[name="formulario"]');
//Añadimos un manejador de eventos para que cada vez que se envíe el formulario se limpien los campos vacíos y los errores
//Cogemos el div de salida
let divSalida = document.getElementById("salida");
//Creamos las listas de errores y campos vacíos con sus respectivos h1
let listaErrores = document.createElement("ul");
let tituloErrores = document.createElement("h1");
let listaCamposVacios = document.createElement("ul");
let tituloCamposVacios = document.createElement("h1");
//Insertamos los titulos a las listas
listaErrores.append(tituloErrores);
listaCamposVacios.append(tituloCamposVacios);
//Insertamos las listas vacías en el div de salida para que se vaya actualizando
divSalida.append(listaErrores);
divSalida.append(listaCamposVacios);

function inputsTexto(event) {
  debugger;
  let inputsTexto = document.querySelectorAll('input[type="text"]');
  let hayCamposVacios = false;

  inputsTexto.forEach((input) => {
    if (input.value.trim() === "") {
      // Verificar si el campo está vacío
      let error = document.createElement("li");
      error.innerHTML = "El input con nombre " + input.name + " está vacío";
      listaCamposVacios.append(error);

      hayCamposVacios = true;
    }
  });

  if (hayCamposVacios) {
    event.preventDefault();
  }
}
function fechaMatriculacion(event) {
  let fechaMatriculacion = document.querySelector(
    'input[name="fechaMatriculacion"]'
  ).value;
  //RegExp con constructor
  // const regexp = new RegExp("^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$", "i");
  let regExp = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/; //i=>si es case insensitive m=>
  //si es multiline La bandera m se utiliza para indicar que una expresión regular es multilinea.
  // Esto significa que los caracteres de inicio (^) y fin ($) de la expresión regular coincidirán no sólo con el inicio y el fin de toda la cadena,
  // sino también con el inicio y el fin de cada línea dentro de la cadena. Esto puede ser útil cuando estás trabajando con cadenas de texto que contienen
  // saltos de línea y quieres realizar una coincidencia en cada línea individualmente.
  // g=>si es global Esto significa que la expresión regular buscará todas las coincidencias posibles en la cadena, en lugar de detenerse después de encontrar la primera coincidencia.
  // Esto puede ser útil cuando quieres encontrar todas las ocurrencias de un patrón en una cadena, en lugar de sólo la primera.
  if (!regExp.test(fechaMatriculacion)) {
    let error = document.createElement("li");
    error.innerHTML = "La fecha no coincide con el patrón";
    listaErrores.append(error);
    event.preventDefault();
  }
}
function marcaYModelo(event) {
  let marca = document.querySelector('input[name="marca"]').value.trim();
  let modelo = document.querySelector('input[name="modelo"]').value.trim();
  let regExp = /^[A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚáéíóúÑñ]*$/;
  if (!regExp.test(marca) || !regExp.test(modelo)) {
    let error = document.createElement("li");
    error.innerHTML = "La marca y/o el modelo no coinciden con el patrón";
    listaErrores.append(error);
    event.preventDefault();
  }
}

function tipoMatricula(event) {
  let tipoMatricula = document.querySelector(
    'select[name="tipoMatricula"]'
  ).value;
  let matricula = document
    .querySelector('input[name="matricula"]')
    .value.trim();
  let regExpActual = /^[0-9]{4}[A-Z]{3}$/;
  let regExpAntigua = /^[A-Z]{1,2}\-[0-9]{4}\-[A-Z]{1,2}$/;
  let regExpHistorica = /^H[0-9]{4}[A-Z]{3}$/;
  if (tipoMatricula === "actual" && !regExpActual.test(matricula)) {
    let error = document.createElement("li");
    error.innerHTML =
      "La matrícula no coincide con el patrón para el tipo de matrícula actual";
    listaErrores.append(error);
    event.preventDefault();
  } else if (tipoMatricula === "antigua" && !regExpAntigua.test(matricula)) {
    let error = document.createElement("li");
    error.innerHTML =
      "La matrícula no coincide con el patrón para el tipo de matrícula antigua";
    listaErrores.append(error);
    event.preventDefault();
  } else if (
    tipoMatricula === "historica" &&
    !regExpHistorica.test(matricula)
  ) {
    let error = document.createElement("li");
    error.innerHTML =
      "La matrícula no coincide con el patrón para el tipo de matrícula histórica";
    listaErrores.append(error);
    event.preventDefault();
  }
}

function color(event) {
  let color = document.querySelector('input[name="color"]').value.trim();
  let regExp = /^[A-Za-z]+$/;
  if (!regExp.test(color)) {
    let error = document.createElement("li");
    error.innerHTML = "El color no coincide con el patrón";
    listaErrores.append(error);
    event.preventDefault();
  }
}
function limpiarCamposVaciosYErrores() {
  if (
    listaErrores.children.length > 1 ||
    listaCamposVacios.children.length > 1
  ) {
    document.querySelectorAll("li").forEach((li) => li.remove());
  }
}
// Añadimos manejadores de eventos por cada condición que se quiera cumplir

formulario.addEventListener("submit", function (event) {
  limpiarCamposVaciosYErrores();
  inputsTexto(event);
  marcaYModelo(event);
  fechaMatriculacion(event);
  tipoMatricula(event);
  color(event);

  if (
    listaErrores.childElementCount > 1 ||
    listaCamposVacios.childElementCount > 1
  ) {
    event.preventDefault();
  }
});
