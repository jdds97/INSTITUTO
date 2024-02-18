// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SearchBar from './SearchBar.jsx'
import Card from './Card.jsx'
import { useState } from "react";

function App() {  
  //Hooks para personaje
 const[id,setId]=useState("");
 const [nombre,setNombrePersonaje]=useState("");
 const [imagen,setImagen]=useState("");
 const[descripcion,setDescripcion]=useState("");
 //Hooks para comics
 const [nombreComic,setNombreComic]=useState("");
 const [sinopsis,setSinopsis]=useState("");
 
 const[cardVisiblePersonaje,setcardVisiblePersonaje]=useState(false);
 const[cardVisibleComic,setcardVisibleComic]=useState(false);
 
 
  function obtenerDatosPersonaje(personaje){
    setNombrePersonaje(personaje.name);
    let imagenUrl = personaje.thumbnail.path + '.' + personaje.thumbnail.extension;
    setImagen(imagenUrl);
    if(personaje.description){
      setDescripcion(personaje.description);
    }
    else{
      setDescripcion("El personaje no tiene descripcion");
    }
    setId(personaje.id);
    setCardVisiblePersonaje(true);
    
  }
  function obtenerDatosComic(comic){
    setNombreComic(comic.title);
    setCardVisibleComic(true);

  }
  function limpiarInfo(){
    setCardVisible(false);
  }
    return (
    <>
     
      <h1 className="logoMarvel">MARVEL EXPLORER</h1>
      <h2 className="tituloBuscador">BUSCA TUS PERSONAJES FAVORITOS</h2>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        
      <SearchBar onSearch={[obtenerDatosPersonaje,obtenerComic]} onReset={limpiarInfo}/>
      {cardVisiblePersonaje?<Card nombre={nombre} imagen={imagen} descripcion={descripcion} id={id} />:<></>}
      {cardVisibleComic?<Card nombre={nombreComic} imagen={imagenComic} descripcion={descripcionComic} id={idComic} />:<></>}
    </>
  )
}

export default App
