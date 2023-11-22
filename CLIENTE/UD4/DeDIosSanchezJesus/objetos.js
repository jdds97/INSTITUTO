class Cliente{
    #dniCliente;
    #nombre;
    #Apellidos;
    #usuario;
        constructor(dniCliente, nombre, Apellidos, usuario) {
            this.dniCliente = dniCliente;
            this.nombre = nombre;
            this.Apellidos = Apellidos;
            this.usuario = usuario;
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
