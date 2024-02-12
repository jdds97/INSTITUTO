const comerciales = [
  "Carmen Gómez",
  "Lucía Gil",
  "Andrés Martínez",
  "Antonio Salinas",
];
const clientes = [
  [
    "Alimentación Daniel",
    "Cash El Puerto",
    "Ultramarinos Claudia",
    "Supermercado Nazareno",
    "Alimentación Guzmán",
    "Supermercado Superprecio",
    "Kiosko La Espera",
    "M&B Alimentación",
    "Ultramarinos Vistabella",
  ],
  [
    "Ultramarinos La Delicia",
    "Supermercado La Esquinita",
    "Alimentación Gómez",
    "Supermercado El Veloz",
    "Kiosko 24h Desavío",
    "Tienda La Manchega",
    "Ultramarinos Tajo",
    "Alimentación Víctor",
  ],
  [
    "Alimentación Millán",
    "Supermercado La Guinda",
    "Kiosko Callejón",
    "Tienda Cantero",
    "Ultramarinos Mérida",
    "Alimentación Moreno",
    "Cash El Hostelero",
  ],
  [
    "Kiosko La Lumbre",
    "Tienda Abad",
    "Ultramarinos Hernández",
    "Alimentación Cervantes",
    "Cash El Panal",
    "CyR Alimentación",
    "Supermercado Los Mosqueteros",
    "Alimentación Carpanta",
    "Supermercado El Percebe",
  ],
];
const categorias = ["Aceite", "Encurtidos", "Salsas"];

const catalogo = new Catalogo();
const gestor = new Gestor();
function cargaDatosIniciales() {
  catalogo.addProducto(1, "Aceite Oliva Virgen Extra 1l (Caja 20)", 178.15, 0);
  catalogo.addProducto(
    2,
    "Aceite Oliva Virgen Extra 700ml (Caja 30)",
    208.5,
    0
  );
  catalogo.addProducto(3, "Aceite Oliva Virgen Extra 5l (Caja 6)", 247.5, 0);
  catalogo.addProducto(4, "Aceite Oliva 1l (Caja 20)", 109.25, 0);
  catalogo.addProducto(5, "Aceituna Gordal 340gr (Caja de 50)", 180.75, 1);
  catalogo.addProducto(
    6,
    "Aceituna Gordal deshuesada 350gr (Caja de 50)",
    205.45,
    1
  );
  catalogo.addProducto(7, "Aceituna Manzanilla 250 gr (Caja de 50)", 124.85, 1);
  catalogo.addProducto(
    8,
    "Aceituna Manzanilla deshuesada 250 gr (Caja de 50)",
    141.35,
    1
  );
  catalogo.addProducto(9, "Aceituna Negra 350gr (Caja de 50)", 87.5, 1);
  catalogo.addProducto(
    10,
    "Aceituna Negra deshuesada 350gr (Caja de 50)",
    99.35,
    1
  );
  catalogo.addProducto(11, "Mayonesa 350gr (Caja de 50)", 124.45, 2);
  catalogo.addProducto(12, "Mayonesa 1Kg (Caja de 30)", 178.65, 2);
  catalogo.addProducto(13, "Salsa Cocktail 350gr (Caja de 50)", 99.65, 2);
  catalogo.addProducto(14, "Salsa Gaucha 350gr (Caja de 50)", 124.85, 2);
  catalogo.addProducto(15, "Salsa Alioli 350 gr (Caja de 50)", 113.75, 2);
  catalogo.addProducto(16, "Salsa Barbacoa 500gr (Caja de 30)", 67.5, 2);
}

let frmControles = document.getElementById("frmControles");
// frmControles.categorias.addEventListener("change", limpiarProductos);
// frmControles.categorias.addEventListener("change", cargaProductos);
let categoriasDiv = document.getElementById("categorias");
let botonAceite = document.createElement("button");
botonAceite.innerHTML = "Aceite";
botonAceite.setAttribute("value", "0");
botonAceite.classList.add("boton");
categoriasDiv.append(botonAceite);
let botonEncurtidos = document.createElement("button");
botonEncurtidos.innerHTML = "Encurtidos";
botonEncurtidos.classList.add("boton");
botonEncurtidos.setAttribute("value", "1");
categoriasDiv.append(botonEncurtidos);
let botonSalsas = document.createElement("button");
botonSalsas.innerHTML = "Salsas";
botonSalsas.classList.add("boton");
botonSalsas.setAttribute("value", "2");
categoriasDiv.append(botonSalsas);
categoriasDiv.addEventListener("click",limpiarProductos);
categoriasDiv.addEventListener("click",cargaProductos);
frmControles.productos.addEventListener("change",productoEscogido);
frmControles.productos.addEventListener("change",limpiarProductos);

/**
 * Función que se ejecuta cuando el contenido del documento HTML ha sido cargado.
 * Comprueba si existe un objeto gestor y si tiene comerciales registrados.
 * Si se cumplen las condiciones, establece el valor del primer comercial en el formulario y carga los clientes.
 */
cargaDatosIniciales();
function contentLoaded() {
  debugger;
  document.addEventListener("DOMContentLoaded", () => {
    cargaDatosIniciales();
    let botonAceite=frmControles.querySelector("button")
    let primeraCategoria=categorias[0];
    let productos = catalogo.productos.filter(
      (producto) => producto.idCategoria === parseInt(primeraCategoria)
    );
    productos.forEach((producto) => {
      let option = document.createElement("option");
      option.value = producto.idProducto;
      option.textContent = producto.nombreProducto;
      frmControles.productos.add(option);
      
    });
    }
  );
}

/**
 * Limpia los productos del formulario.
 */
function limpiarProductos() {
  frmControles.productos
    .querySelectorAll("option")
    .forEach((producto) => producto.remove());
}
let idProducto=document.getElementById("idProducto");
idProducto.innerHTML="";
let nombreProducto=document.getElementById("nombreProducto");
nombreProducto.innerHTML="";
let precioProducto=document.getElementById("precioProducto");
precioProducto.innerHTML="";

/**
 * Carga los productos de la categoría seleccionada en el formulario.
 */

function cargaProductos(event) {
 
event.preventDefault();
let categoriaSeleccionada=event.target.value;
  let productos = catalogo.productos.filter(
    (producto) => producto.idCategoria === parseInt(categoriaSeleccionada)
  );
  
  productos.forEach((producto) => {
    let option = document.createElement("option");
    option.value = producto.idProducto;
    option.textContent = producto.nombreProducto;
    frmControles.productos.add(option);
    
  });
 
}
function productoEscogido(event){
  debugger;
let productoEscogido=catalogo.buscarProducto(event.target.value);
let idProducto=document.getElementById("idProducto");
idProducto.innerHTML=productoEscogido.idProducto;
let nombreProducto=document.getElementById("nombreProducto");
nombreProducto.innerHTML=productoEscogido.nombreProducto;
let precioProducto=document.getElementById("precioProducto");
precioProducto.innerHTML=productoEscogido.precioUnidad;

}


contentLoaded();