class Cliente{
    #dniCliente;
    #nombre;
    #Apellidos;
    #usuario;
        constructor(dniCliente, nombre, Apellidos) {
            this.dniCliente = dniCliente;
            this.nombre = nombre;
            this.Apellidos = Apellidos;
            this.usuario = nombre.trim().charAt(0)+apellido1+apellido2+dniCliente.toString().substring(5,8);
            let separa=Apellidos.split(" ");
            let apellido1=separa[0].trim().substring(0,3);
            let apellido2=separa[1].trim().substring(0,3);
        }

        get dniCliente() {
            return this.#dniCliente;
        }

        set dniCliente(value) {
            this.#dniCliente = value;
        }

        get nombre() {
            return this.#nombre;
        }

        set nombre(value) {
            this.#nombre = value;
        }

        get Apellidos() {
            return this.#Apellidos;
        }

        set Apellidos(value) {
            this.#Apellidos = value;
        }

        get usuario() {
            return this.#usuario;
        }

        set usuario(value) {
            this.#usuario = value;
        }
       toHTMLRow(){
            let fila="<tr>"
            fila+="<td>"+this.#usuario+this.#nombre+this.#Apellidos+this.#dniCliente+"</td>"
            return fila;
        }
    }
class Vehiculo{
    #matricula;
    #marca;
    #modelo;

    constructor(matricula, marca, modelo) {
        this.#matricula = matricula;
        this.#marca = marca;
        this.#modelo = modelo;
    }

    get matricula() {
        return this.#matricula;
    }

    set matricula(value) {
        this.#matricula = value;
    }

    get marca() {
        return this.#marca;
    }

    set marca(value) {
        this.#marca = value;
    }

    get modelo() {
        return this.#modelo;
    }

    set modelo(value) {
        this.#modelo = value;
    }
    toHTMLRow(){
        let fila="<tr>"
        fila+="<td>"+this.#matricula+this.#marca+this.#modelo+"</td>"
        return fila;
    }
}
class Coches extends Vehiculo{

}