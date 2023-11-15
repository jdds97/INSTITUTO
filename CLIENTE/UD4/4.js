class Figura {
  #color;
  constructor(color) {
    this.#color = color;
  }
  imprimir() {
    return "Soy una figura de color" + this.#color;
  }
  get color() {
    return this.#color;
  }
  set color(color) {
    this.#color = color;
  }
}
class Rectangulo extends Figura {
  #base;
  #altura;
  constructor(color,altura,base){
    super(color);
    this.#altura=altura;
    this.#base=base;
  }
  calcularArea() {
    return this.base*this.altura;
  }
  imprimir(){
  return "Soy un rectangulo de color "+this.color+"y de área " + this.calcularArea();
}
  get base(){
    return this.#base;
  }
  set base(base){
    this.#base=base;
  }
  get altura(){
    return this.#altura;
  }
  set altura(altura){
    this.#altura=altura
  }

}
class Circulo extends Figura {
  #radio;
  constructor(color,radio){
    super(color);
    this.#color=color;
    this.#radio=radio;
  }
  calcularArea() {
   return Math.PI * (this.#radio*this.#radio);
    
  }
  imprimir(){
    return "Soy un rectangulo de color "+this.color+"y de área " + this.calcularArea();
  }
  get radio(){
    return this.#radio;
  }
  set radio(radio){
    this.#radio=radio;
  }
}

let r=new Rectangulo("rojo",7,8);
console.log(r.imprimir());