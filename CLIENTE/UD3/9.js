function diferencia(){
    debugger;
    const fecha1=new Date(frmFechas.fecha1.value);
    const fecha2=new Date(frmFechas.fecha2.value);
    let dias,meses,años=0;
    let anterior;
    let diferencia;
    if (fecha1>fecha2){
        anterior="La segunda fecha es anterior";
    }
    else if(fecha1==fecha2){
        anterior="Las dos fechas son iguales";
        diferencia=(fecha2.valueOf()-fecha1.valueOf())/(1000*3600*24);
    }
    else{
        anterior="La primera fecha es anterior";
        diferencia=(fecha1.valueOf()-fecha2.valueOf())/(1000*3600*24);
    }
    let años1=fecha1.getFullYear();
    let años2=fecha2.getFullYear();
    let meses1=fecha1.getMonth();
    let meses2=fecha2.getMonth();
    let dias1=fecha1.getDate();
    let dias2=fecha2.getDate();
    diferencia="La diferencia en meses es: "+(meses1-meses2)+"<br>"
    +"La diferencia en dias es:"+(dias1-dias2)+"<br>"
    +"La diferencia en años es: "+(años1-años2)+"<br>";
    document.getElementById("resultado").innerHTML=diferencia;
}