function devolver(){

    let nombre = frmNombreApellidos.nombre.value;
    let apellido1 = frmNombreApellidos.apellido1.value;
    let apellido2 = frmNombreApellidos.apellido2.value;
    

    document.getElementById("salida1").innerHTML = nombre.trim().length+apellido1.trim().length+apellido2.trim().length;
    document.getElementById("salida2").innerHTML = nombre.toUpperCase()+ " " + apellido1.toUpperCase()+ " "+apellido2.toUpperCase()+"<br>"+nombre.toLowerCase() + " "+apellido1.toLowerCase()+" " + apellido2.toLowerCase();
    document.getElementById("salida3").innerHTML = nombre+"\n"+apellido1.trim()+"\n"+apellido2.trim();
    document.getElementById("salida4").innerHTML = nombre.charAt(0)+apellido1.trim().substring(0,2)+apellido2.trim().substring(0,3);
}