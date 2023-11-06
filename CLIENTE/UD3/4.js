
function ponerNegrita() {
    let frase = String(frmFrase.txtFrase.value);
    let resultado = "";
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === frase[i].toUpperCase() && frase[i].match(/[A-Z]/)) {
            resultado += "<b>" + frase[i] + "</b>";
        } else {
            resultado += frase[i];
        }
    }

    document.getElementById("salida").innerHTML = resultado;
}


