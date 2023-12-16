let num = prompt("Dime el número");
let primo = True;
for (let i = 2; i <= num - 1; i++) {
  let contador;
    if (num % i == 0 && contador == 0) {
    primo = True;
    numeros = " " + i;
  } else {
    primo = False;
    contador++;
  }
}
alert(numeros);
if (primo) {
  alert("No es un número primo");
} else {
  alert("Es un número primo");
}
