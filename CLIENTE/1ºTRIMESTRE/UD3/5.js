function ponerCursivaMinuscula() {
    let frase = String(frmFrase.txtFrase.value);
    let resultado = "";
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === frase[i].toLowerCase() && frase[i].match(/[a-z]/)) {
            resultado += "<i>" + frase[i] + "</i>";
        } else {
            resultado += frase[i];
        }
    }

    document.getElementById("salida").innerHTML = resultado;
}
