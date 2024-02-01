let captcha = document.getElementById("captcha");
let textoOriginal = captcha.innerText;
let formulario = document.getElementsByTagName("form")[0];
let ultimoNumero = 0;
captcha.addEventListener("mouseover", generarCaptcha);
captcha.addEventListener("mouseleave", restablecerTexto);
formulario.addEventListener("submit", mostrarUltimoNumero);
function generarCaptcha() {
  let numeroRandom = Math.floor(Math.random() * 9999);
  captcha.innerText = numeroRandom;
  ultimoNumero = numeroRandom;
}

function restablecerTexto() {
  captcha.innerText = textoOriginal;
}
function mostrarUltimoNumero(event) {
  let numeroCaptcha = document.getElementById("verify").value.trim();
  if (numeroCaptcha != ultimoNumero) {
    event.preventDefault();
    alert("No coinciden los numeros");
  }
}
console.log(ultimoNumero);
