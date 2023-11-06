function cambiarTamanio() {
let frase=String(frmFrase.txtFrase.value);
let resultado="";
    for (let i = 0; i < frase.length; i++) {
    if (frase[i] !== frase[i].toUpperCase()) {
        resultado+=frase[i].toUpperCase();
    } else {
        resultado += frase[i].toLowerCase();
    }
}
document.getElementById("salida").innerHTML = resultado;
}