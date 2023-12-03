/**
 * Representa un objeto Cliente.
 * @class
 * @classdesc Esta clase representa un objeto cliente.
 * Contiene información sobre el DNI, nombre y apellidos del cliente.
 * @param {string} dniCliente - El DNI del cliente.
 * @param {string} nombre - El nombre del cliente.
 * @param {string} apellidos - Los apellidos del cliente.
 */

class Cliente {
  _dniCliente;
  _nombre;
  _Apellidos;
  _usuario;

  constructor(dniCliente, nombre, Apellidos) {
    this._dniCliente = dniCliente;
    this._nombre = nombre;
    this._Apellidos = Apellidos;
    let separa = Apellidos.split(" ");
    let apellido1 = separa[0].trim().substring(0, 3);
    let apellido2 = separa[1].trim().substring(0, 3);
    this._usuario =
      nombre.trim().charAt(0) +
      apellido1 +
      apellido2 +
      dniCliente.toString().substring(5, 8);
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
    for (let atributo in this) {
      if (this.hasOwnProperty(atributo)) {
        fila += "<td>" + this[atributo] + "</td>";
      }
    }
    fila += "</tr>";
    return fila;
  }
}

/**
 * Representa un vehículo.
 * @class
 */
/**
 * Representa un objeto Vehiculo.
 * @class
 * @classdesc Esta clase representa un objeto vehículo.
 * Contiene información sobre la matrícula, marca y modelo del vehículo.
 * @param {string} matricula - El número de matrícula del vehículo.
 * @param {string} marca - La marca del vehículo.
 * @param {string} modelo - El modelo del vehículo.
 */
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
    for (let atributo in this) {
      if (this.hasOwnProperty(atributo)) {
        fila += "<td>" + this[atributo] + "</td>";
      }
    }
    fila += "</tr>";
    return fila;
  }
}

/**
 * Representa un objeto Coche.
 * @extends Vehiculo
 * @class
 * @classdesc Esta clase representa un objeto coche que extiende la clase Vehiculo.
 * Contiene información sobre la matrícula, marca, modelo, plazas y combustible del coche.
 * @param {string} matricula - El número de matrícula del coche.
 * @param {string} marca - La marca del coche.
 * @param {string} modelo - El modelo del coche.
 * @param {number} plazas - El número de plazas del coche.
 * @param {string} combustible - El tipo de combustible utilizado por el coche.
 */
class Coche extends Vehiculo {
  _plazas;
  _combustible;

  constructor(matricula, marca, modelo, plazas, combustible) {
    super(matricula, marca, modelo);
    this._plazas = plazas;
    this._combustible = combustible;
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
}
/**
 * Representa un objeto Moto.
 * @extends Vehiculo
 * @class
 * @classdesc Esta clase representa un objeto moto que extiende la clase Vehiculo.
 * Contiene información sobre la matrícula, marca, modelo y si es un ciclomotor.
 * @param {string} matricula - El número de matrícula de la moto.
 * @param {string} marca - La marca de la moto.
 * @param {string} modelo - El modelo de la moto.
 * @param {boolean} ciclomotor - Si es un ciclomotor o no.
 */
class Moto extends Vehiculo {
  _ciclomotor;

  constructor(matricula, marca, modelo, ciclomotor) {
    super(matricula, marca, modelo);
    this._ciclomotor = ciclomotor;
  }

  get ciclomotor() {
    return this._ciclomotor;
  }

  set ciclomotor(value) {
    this._ciclomotor = value;
  }
  toHTMLRow() {
    return super
      .toHTMLRow()
      .replace(
        /<td>true<\/td>/g /*Lo hace de manera global en todas las ocurrencias que haya true*/,
        "<td>SI</td>"
      )
      .replace(
        /<td>false<\/td>/g /*Lo hace de manera global en todas las ocurrencias que haya true*/,
        "<td>NO</td>"
      );
  }
}
/**
 * Representa un objeto Alquiller.
 *
 * @class Alquiler
 * @classdesc Esta clase representa un objeto Alquiler.
 * Contiene información sobre el alquiler de un cliente.
 * @param {string} _idAlquiler - Número de identificación del alquiler.
 * @param {Date} _fechaInicio - Fecha inicial del alquiler.
 * @param {Date} _fechaFin - Fecha final del alquiler.
 * @param {string} dniCliente - El dni del cliente del alquiler.
 * @property {Array} _vehiculos - El array de vehículos que tiene alquilados el cliente.
 */
class Alquiler {
  _idAlquiler;
  _fechaInicio;
  _fechaFin;
  _vehiculos;
  _cliente;

  constructor(fechaInicio, fechaFin, cliente) {
    this._fechaInicio = new Date(fechaInicio);
    this._fechaFin = new Date(fechaFin);
    this._cliente = cliente;
    this._vehiculos = [];
  }
  get idAlquiler() {
    return this._idAlquiler;
  }

