let arrayDNI = [];
let numero=0;
preguntar();
function preguntar() {
    var respuesta = prompt("Dime una letra de la A a la Z");
    if (respuesta.match(/[A-Z]/)) {
        for (let i = 0; i <=999; i++) {
        numero++; 
        if (i < 100) {
            arrayDNI.push(i.toString().padStart(3,"0")+"-"+respuesta);
        }
        else {
            arrayDNI.push(i+"-"+respuesta);
        }
    }
    } else {
        return preguntar();
    }
    alert("Se han generado "+numero+" DNI con la letra "+respuesta)
    alert(arrayDNI.join(","));
}