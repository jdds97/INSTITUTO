class Gestor {
  _categorias;
  _comerciales;
  _clientes;
  _comercialActual;
  _clienteActual;
  _pedidos;

  constructor(comerciales, clientes, categorias) {
    this._categorias = categorias;
    this._comerciales = comerciales;
    this._clientes = [];
    this._comercialActual = null;
    this._clienteActual = null;
    this._pedidos = [];
    this.añadirClientesComerciales(clientes);
  }

  // Getters
  get categorias() {
    return this._categorias;
  }

  get comerciales() {
    return this._comerciales;
  }

  get clientes() {
    return this._clientes;
  }

  get comercialActual() {
    return this._comercialActual;
  }

  get clienteActual() {
    return this._clienteActual;
  }

  get pedidos() {
    return this._pedidos;
  }

  // Setters
  set categorias(value) {
    this._categorias = value;
  }

  set comerciales(value) {
    this._comerciales = value;
  }

  set clientes(value) {
    this._clientes = value;
  }

  set comercialActual(value) {
    this._comercialActual = value;
  }

  set clienteActual(value) {
    this._clienteActual = value;
  }

  set pedidos(value) {
    this._pedidos = value;
  }
  añadirClientesComerciales(clientes) {
    this.comerciales.forEach((comercial, i) => {
      let clientesComercial = new Array(...clientes[i]);
      this.clientes[comercial] = clientesComercial;
    });
  }
}
// añadirCategorias(categorias){

//     this.productos.filter((producto)=>producto.idCategoria===categoria[i])}

// }
// actualizarPedidos() {

// }

class LineaPedido {
  _unidades;
  _idProducto;
  constructor(unidades, idProducto) {
    this._unidades = unidades;
    this._idProducto = idProducto;
  }

  get unidades() {
    return this._unidades;
  }
  set unidades(value) {
    this._unidades = value;
  }
  get idProducto() {
    return this._idProducto;
  }
  set idProducto(value) {
    this._idProducto = value;
  }
}
class Producto {
  _idProducto;
  _nombreProducto;
  _precioUnidad;
  _idCategoria;
  constructor(idProducto, nombreProducto, precioUnidad, idCategoria) {
    this._idProducto = idProducto;
    this._nombreProducto = nombreProducto;
    this._precioUnidad = precioUnidad;
    this._idCategoria = idCategoria;
  }
  get idProducto() {
    return this._idProducto;
  }
  set idProducto(value) {
    this._idProducto = value;
  }
  get nombreProducto() {
    return this._nombreProducto;
  }
  set nombreProducto(value) {
    this._nombreProducto = value;
  }
  get precioUnidad() {
    return this._precioUnidad;
  }
  set precioUnidad(value) {
    this._precioUnidad = value;
  }
  get idCategoria() {
    return this._idCategoria;
  }
  set idCategoria(value) {
    this._idCategoria = value;
  }
}
class Cliente {
  _nombre;
  _cuentaAbierta;
  constructor(nombre) {
    this._nombre = nombre;
    this._cuentaAbierta = false;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(value) {
    this._nombre = value;
  }
  get cuentaAbierta() {
    return this._cuentaAbierta;
  }
  set cuentaAbierta(value) {
    this._cuentaAbierta = value;
  }
}
class Catalogo {
  _productos;
  constructor() {
    this._productos = [];
  }
  get productos() {
    return this._productos;
  }
  set productos(value) {
    this._productos = value;
  }
  addProducto(idProducto, nombreProducto, precioUnidad, idCategoria) {
    let productoExiste = this._productos.filter(
      (producto) => producto.idProducto === idProducto
    ).length;

    if (productoExiste === 0) {
      this._productos.push(
        new Producto(idProducto, nombreProducto, precioUnidad, idCategoria)
      );
    }
  }
}
