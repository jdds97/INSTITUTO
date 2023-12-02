class Ordenador {
    //atributos
    _marca;
    _modelo;
    _precio;
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
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

    get precio() {
        return this._precio;
    }

    set precio(value) {
        this._precio = value;
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
class Portatil extends Ordenador {
    _discoSSD;
    _pulgadas;
    constructor(marca, modelo, precio, discoSSD, pulgadas) {
        super(marca, modelo, precio)
        this._discoSSD = discoSSD;
        this._pulgadas = pulgadas;
    }
    get discoSSD() {
        return this._discoSSD;
    }

    set discoSSD(value) {
        this._discoSSD = value;
    }

    get pulgadas() {
        return this._pulgadas;
    }

    set pulgadas(value) {
        this._pulgadas = value;
    }
    toHTMLRow() {
        return super.toHTMLRow().replace(/<td>true<\/td>/g /*Lo hace de manera global en todas las ocurrencias que haya true*/ , "<td>SI</td>").replace(/<td>false<\/td>/g /*Lo hace de manera global en todas las ocurrencias que haya true*/ , "<td>NO</td>");
    }
}
class Sobremesa extends Ordenador {
    _tarjetaGrafica;
    constructor(marca, modelo, precio, tarjetaGrafica) {
        super(marca, modelo, precio)
        this._tarjetaGrafica = tarjetaGrafica;

    }
    get tarjetaGrafica() {
        return this._tarjetaGrafica;
    }
    set tarjetaGrafica(value) {
        this._tarjetaGrafica = value;
    }
    toHtmlRow() {
        let tablaPortatil = super.toHTMLRow();
        tablaPortatil = tablaPortatil.slice(0, tablaPortatil.length - 5);
        tablaPortatil += "<td>" + this._tarjetaGrafica + "</td></tr>";
        return tablaPortatil;
    }
}
class StockOrdenadores {
    _ordenador;
    _stock;

    constructor(ordenador, stock) {
        this._ordenador = ordenador;
        this._stock = stock;
    }
    get ordenador() {
        return this._ordenador;
    }
    set ordenador(value) {
        this._ordenador = value;
    }

    get stock() {
        return this._stock;
    }
    set stock(value) {
        this._stock = value;
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
class Tienda {
    _catalogo;
    _stock;
    constructor() {
        this._catalogo = [];
        this._stock = [];
    }
    get catalogo() {
        return this._catalogo;
    }
    set catalogo(value) {
        this._catalogo = value;
    }
    get stock() {
        return this._stock;
    }
    set stock(value) {
        this._stock += value;
    }
    altaCatalogo(oOrdenador) {
        let encontrado = this._catalogo.includes((ordenador) => ordenador.modelo == oOrdenador.modelo && ordenador.marca == oOrdenador.marca);
        if (!encontrado) {
            this._catalogo.push(oOrdenador);
        }
        return encontrado;
    }
    entradaStock(marca, modelo, unidades) {
        let encontrado = this.catalogo.includes((ordenador) => ordenador.marca == marca && ordenador.modelo == modelo);
        let oOrdenador = this.stock.find((ordenador) => ordenador.marca == marca && ordenador.modelo == modelo);
        let respuesta = "";
        if (!encontrado) {
            respuesta = "No se ha encontrado el ordenador";
        } else {


            if (encontrado && oOrdenador.length == undefined) {
                let ordenadorStock = new StockOrdenadores(oOrdenador);
                this.stock.push(ordenadorStock);
                ordenadorStock.stock += unidades;
            } else {
                oOrdenador.stock += unidades;
            }
            respuesta = "Si se ha encontrado el ordenador,el stock del ordenador es de " + ordenadorStock.stock();
        }
        return respuesta;
    }
    salidaStock(marca, modelo, unidades) {
        let encontrado = this.catalogo.includes((ordenador) => ordenador.marca == marca && ordenador.modelo == modelo);
        let oOrdenador = this.stock.find((ordenador) => ordenador.marca == marca && ordenador.modelo == modelo);
        let respuesta = "";
        if (!encontrado) {
            respuesta = "No se ha encontrado el ordenador";
        } else {
            oOrdenador.stock -= unidades;
            respuesta = "Si se ha encontrado el ordenador,el stock del ordenador es de " + ordenadorStock.stock;
        }
        return respuesta;
    }
    listadoCatalogo() {
        let tabla =
            "<table border='1'><thead><th>Tipo</th><th>Marca</th><th>Modelo</th><th>Precio</th><th>Tarjeta Grafica</th></thead><tbody>";
        let listadoCatalogo = this._catalogo;
        for (let ordenador of listadoCatalogo) {
            tabla += ordenador.toHtmlRow();
        }
        tabla += "</tbody></table>";
        return tabla;

    }
    listadoStock() {
        let tablaPortatiles =
            "<table border='1'><thead><th>Tipo</th><th>Marca</th><th>Modelo</th><th>Precio</th><th>Tarjeta Grafica</th></thead>Valor<tbody>";
        let listadoStockPortatiles = this._stock.filter((ordenador) => ordenador instanceof Portatil);
        for (let ordenador of listadoStockPortatiles) {
            tablaPortatiles += ordenador.toHtmlRow() + "<tr>" + ordenador.precio() + "</tr>";
        }
        tablaPortatiles += "</tbody></table>";
        let tablaSobremesa = "<table border='1'><thead><th>Tipo</th><th>Marca</th><th>Modelo</th><th>Precio</th><th>Tarjeta Grafica</th></thead><tbody>";
        let listadoStockSobremesa = this._stock.filter((ordenador) => ordenador instanceof Sobremesa);
        for (let ordenador of listadoStockSobremesa) {
            tablaSobremesa += ordenador.toHtmlRow() + "<tr>" + ordenador.precio() + "</tr>";
        }
        tablaSobremesa += "</tbody></table>";
        let tabla = tablaPortatiles + tablaSobremesa;
        return tabla;

    }
    numPortatilesStock() {
        let numPortatilesStock = this._stock.filter((ordenador) => ordenador instanceof Portatil && ordenador.stock() > 0).length;
        return numPortatilesStock;

    }
    numSobremesaStock() {
        let numSobremesaStock = this._stock.filter((ordenador) => ordenador instanceof Sobremesa && ordenador.stock() > 0).length;
        return numSobremesaStock;
    }
    importeTotalStock() {
        let tabla = "<h1>Totales</h1><br>";
        let stockPortatiles = this.numPortatilesStock();
        let stockSobremesa = this.numSobremesaStock();
        tabla += "<h2>Total stock portátiles:</h2>" + stockPortatiles
        tabla += "<h2>Total stock sobremesa:</h2>" + stockSobremesa
        tabla += "<h2>Importe total stock:</h2>" + stockPortatiles + stockSobremesa
        return tabla;
    }
}