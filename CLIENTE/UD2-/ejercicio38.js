let num = prompt("Dime el número");
let primo = true;
for (let i = 2; i <= num - 1; i++) {
  if (num % i == 0 && contador == 0) {
    primo = true;
  } else {
    primo = false;
    contador++;
  }
}
if (primo) {
  alert("No es un número primo");
} else {
  alert("Es un número primo");
}
