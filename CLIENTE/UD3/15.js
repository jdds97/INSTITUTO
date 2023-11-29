let intervalo = setInterval(pedirDNI,2000);
let arrayDNI = [];
function pedirDNI() {
  var dni = prompt("Introduce tu DNI o -1 para salir");
  if (dni != "-1") {
    while (dni.length != 9 && !dni[8].match(/[A-Z]/)) {
      dni = prompt("DNI incorrecto, vuelve a introducirlo");
    }
      arrayDNI.push(dni);
  } else {
    clearInterval(intervalo);
    alert(arrayDNI.join(","));
  }
}


getMonth()