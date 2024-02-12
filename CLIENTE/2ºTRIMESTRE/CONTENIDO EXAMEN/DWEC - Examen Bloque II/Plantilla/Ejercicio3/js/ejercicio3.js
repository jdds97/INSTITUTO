/*a) En la capa de salida se mostrará una lista con los campos vacíos y otra con los campos
con errores. En el caso de que todos los campos sean correctos se procesará el
formulario.
b) Todos los inputs deben ser de tipo texto y ninguno de ellos podrá quedarse en blanco.
c) El precio tendrá un formato de un número con parte entera y dos dígitos de parte
decimal con el símbolo del euro al final. La separación de la parte entera y la decimal
puede hacerse con un punto o una coma. Ejemplos válidos: 3,25€, 2541.56€.
d) La hora tendrá el formato HH:MM, se especificará en el rango de 24 horas, es decir,
serán válidas las siguientes horas: 09:48, 18:35, 23:59, 00:00. A continuación se
especifican ejemplos de horas que no se considerarán válidas: 18:62, 25:31, 9:15.
e) La fecha de matriculación tendrá el formato DD/MM/AAAA, por ejemplo: 12/02/2024.
No habrá que controlar que la fecha sea correcta, solo que tenga ese formato.
f) La dirección IP tendrá un valor correcto dentro del protocolo IPv4. A continuación se
especifican ejemplos de direcciones válidas: 192.168.1.1, 255.255.255.255, 0.0.0.0,
243.178.65.4. Serían ejemplo de direcciones inválidas: 257.67.45.2, 1324.45.23.2,
192.168.1.256
g) El color debe ser especificado en código hexadecimal. Empezará por un carácter
almohadilla seguido de tres pares de dígitos hexadecimales, cada uno de los pares
indicará el nivel de color rojo, verde y azul respectivamente. Ejemplos de colores
válidos: #38AE0F, #23b7f9, #000000, #ffFFff. A continuación, algunos ejemplos de
colores inválidos: 376545, #g6780h, #00A0567
h) En la capa de salida se mostrará una lista con los campos vacíos y otra con los campos
con errores. E*/ 

/*a) En la capa de salida se mostrará una lista con los campos vacíos y otra con los campos
con errores. En el caso de que todos los campos sean correctos se procesará el
formulario.
*/
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
  function precio(event){
    let precio = document.querySelector('input[name="precio"]').value.trim();
    let regExp=/^[0-9]{2}\,[0-9]{2}$/
    if (!regExp.test(precio)) {
        let error = document.createElement("li");
        error.innerHTML = "El precio no coincide con el patrón";
        listaErrores.append(error);
        event.preventDefault();
      }
  }
  function hora(event){
    let hora = document.querySelector('input[name="hora"]').value.trim();
    let regExp=/^[0-23]{2}\:[0-59]{2}$/
    if (!regExp.test(hora)) {
        let error = document.createElement("li");
        error.innerHTML = "La hora no coincide con el patrón";
        listaErrores.append(error);
        event.preventDefault();
      }
  }
  function fecha(event){
    let hora = document.querySelector('input[name="fecha"]').value.trim();
    let regExp=/^\d\d\/\\d\d\/\\d\d\d\d $/
    if (!regExp.test(hora)) {
        let error = document.createElement("li");
        error.innerHTML = "La fecha no coincide con el patrón";
        listaErrores.append(error);
        event.preventDefault();
      }
  }
  function ip(event){
    let ip = document.querySelector('input[name="direccionIP"]').value.trim();
    let regExp=/^[0-255]{1-3}\.[0-255]{1-3}\.[0-255]{1-3}$/
    if (!regExp.test(ip)) {
        let error = document.createElement("li");
        error.innerHTML = "La ip no coincide con el patrón";
        listaErrores.append(error);
        event.preventDefault();
      }
  }
  function color(event){
    let ip = document.querySelector('input[name="color"]').value.trim();
    let regExp=/^#\[a-fA-F0-9]{6}$/
    if (!regExp.test(hora)) {
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
 
  formulario.addEventListener("submit", function (event) {
    limpiarCamposVaciosYErrores();
    precio(event);
    hora(event);
    fecha(event);
    ip(event);
    color(event);

    if (
      listaErrores.childElementCount > 1 ||
      listaCamposVacios.childElementCount > 1
    ) {
      event.preventDefault();
    }
  });
  
