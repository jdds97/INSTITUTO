function cancelarDigitos() {
  if (!isNaN(txtEntrada.value)) alert("No se pueden introducir dígitos");
  txtEntrada.value = "";
}
txtEntrada.addEventListener("input", cancelarDigitos);