  set idAlquiler(value) {
    this._idAlquiler = value;
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

  get cliente() {
    return this._cliente;
  }

  set cliente(value) {
    this._cliente = value;
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
      this.idAlquiler +
      "</td>" +
      "<td>" +
      this.fechaInicio +
      "</td>" +
      "<td>" +
      this.fechaFin +
      "</td>" +
      "<td>" +
      this.vehiculos +
      "</td>" +
      "<td>" +
      this.cliente +
      "</td></tr>";
    return fila;
  }
}
/**
 * Representa una Agencia.
 * @class
 * @property {Array} _clientes - El array de clientes.
 * @property {Array} _alquileres - El array de alquileres.
 * @property {Array} _vehiculos - El array de vehículos.
 */
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
    return this.clientes.some(
      (cliente) => cliente.dniCliente === oCliente.dniCliente
    )
      ? true
      : (this._clientes.push(oCliente), false);
  }

  altaVehiculo(oVehiculo) {
    return this.vehiculos.some(
      (vehiculo) => vehiculo.matricula === oVehiculo.matricula
    )
      ? true
      : (this._vehiculos.push(oVehiculo), false);
  }

  altaAlquiler(oAlquiler) {
    let permiteAlquilarFechas = this.alquileres.every(
      (alquiler) =>
        alquiler.fechaFin < oAlquiler.fechaInicio ||
        (!alquiler.vehiculos.some(
          (vehiculo) => vehiculo.matricula === oAlquiler.vehiculos.matricula
        ) &&
          oAlquiler.fechaInicio >= Date.now() &&
          oAlquiler.fechaFin >= Date.now())
    );
    return permiteAlquilarFechas
      ? (this._alquileres.push(oAlquiler), true)
      : false;
  }
  bajaAlquiler(idAlquiler) {
    let indice = this.alquileres.findIndex(
      (alquiler) => alquiler.idAlquiler == idAlquiler
    );
    return indice != -1 ? (this.alquileres.splice(indice, 1), true) : false;
  }
  listadoClientes() {
    let tablaInicio =
      "<table class='table' border='1'><thead><th class='col'>DNI CLIENTE</th><th class='col'>Nombre</th><th class='col'>Apellidos</th><th class='col'>Usuario</th></thead><tbody>";
    let tablaFinal = "</tbody></table>";
    return (
      tablaInicio +
      this.clientes.map((cliente) => cliente.toHTMLRow()).join("") +
      tablaFinal
    );
  }
  listadoVehiculos() {
    debugger;
    let tablaInicio =
      "<table class='table' border='1'><thead><th class='col'>Matricula</th><th class='col'>Marca</th><th class='col'>Modelo</th><th class='col'>Plazas</th><th class='col'>Combustible</th><th class='col'>Ciclomotor</th></thead><tbody>";
    let tablaFinal = "</tbody></table>";
    return (
      tablaInicio +
      this.vehiculos
        .map((vehiculo) => {
          if (vehiculo instanceof Moto) {
            return (
              vehiculo.toHTMLRow().slice(0, vehiculo.toHTMLRow().length - 16) +
              "<td>-</td><td>-</td>" +
              "<td>" +
              (vehiculo.ciclomotor == true ? "SI" : "NO") +
              "</td></tr>"
            );
          } else {
            return (
              vehiculo.toHTMLRow().slice(0, vehiculo.toHTMLRow().length - 5) +
              "<td>-</td></tr>"
            );
          }
        })
        .join("") +
      tablaFinal
    );
  }
  listadoAlquileres(fechaInicio, fechaFin) {
    let tablaInicio =
      "<table class='table' border='1'><thead><th>Id Alquiler</th><th>Fecha Inicio</th><th>Fecha Fin</th><th>dniClientes</th><th>Combustible</th></thead><tbody>";
    let tablaFinal = "</tbody></table>";
    return (
      tablaInicio +
      this.alquileres
        .filter(
          (alquiler) =>
            alquiler.fechaInicio >= fechaInicio && alquiler.fechaFin <= fechaFin
        )
        .map((alquiler) => alquiler.toHTMLRow())
        .join("") +
      tablaFinal
    );
  }
  listadoAlquileresCliente(dniCliente) {
    let tablaInicio =
      "<table class='table' border='1'><thead><th>Id Alquiler</th><th>Fecha Inicio</th><th>Fecha Fin</th><th>Matricula</th><th>Combustible</th></thead><tbody>";
    let tablaFinal = "</tbody></table>";
    return tablaInicio+this.alquileres
      .filter((alquiler) => alquiler.dniCliente === dniCliente)
      .map((alquiler) => alquiler.toHTMLRow())
      .join("")+tablaFinal;
  }
  listadoCochesElectricos() {
    return this.vehiculos
      .filter(
        (vehiculo) =>
          vehiculo instanceof Coche && vehiculo.combustible === "Electrico"
      )
      .sort(
        (a, b) => b.plazas - a.plazas || a.matricula.localeCompare(b.matricula)
      )
      .map((vehiculo) => vehiculo.toHTMLRow())
      .join("");
  }

  siguienteCodigoAlquiler() {
    return this.alquileres.length === 0
      ? 1
      : this.alquileres[this.alquileres.length - 1].idAlquiler + 1;
  }
}
