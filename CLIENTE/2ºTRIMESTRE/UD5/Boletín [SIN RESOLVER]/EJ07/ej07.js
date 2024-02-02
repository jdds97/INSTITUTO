teclado.addEventListener("click", function (event) {
  if (event.target.tagName === "INPUT") {
    salida.value = event.target.value;
  }
});

// teclado.addEventListener("input", (event) => {
//   salida.value = event.target.value;
// });
