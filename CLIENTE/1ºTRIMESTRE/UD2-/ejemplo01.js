function mostrar(){
    debugger;
    let edad=frmDatos.edad.value;
    let nombre=frmDatos.nombre.value;
    let estado_civil=frmDatos.estadocivil.value;
    document.getElementById("salida1").innerHTML=nombre+" "+" tiene "+edad+" años" +" y su estado civil es "+estado_civil;
    
}