let numerosResultantes = [];
function primosPalindromos() {
    for (let i = 0; i <= 1000; i++) {
        if (esPrimo(i) && esPalindromo(i)) {
            numerosResultantes.push(i);
        }
    }
    alert(numerosResultantes.join(","));
}0
primosPalindromos();

function esPrimo(numero) {
    let limiteMaximo = Math.floor(Math.sqrt(numero));
    //Truncar la raiz cuadrada del número, es una propiedad matemática. Valdría comprobar hasta la mitad
    let primo = true;
    let i = 2;
    while (primo && i <= limiteMaximo) {
        if (numero % i == 0) {
            primo = false;
        } else {
            i++;
        }
    }
    return primo;
}
function esPalindromo(numero) {
    let numeroString = numero.toString();
    let longitud = numeroString.length;
    for (let i = 0; i < longitud / 2; i++) {
        if (numeroString[i] !== numeroString[longitud - 1 - i]) {
            return false;
        }
    }
    return true;
}
