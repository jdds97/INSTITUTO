function campos_vacios(event) {
  let inputs = Array.from(documquerySelectorAll("input"));  
  salida.innerHTML = "<ul>Lista de campos vacíos";
  let vacios=inputs.filter((input)=>{"<li>"+(input.value.length==0).name+"<li>"+event.preventDefault();})
  salida.innerHTML+=vacios+"</ul>"
  salida.innerHTML += "<ul>Lista de errores";
  let errores=inputs.filter((input)=>{"<li>"+(!input.checkValidity()).name+"</li>"+event.preventDefault();})
  salida.innerHTML=errores+"</ul>"
}

formulario.addEventListener("submit", campos_vacios);
/*/(^[AÁEÉIÍOÓUÚÑ-Z][aáeéiíoóuúñ-z]+)(\s)\1
/(^[AÁEÉIÍOÓUÚÑ-Z][aáeéiíoóuúñ-z]+)(\s)\1*
/(\d{2}\/\)\1\/\\d{4}$/
/\d{7,8}[A-Z]$/
/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
/^[a-z]{7}\d{3}$/
/^[6789]\d{8}$/
/^@\w{4-15}$/ */