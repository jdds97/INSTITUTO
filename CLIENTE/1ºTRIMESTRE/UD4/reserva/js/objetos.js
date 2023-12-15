class Movimiento {
    _mascota;
    _colaborador;
    _tipo;
    _fecha;

    constructor(oMascota, oColaborador, tipo, fecha) {
        this._mascota = oMascota;
        this._colaborador = oColaborador;
        this._tipo = tipo;
        this._fecha = fecha;
    }

    get mascota() {
        return this._mascota;
    }

    set mascota(value) {
        this._mascota = value;
    }

    get colaborador() {
        return this._colaborador;
    }

    set colaborador(value) {
        this._colaborador = value;
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(value) {
        this._tipo = value;
    }

    get fecha() {
        return this._fecha;
    }

    set fecha(value) {
        this._fecha = value;
    }

    toHtmlRow() {
        return (
            "<tr>" +
            Object.values(this)
            .map((atributo) => "<td>" + atributo + "</td>")
            .join("") +
            "</tr>"
        );
    }
}
//MASCOTA
class Mascota {
    _sIdMascota;
    _sPeso;

    constructor(sIdMascota, sPeso) {
        this._sIdMascota = sIdMascota;
        this._sPeso = sPeso;
    }

    get sIdMascota() {
        return this._sIdMascota;
    }

    set sIdMascota(value) {
        this._sIdMascota = value;
    }

    get sPeso() {
        return this._sPeso;
    }

    set sPeso(value) {
        this._sPeso = value;
    }

    toHtmlRow() {
        return (
            "<tr>" +
            Object.values(this)
            .map((atributo) => "<td>" + atributo + "</td>")
            .join("") +
            "</tr>"
        );
    }
}
class Gato extends Mascota {
    _raza;
    constructor(sIdMascota, sPeso, sRaza) {
        super(sIdMascota, sPeso);
        this._raza = sRaza;
    }

    get raza() {
        return this._raza;
    }

    set raza(value) {
        this._raza = value;
    }

    toHtmlRow() {
        return (
            "<tr>" +
            Object.values(this)
            .map((atributo) => "<td>" + atributo + "</td>")
            .join("") +
            "</tr>"
        );
    }
}
class Perro extends Mascota {
    _altura;
    constructor(sIdMascota, sPeso, sAltura) {
        super(sIdMascota, sPeso);
        this._altura = sAltura;
    }

    get altura() {
        return this._altura;
    }

    set altura(value) {
        this._altura = value;
    }

    toHtmlRow() {
        return (
            "<tr>" +
            Object.values(this)
            .map((atributo) => "<td>" + atributo + "</td>")
            .join("") +
            "</tr>"
        );
    }
}

class Colaborador {
    _DNI;
    _nombre;
    _apellidos;

    constructor(DNI, nombre, apellidos) {
        this._DNI = DNI;
        this._nombre = nombre;
        this._apellidos = apellidos;
    }

    get DNI() {
        return this._DNI;
    }

    set DNI(value) {
        this._DNI = value;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get apellidos() {
        return this._apellidos;
    }

    set apellidos(value) {
        this._apellidos = value;
    }

    toHtmlRow() {
        return (
            "<tr>" +
            Object.values(this)
            .map((atributo) => "<td>" + atributo + "</td>")
            .join("") +
            "</tr>"
        );
    }
}
class Albergue {
    _mascotas;
    _colaboradores;
    _movimientos;
    constructor(mascotas, colaboradores, movimientos) {
        this._mascotas = mascotas;
        this._colaboradores = colaboradores;
        this._movimientos = movimientos;
    }
    get mascotas() {
        return this._mascotas;
    }
    set mascotas(value) {
        this._mascotas = value;
    }
    get colaboradores() {
        return this._colaboradores;
    }
    set colaboradores(value) {
        this._colaboradores = value;
    }
    get movimientos() {
        return this._movimientos;
    }
    set movimientos(value) {
        this._movimientos = value;
    }
    altaMascota(oMascota) {
        let encontrado = this._mascotas.includes(
            (mascota) => mascota.idMascota == oMascota.idMascota
        );
        let respuesta = "";
        if (!encontrado) {
            this._mascotas.push(oMascota);
            respuesta = "Correcto";
        }
        return respuesta;
    }
    altaColaborador(oColaborador) {
        let encontrado = this._colaboradores.includes(
            (colaborador) => colaborador.DNI == oColaborador.DNI
        );
        let respuesta = "";
        if (!encontrado) {
            this._colaboradores.push(oColaborador);
            respuesta = "Correcto";
        }
        return respuesta;
    }
    movimientoMascota(sDNI, sidMascota, sTipo, dtFecha) {
        //Mascota no registrada
        let encontradoMascota = this._mascotas.includes(
            (mascota) => mascota.idMascota == sidMascota
        );
        //Colaborador no registrado
        let encontradoColaborador = this._colaboradores.includes(
            (colaborador) => colaborador.DNI == sDNI
        );
        //Mascota ya recogida
        let mascotaRecogida = this._movimientos.includes(
            (movimiento) => movimiento.fecha.getFullYear() == dtFecha.getFullYear() && movimiento.fecha.getMonth() == dtFecha.getMonth() && movimiento.fecha.getDay() == dtFecha.getDay());
        //Mensaje de respuesta
        let respuesta = "";
        //Mascota no registrada
        if (!encontradoMascota) {
            respuesta = "Mascota no registrada previamente";
        } //Colaborador no registrado
        else if (!encontradoColaborador) {
            respuesta = "Colaborador no registrado previamente";
        } else if (recogida) {

        }
        if (!encontradoMovimiento) {
            return "Mascota no recogida previamente";
        } else {
            return "Mascota ya recogida";
        }

        {
            let oMovimiento = new Movimiento(sDNI, sidMascota, sTipo, dtFecha);
            this._movimientos.push(oMovimiento);
            return "Correcto";
        }
    }
    return respuesta;
}
listadoMascotas() {
    return tabla;
}
listadoColaboradores() {
    return tabla;
}
toHtmlRow() {
    return (
        "<tr>" +
        Object.values(this)
        .map((atributo) => "<td>" + atributo + "</td>")
        .join(" ") +
        "</tr>"
    );
}
}