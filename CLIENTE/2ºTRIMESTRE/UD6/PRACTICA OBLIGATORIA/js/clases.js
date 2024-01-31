class Gestor {
  _categorias;
  _comerciales;
  _clientes;
  _comercialActual;
  _clienteActual;
  _pedidos;

constructor() {
    this._categorias = [];
    this._comerciales = [];
    this._clientes = [];
    this._comercialActual = null;
    this._clienteActual = null;
    this._pedidos = LineaPedido;
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
  
}
