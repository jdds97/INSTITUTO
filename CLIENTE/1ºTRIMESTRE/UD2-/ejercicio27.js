let mayores=0,menores=0;
function contarCalificaciones(){
    const nota1=Number(frmNotas.nota1.value);
    const nota2=Number(frmNotas.nota2.value);
    const nota3=Number(frmNotas.nota3.value);
    const nota4=Number(frmNotas.nota4.value);
    const nota5=Number(frmNotas.nota5.value);
    let salida="";
    let mayores=0;
    procesarNotas(nota1);
    procesarNotas(nota2);
    procesarNotas(nota3);
    procesarNotas(nota4);
    procesarNotas(nota5);
    document.getElementById("salida").innerHTML="Mayores de 7 : "+mayores+"     - Menores de 7"+menores;
    mayores=0;
    menores=0;
}
function procesarNotas(nota){
    (nota>=7)?mayores++:menores++;
}