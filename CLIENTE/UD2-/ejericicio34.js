function imprimirNumero(){
let num = 1;
let num2 = 0;
let salida="";
while (num!=9999) {
  num = Number(prompt("Dime el número"));
  if(num!=9999)
    num2 += num;
}

if (num == 0) {
  salida="El número es 0";
} else if (num < 0) {
  salida="El número es menor a cero";
} else {
  salida="El número es mayor a cero";
}

alert("Ha finalizado la carga");
alert(num2);
document.getElementById("salida").innerHTML = salida+"\n. Y es el "+num2;
}