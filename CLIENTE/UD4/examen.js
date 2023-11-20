class Arbol{
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
    toHTMLRow(){
        let fila="<tr>"
        let atributos=Object.values(this)
        for (const atributo of atributos) {
            fila+="<td>"+atributo+"</td>"
        }
        return fila +"</tr>";
    }
}
class Perenne extends Arbol{
    #frutal;
    constructor(codigo,tallaje,especie,frutal){
        super(codigo,tallaje,especie)
        this.frutal=frutal;
    }
    get frutal() {
        return this.#frutal;
    }
    set frutal(value) {
        this.#frutal = value;
    }
    toHTMLRow(){
        let fila=super.toHTMLRow();
        fila=fila.slice(0,fila.length-5);//5 caracteres de </tr> para introducir el nuevo atributo frutal de Perenne
        fila+="<td>"+(this.frutal?"Si":"No")+"</td>"
        return fila;
    }
    
}   
class Caduco extends Arbol{
    #mesFloracion;
    constructor(codigo,tallaje,especie,mesFloracion){
        super(codigo,tallaje,especie)
        this.mesFloracion=mesFloracion;
    }
    get mesFloracion() {
        return this.#mesFloracion;
    }
    set mesFloracion(value) {
        this.#mesFloracion = value;
    }
}
class Vivero{
    #arboles;
    constructor(){
        this.arboles=[];
    }
    addArbol(arbol){
        this.arboles.push(arbol);
    }
    toHTMLTable(){

        let tabla="<table border='1'><thead><th>Codigo</th><th>Tallaje</th><th>Especie</th><th>Frutal</th><th>Mes Floracion</th></thead>";
        for (const arbol of this.arboles) {
            tabla+=arbol.toHTMLRow();
        }
        return tabla+"</table>";
    }
}