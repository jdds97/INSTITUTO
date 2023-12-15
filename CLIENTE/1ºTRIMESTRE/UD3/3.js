let frase = prompt("Introduce una frase");
frase=frase.trim();
let palabras = frase.split(/\s+/).filter(function(word) {return word.length > 0;});
let numeroPalabras = palabras.length;
alert("La frase tiene " + numeroPalabras + " palabras");








/*function contar(frase) {
  let palabra = "";
  debugger;
  frase = frase.trim();
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] != " ") {
      palabra += frase[i];
    }
    if (frase[i] == " " || i == frase.length - 1) {
      palabras.push(palabra);
      palabra = "";
    }
  }
  return contador;
}
alert("La frase tiene " + contar(frase) + " palabras");
*/