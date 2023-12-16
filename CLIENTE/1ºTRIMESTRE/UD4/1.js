class Producto{
    #nombre;
    #unidades;
    #precio;
    constructor(nombre, precio,unidades){
        this.#nombre = nombre;
        this.#unidades = unidades;
        /*Ataco al setter directamente no al atributo*/ 
        this.precio= precio;
    }
    valorEnStock(){
        return this.#precio * this.#unidades;
    }
    incrementarStock(numero){
        this.#unidades+=numero;
    }
    decrementarStock(numero){
        if(numero<this.#unidades)
        this.#unidades-=numero;
    }
    toString(){
        return this.nombre + " " + this.precio;
    }
    get nombre() {
        return this.#nombre;
    }
    set nombre(numero) {
        this.#nombre = value;
    }
    
    get unidades() {
        return this.#unidades;
    }
    set unidades(numero) {
        this.#unidades = value;
    }
    
    get precio() {
        return this.#precio;
    }
    set precio(numero) {
        if(numero>=0)
        this.#precio = numero;
        this.#precio=Math.abs(numero);
    }
}
const producto1=new Producto("botella",3,20);
producto1.incrementarStock(10);
producto1.decrementarStock(4);
producto1.nombre="Coca cola";
producto1.precio=5;
console.log(producto1.toString);