function cancelarDigitos() {
  if (!isNaN(txtEntrada.value)) 
  txtEntrada.value = "";
}
txtEntrada.addEventListener("input", cancelarDigitos);
