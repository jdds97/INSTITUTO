class Arbol {
  #codigo;
  #tallaje;
  #especie;
  get codigo() {
    return this.#codigo;
  }
  set codigo(value) {
    this.#codigo = value;
  }

  get tallaje() {
    return this.#tallaje;
  }
  set tallaje(value) {
    this.#tallaje = value;
  }

  get especie() {
    return this.#especie;
  }
  set especie(value) {
    this.#especie = value;
  }
  toHTMLRow() {
    let fila = "<tr>";
    let atributos = Object.values(this);
    for (const atributo of atributos) {
      fila += "<td>" + atributo + "</td>";
    }
    return fila + "</tr>";
  }
}
class Perenne extends Arbol {
  #frutal;
  constructor(codigo, tallaje, especie, frutal) {
    super(codigo, tallaje, especie);
    this.frutal = frutal;
  }
  get frutal() {
    return this.#frutal;
  }
  set frutal(value) {
    this.#frutal = value;
  }
  toHTMLRow() {
    let fila = super.toHTMLRow();
    fila = fila.slice(0, fila.length - 5); //5 caracteres de </tr> para introducir el nuevo atributo frutal de Perenne
    fila += "<td>" + (this.frutal ? "Si" : "No") + "</td>";
    return fila;
  }
}
class Caduco extends Arbol {
  #mesFloracion;
  constructor(codigo, tallaje, especie, mesFloracion) {
    super(codigo, tallaje, especie);
    this.mesFloracion = mesFloracion;
  }
  get mesFloracion() {
    return this.#mesFloracion;
  }
  set mesFloracion(value) {
    this.#mesFloracion = value;
  }
}
class Vivero {
  #arboles;
  constructor() {
    this.arboles = [];
  }
  altaArbol(arbol) {
    //let encontrado=this.arboles.includes(arbol)//Devuelve true o false
    let encontrado =
      this.arboles.filter((arbol1) => arbol1.codigo == arbol.codigo).length ==
      1; //Devuelve si el array filtrado es igual a 1,entonces es true si no es false
    //let encontrado=this.arboles.find((arbol1)=>arbol1.codigo==arbol.codigo)!=null; // Si es distinto a null encontrado es true si no es false
    if (!encontrado) {
      //Si encontrado es igual a false
      this.arboles.push(arbol);
      return true;
    } else {
      alert("El arbol ya existe");
      return false;
    }
  }
  buscarArbol(iCodigo) {
    let encontrado = this.arboles.find((arbol1) => arbol1.codigo == iCodigo);
    if (encontrado == undefined) {
      alert("El árbol no existe");
    } else {
      return encontrado;
    }
  }
  toHTMLTable() {
    let tabla =
      "<table border='1'><thead><th>Codigo</th><th>Tallaje</th><th>Especie</th><th>Frutal</th><th>Mes Floracion</th></thead>";
    for (const arbol of this.arboles) {
      tabla += arbol.toHTMLRow();
    }
    return tabla + "</table>";
  }
  siguienteCodigoArbol() {
    if (this.arboles.length == 0) {
      return 1;
    } else {
      return this.arboles[this.arboles.length - 1].codigo + 1;
    }
  }
  tallajeArbol(iCodigo, iTallaje) {
    let oArbol = this.buscarArbol(iCodigo);
    if (oArbol != undefined) {
      if (oArbol.tallaje > iTallaje) {
        alert("El tallaje introducido es menor que el tallaje actual");
      } else {
        oArbol.tallaje = iTallaje;
        alert("Tallaje actualizado correctamente");
        return "Correcto";
      }
    }
  }
}
