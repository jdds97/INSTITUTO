function entreDos() {
  let num1;
  let num2;
  let aux;
  let lista = [];
  num1 = Number(frmNumeros.number1.value);
  num2 = Number(frmNumeros.number2.value);
  if (num1 > num2) {
    aux = num1;
    num1 = num2;
    num2 = aux;
  }
  for (let i = num1 + 1; i < num2; i++) {
    lista += i+",";
  }
  document.getElementById("salida").innerHTML = "Números entre " +num1+" y "+num2+" son "+ lista;
}
