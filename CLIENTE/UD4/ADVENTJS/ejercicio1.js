/*function manufacture(gifts, materials) {
  let regalosCoincidentes = [];
  if (materials.startsWith(gifts[0]?.substring(0, 1))) {
    regalosCoincidentes.push(gifts[0]);
    for (let i = 1; i < gifts.length; i++) {
        let regalo = gifts[i];
        if (i >= 1 && materials.includes(regalo.substring(0, 2))) {
          regalosCoincidentes.push(regalo);
        }
      }
  } else {
    for (let i = 1; i < gifts.length; i++) {
        let regalo = gifts[i];
        if (i >= 1 && materials.includes(regalo.substring(0, 2))) {
          regalosCoincidentes.push(regalo);
        }
      }
  }

  return regalosCoincidentes;
}
*/
/*En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
*/
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
// 'libro' NO porque sus letras NO están en 'psli'
// 'ps5' NO porque sus letras NO están en 'psli'
/*Hazme el ejercicio de arriba el metodo manufacture*/
function manufacture(gifts, materials) {
  let regalosCoincidentes = [];
  for (let i = 0; i < gifts.length; i++) {
    let regalo = gifts[i];
    if (materials.includes(regalo.substring(0, 1))) {
      regalosCoincidentes.push(regalo);
    }
  }
  return regalosCoincidentes;
}
function manufacture(gifts, materials) {
    let regalosCoincidentes = [];
    for(let regalo of gifts){
       if (materials.includes(regalo)||materials.includes(regalo.length-1)){
        regalosCoincidentes.push(regalo);
      }
    }
   
  
    return regalosCoincidentes;
  }
  
  si entre las 3 primeras letras de los materiales coincide con las dos primeras letras de la primera ocurrencia incluye ese regalo 
    si no mira si la siguiente ocurrencia coincide con su longitud - 1 y si coincide lo añade