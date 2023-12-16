class Arbol {
  _codigo;
  _tallaje;
  _especie;
  constructor(codigo, tallaje, especie) {
    this._codigo = codigo;
    this._tallaje = tallaje;
    this._especie = especie;
  }
  get codigo() {
    return this._codigo;
  }
  set codigo(value) {
    this._codigo = value;
  }

  get tallaje() {
    return this._tallaje;
  }
  set tallaje(value) {
    this._tallaje = value;
  }

  get especie() {
    return this._especie;
  }
  set especie(value) {
    this._especie = value;
  }
  toHTMLRow() {
    return "<tr>" + Object.values(this).map(atributo => "<td>" + atributo + "</td>").join("") + "</tr>";
  }
}
class Perenne extends Arbol {
  _frutal;
  constructor(codigo, tallaje, especie, frutal) {
    super(codigo, tallaje, especie);
    this._frutal = frutal;
  }
  get frutal() {
    return this._frutal;
  }
  set frutal(value) {
    this._frutal = value;
  }

  toHTMLRow() {
    return super.toHTMLRow().replace(/<td>true<\/td>/g/*Lo hace de manera global en todas las ocurrencias que haya true*/, "<td>SI</td>").replace(/<td>false<\/td>/g/*Lo hace de manera global en todas las ocurrencias que haya true*/, "<td>NO</td>");
  }
}
class Caduco extends Arbol {
  _mesFloracion;
  constructor(codigo, tallaje, especie, mesFloracion) {
    super(codigo, tallaje, especie);
    this._mesFloracion = mesFloracion;
  }
  get mesFloracion() {
    return this._mesFloracion;
  }
  set mesFloracion(value) {
    this._mesFloracion = value;
  }
}
class Vivero {
  _arboles;
  constructor() {
    this._arboles = [];
  }
  get arboles() {
    return this._arboles;
  }
  set arboles(value) {
    this._arboles = value;
  }

  /*altaArbol(arbol) {
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
    }
    return encontrado;
  }
  */
  altaArbol(arbol) {
    let encontrado = this.buscarArbol(arbol);

    if (encontrado == -1) {
      //Si no lo encuentra será -1
      this.arboles.push(arbol);
      return true;
    }

    return false;
  }
  buscarArbol(arbol) {
    let encontrado =
      this.arboles.filter((elemento) => arbol.codigo == elemento.codigo)
        .length == 1;

    encontrado = this.arboles.includes(arbol);

    if (encontrado) return arbol.codigo;
    return -1;
  }
  toHTMLTable() {
    let tabla =
      "<table border='1'><thead><th>Codigo</th><th>Tallaje</th><th>Especie</th><th>Frutal</th><th>Mes Floracion</th></thead>";
    for (let arbol of this.arboles) {
      tabla += arbol.toHTMLRow();
    }
    return tabla + "</table>";
  }

  tallajeArbol(iCodigo, iTallaje) {
    let oArbol = this.buscarArbol(iCodigo);
    let mensaje = "";
    if (oArbol != undefined) {
      if (oArbol.tallaje > iTallaje) {
        mensaje += "El tallaje introducido es menor que el tallaje actual";
      } else {
        oArbol.tallaje = iTallaje;
        mensaje += "Tallaje actualizado correctamente";
        mensaje += oArbol instanceof Perenne ? "Perenne" : "Caduco";
      }
    }
    return mensaje;
  }
  /*listadoPerennes(iMinAltura) {
    debugger;
    let tabla =
      "<table border='1'><thead><th>Codigo</th><th>Tallaje</th><th>Especie</th><th>Frutal</th></thead><tbody>";
    let arbolesPerennes = this.arboles.filter(
      (arbol) => arbol instanceof Perenne && arbol.tallaje >= iMinAltura
    ); //chorizo  con el "table+=" al principio sort((a,b)=>a.tallaje-b.tallaje).toHTMLRow()
    arbolesPerennes.sort((a, b) => b.tallaje - a.tallaje);
    for (let arbol of arbolesPerennes) {
      tabla += arbol.toHTMLRow();
    }
    tabla += "</tbody></table>";
    return tabla;
  }*/
  listadoPerennes(minAltura) {
    let listadoPerenne = this.arboles.filter(
      (arbol) => arbol instanceof Perenne && arbol.tallaje >= minAltura
    );

    listadoPerenne.sort((a1, a2) => a2.tallaje - a1.tallaje);

    let salida = "<table border='1'>";
    salida +=
      "<thead><tr><th>Código</th><th>Tallaje</th><th>Especie</th><th>Frutal</th></thead><tbody>";
    for (let arbol of listadoPerenne) {
      salida += arbol.toHTMLRow();
    }
    salida += "</tbody></table>";
    return salida;
  }
  listadoCaducos(sMesFloracion) {
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const iMesFloracion = meses[Number(sMesFloracion) - 1];
    let tabla =
      "<table border='1'><thead><th>Codigo</th><th>Tallaje</th><th>Especie</th><th>Mes Floracion</th></thead><tbody>";
    let arbolesCaducos = this.arboles.filter(
      (arbol1) =>
        arbol1.mesFloracion == iMesFloracion ||
        (arbol1.mesFloracion ==
          sMesFloracion /*Por si nos devuelve un string*/ &&
          arbol1 instanceof Caduco)
    ); //chorizo  con el "table+=" al principio sort((a,b)=>a.tallaje-b.tallaje).toHTMLRow()
    //arbolesPerennes.sort((a,b)=>a.tallaje-b.tallaje).toHTMLRow();
    /*for (const arbol of arbolesCaducos) {
      tabla += arbol.toHTMLRow();
    }
    */
    for (let arbol of arbolesCaducos) {
      tabla += arbol.toHTMLRow();
    }
    tabla += "</tbody></table>";
    return tabla;
  }
  totatlArbolesVenta() {
    return numero;
  }
  siguienteCodigoArbol() {
    if (this.arboles.length == 0) {
      return 1;
    } else {
      return this.arboles[this.arboles.length - 1].codigo + 1;
    }
  }
}
