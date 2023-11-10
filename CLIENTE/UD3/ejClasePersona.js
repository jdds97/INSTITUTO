class Persona {
  #nombre;
  #apellidos;
  #edad;
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }

  get nombre_() {
    return this._nombre;
  }
  set nombre_(value) {
    this.#nombre = value;
  }
  get apellidos() {
    return this._apellidos;
  }
  set apellidos(value) {
    this.#apellidos = value;
  }

  get edad() {
    return this.#edad;
  }
  set edad(value) {
    this.#edad = value;
  }

  
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }

}
