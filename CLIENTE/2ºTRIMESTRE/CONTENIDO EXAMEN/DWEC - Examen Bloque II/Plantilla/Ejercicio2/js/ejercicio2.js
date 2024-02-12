document.getElementById("botonRestaurar").addEventListener("click", () => location.reload());
let boton =document.getElementById("botonEjecutar");
boton.addEventListener("click",aplicarSeleccion);
function aplicarSeleccion() {
debugger;
    const origen = document.querySelector("[name='seleccionImagen']:checked").value;
    const lugar = document.querySelector("[name='destinos']:checked").value;
    const clonar = document.querySelector("[name='clonarImagen']").checked;
    const seleccionados = document.querySelector("[name='seleccionImagen']:checked").value;
    const operacion= document.querySelector("[name='aplicarFuncion']:checked").value;
    let nodo;
  
 
      for (let i = 0; i < seleccionados.length; i++) {
      switch(lugar){
        case "capa1":
            switch (operacion){
                case "append":
                    if(clonar=="si"){
                    nodo = seleccionados[i].cloneNode();}

                    else{
                        nodo=seleccionados[i];
                        contenedorDestino.append(nodo);
                    }
                break;
                case"prepend":
                if(clonar=="si"){
                nodo = seleccionados[i].cloneNode();}
                else{
                    nodo=seleccionados[i];
                    contenedorDestino.prepend(nodo);
                }
                break;
                case"before":
                if(clonar=="si"){
                nodo = seleccionados[i].cloneNode();
                }
                else{
                    nodo=seleccionados[i];
                    contenedorDestino.before(nodo);
                }
                break;
                case"after":
                if(clonar=="si"){
                nodo = seleccionados[i].cloneNode();
                }
                else{
                    nodo=seleccionados[i];
                    contenedorDestino.after(nodo);
                }
                break;
                
                default:
                    return
                    break;
                break;
            }
         case "capa2":
            switch (operacion){
                case "append":
                    if(clonar=="si"){
                    nodo = seleccionados[i].cloneNode();}

                    else{
                        nodo=seleccionados[i];
                        contenedorDestino.append(nodo);
                    }
                break;
                case "prepend":
                if(clonar=="si"){
                nodo = seleccionados[i].cloneNode();}
                else{
                    nodo=seleccionados[i];
                    contenedorDestino.prepend(nodo);
                }
                break;
                case "before":
                if(clonar=="si"){
                nodo = seleccionados[i].cloneNode();
                }
                else{
                    nodo=seleccionados[i];
                    contenedorDestino.before(nodo);
                }
                break;
                case "after":
                if(clonar=="si"){
                nodo = seleccionados[i].cloneNode();
                }
                else{
                    nodo=seleccionados[i];
                    contenedorDestino.after(nodo);
                }
                break;
                
                default:
                    return
                    break;
            }
                    break;
            
         case "capa3":
            switch (operacion){
                case "append":
                    if(clonar=="si"){
                        nodo = seleccionados[i].cloneNode();}
        
                    else{
                                nodo=seleccionados[i];
                                contenedorDestino.append(nodo);
                            }
                     break;
                case "prepend":
                        if(clonar=="si"){
                        nodo = seleccionados[i].cloneNode();}
                        else{
                            nodo=seleccionados[i];
                            contenedorDestino.prepend(nodo);
                        }
                        break;
                case "before":
                        if(clonar=="si"){
                        nodo = seleccionados[i].cloneNode();
                        }
                        else{
                            nodo=seleccionados[i];
                            contenedorDestino.before(nodo);
                        }
                        break;
                case "after":
                        if(clonar=="si"){
                        nodo = seleccionados[i].cloneNode();
                        }
                        else{
                            nodo=seleccionados[i];
                            contenedorDestino.after(nodo);
                        }
                        break;
                        
                        default:
                            return
                            break;
                        break;
                    }
            break;
        case "capa4":
                switch (operacion){
                    case "append":
                        if(clonar=="si"){
                        nodo = seleccionados[i].cloneNode();}
    
                        else{
                            nodo=seleccionados[i];
                            contenedorDestino.append(nodo);
                        }
                    break;
                    case"prepend":
                    if(clonar=="si"){
                    nodo = seleccionados[i].cloneNode();}
                    else{
                        nodo=seleccionados[i];
                        contenedorDestino.prepend(nodo);
                    }
                    break;
                    case"before":
                    if(clonar=="si"){
                    nodo = seleccionados[i].cloneNode();
                    }
                    else{
                        nodo=seleccionados[i];
                        contenedorDestino.before(nodo);
                    }
                    break;
                    case"after":
                    if(clonar=="si"){
                    nodo = seleccionados[i].cloneNode();
                    }
                    else{
                        nodo=seleccionados[i];
                        contenedorDestino.after(nodo);
                    }
                    break;
                    
                    default:
                        return;
                }
                    break;
                    default:
                        return;
                    break;
            }

      }
    }
     
 
function quitarSeleccion() {
    let seleccionados = document.querySelectorAll("seleccionImagen");
    for (let i = 0; i < seleccionados.length; i++) {
      seleccionados[i].checked=false;
    }
  }
  