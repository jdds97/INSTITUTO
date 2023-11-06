let age = prompt("Indica tu edad");
let accessAllowed =
  age > 18 ? alert("Eres mayor de edad") : alert("Eres menor de edad");
//13.Se ingresan tres notas de un alumno, si el promedio es mayor o igual a 4 mostrar un mensaje 'apto', sino 'suspenso'.
let nota1 = prompt("Primera nota");
let nota2 = prompt("Segunda nota");
let nota3 = prompt("Tercera nota");
let media = nota1 + nota2 + nota3;
if (media >= 4) {
  alert("Apto");
} else {
  alert("Suspenso");
}

for (let i = 0; i < 3; i++) {
  let media = prompt("Introduce un numero");
  media += media;
}
//14.Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, ó 3 cifras. Mostrar un mensaje de error si el número de cifras no es 1, 2 ó 3.
let num3 = prompt("Introduce un numero de hasta 3 cifras");
if (num3.length == 3) {
  alert("Tiene 3 cifras");
} else if (num3.length == 2) {
  alert("Tiene 2 cifras");
} else if (num3.length == 1) {
  alert("Tiene 1 cifra");
} else {
  alert("Error de numero");
}

//16.Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo.
let num=Number(prompt("Dime un numero"));
if (num>0){
alert("El numero es positivo")
}
else if{

}
else{

}
function procesarFormulario(){
  const nombre=rm-datosPersonales.nombre.value;
  const numero=rm-datosPersonales.numero.value;
  if (nombre=""){
    alert("El nombre es obligatorio");
    return false;
  }
}
function procesarFormulario(){
  const num=Number(frmNumero.numero.value);
  let salida="";
  for(let i=!;i<=10;i++){
    salida+=num +"x"+ i+"="+(num*i)+"\n";
  }
  document.getElementById("salida").innerHTML=salida;
}