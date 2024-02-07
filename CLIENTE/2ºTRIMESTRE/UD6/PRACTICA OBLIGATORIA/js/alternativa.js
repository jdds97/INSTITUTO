function cargarComerciales(gestor) {
    for (let comercial in gestor.clientes) {
      let option = document.createElement("option");
      option.value = comercial;
      option.text = comercial;
      formComercial.comerciales.add(option);
    }
    // Cargar los clientes del primer comercial
    let primerComercial = formComercial.comerciales.options[0].value;
    cargarClientes(primerComercial, gestor);
  }
  function limpiarClientes() {
    let comercialSeleccionado = formComercial.comerciales.value;
    // Primero, eliminar los clientes antiguos
    document.querySelectorAll(".cliente").forEach((cliente) => cliente.remove());
    cargarClientes(comercialSeleccionado, gestor);
    primerTitulo(comercialSeleccionado, gestor);
  }
  function primerTitulo(comercialSeleccionado) {
    debugger;
    let h2 = document.createElement("h2");
    h2.innerText = gestor.clientes[comercialSeleccionado][0];
    cuadroPedido.firstChild.after(h2);
  }