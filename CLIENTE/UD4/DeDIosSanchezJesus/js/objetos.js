class Cliente {
  _dniCliente;
  _nombre;
  _Apellidos;
  _usuario;

  constructor(dniCliente, nombre, Apellidos) {
    this._dniCliente = dniCliente;
    this._nombre = nombre;
    this._Apellidos = Apellidos;
    this._usuario =
      nombre.trim().charAt(0) +
      apellido1 +
      apellido2 +
      dniCliente.toString().substring(5, 8);
    let separa = Apellidos.split(" ");
    let apellido1 = separa[0].trim().substring(0, 3);
    let apellido2 = separa[1].trim().substring(0, 3);
  }

  get dniCliente() {
    return this._dniCliente;
  }

  set dniCliente(value) {
    this._dniCliente = value;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  get Apellidos() {
    return this._Apellidos;
  }

  set Apellidos(value) {
    this._Apellidos = value;
  }

  get usuario() {
    return this._usuario;
  }

  set usuario(value) {
    this._usuario = value;
  }

  toHTMLRow() {
    let fila = "<tr>";
    fila +=
      "<td>" +
      this._usuario +
      this._nombre +
      this._Apellidos +
      this._dniCliente +
      "</td>";
    return fila;
  }
}

class Vehiculo {
  _matricula;
  _marca;
  _modelo;

  constructor(matricula, marca, modelo) {
    this._matricula = matricula;
    this._marca = marca;
    this._modelo = modelo;
  }

  get matricula() {
    return this._matricula;
  }

  set matricula(value) {
    this._matricula = value;
  }

  get marca() {
    return this._marca;
  }

  set marca(value) {
    this._marca = value;
  }

  get modelo() {
    return this._modelo;
  }

  set modelo(value) {
    this._modelo = value;
  }

  toHTMLRow() {
    let fila = "<tr>";
    fila += "<td>" + this._matricula + this._marca + this._modelo + "</td>";
    return fila;
  }
}

class Coche extends Vehiculo {
  _combustible;
  _plazas;

  constructor(matricula, marca, modelo, combustible, plazas) {
    super(matricula, marca, modelo);
    this._combustible = combustible;
    this._plazas = plazas;
  }

  get combustible() {
    return this._combustible;
  }

  set combustible(value) {
    this._combustible = value;
  }

  get plazas() {
    return this._plazas;
  }

  set plazas(value) {
    this._plazas = value;
  }

  toHTMLRow() {
    let fila = "<tr>";
    fila +=
      "<td>" +
      this.matricula +
      this.marca +
      this.modelo +
      this._combustible +
      this._plazas +
      "</td>";
    return fila;
  }
}
class Alquiler{
  _fechaInicio;
  _fechaFin;
  _dniCliente;
  _matricula;

  constructor(fechaInicio, fechaFin, dniCliente, matricula) {
    this._fechaInicio = new Date(fechaInicio);
    this._fechaFin = new Date(fechaFin);
    this._dniCliente = dniCliente;
    this._matricula = matricula;
  }

  get fechaInicio() {
    return this._fechaInicio;
  }

  set fechaInicio(value) {
    this._fechaInicio = value;
  }

  get fechaFin() {
    return this._fechaFin;
  }

  set fechaFin(value) {
    this._fechaFin = value;
  }

  get dniCliente() {
    return this._dniCliente;
  }

  set dniCliente(value) {
    this._dniCliente = value;
  }

  get matricula() {
    return this._matricula;
  }

  set matricula(value) {
    this._matricula = value;
  }

  toHTMLRow() {
    let fila = "<tr>";
    fila +=
      "<td>" +
      this._fechaInicio +
      this._fechaFin +
      this._dniCliente +
      this._matricula +
      "</td>";
    return fila;
  }
}
class Agencia {
  _clientes;
  _alquileres;
  _vehiculos;

  constructor() {
    this._clientes = [];
    this._alquileres = [];
    this._vehiculos = [];
  }

  get clientes() {
    return this._clientes;
  }

  set clientes(value) {
    this._clientes = value;
  }

  get alquileres() {
    return this._alquileres;
  }

  set alquileres(value) {
    this._alquileres = value;
  }

  get vehiculos() {
    return this._vehiculos;
  }

  set vehiculos(value) {
    this._vehiculos = value;
  }

  altaCliente(oCliente) {
    return this.clientes.some((cliente) => cliente.dniCliente === oCliente.dniCliente) ? true : (this._clientes.push(oCliente), false);
  }

  altaVehiculo(oVehiculo) {
    return this.vehiculos.some((vehiculo) => vehiculo.matricula === oVehiculo.matricula) ? true : (this._vehiculos.push(oVehiculo), false);
  }

  altaAlquiler(oAlquiler) {
    let permiteAlquilarFechas = this.alquileres.every((alquiler) => 
      alquiler.fechaFin < oAlquiler.fechaInicio || 
      !alquiler.vehiculos.some((vehiculo) => vehiculo.matricula === oAlquiler.vehiculos.matricula) &&
      oAlquiler.fechaInicio >= Date.now() &&
      oAlquiler.fechaFin >= Date.now()
    );
    return permiteAlquilerFechas?(this._alquileres.push(oAlquiler),true):false;
  }
  bajaAlquiler(oAlquiler){
    return this.alquileres.some((alquiler) => alquiler.fechaFin < Date.now()) ? (true ,this._alquileres.pop(oAlquiler)):false;
  }
  listadoClientes(){
    return this.clientes.map((cliente) => cliente.toHTMLRow()).join("");
  }
  listadoVehiculos(){
    return this.vehiculos.map((vehiculo) => vehiculo.toHTMLRow()).join("");
  }
  listadoAlquileres(fechaInicio, fechaFin){
    return this.alquileres
      .filter((alquiler) => alquiler.fechaInicio >= fechaInicio && alquiler.fechaFin <= fechaFin)
      .map((alquiler) => alquiler.toHTMLRow())
      .join("");
  }
  listadoAlquileresCliente(dniCliente){
    return this.alquileres
      .filter((alquiler) => alquiler.dniCliente === dniCliente)
      .map((alquiler) => alquiler.toHTMLRow())
      .join("");
  }
  listadoCochesElectricos(){
    return this.vehiculos
      .filter((vehiculo) => vehiculo instanceof Coche && vehiculo.combustible === "Electrico")
      .map((vehiculo) => vehiculo.toHTMLRow())
      .join("");
  }
}
