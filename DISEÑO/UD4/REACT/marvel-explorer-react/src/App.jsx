// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SearchBar from './SearchBar'
// import { Card } from '@mui/material'
function App() {
  // const [personaje, setPersonaje] = useState(null);
  // const [imagen, setImagen] = useState('');
  // const [titulo, setTitulo] = useState('');
  // function tituloPersonaje(titulo) {
  //   const personajeEncontrado = personaje.find((personaje) => personaje.titulo === titulo);
  //   if (personajeEncontrado) {
  //     setPersonaje(personajeEncontrado);
  //     setTitulo(personajeEncontrado.titulo);
  //   } else { 
  //     setPersonaje(null);
  //   }
  // }
  // const [titulo, setTitulo] = useState('');
  // const [imagen, setImagen] = useState('');
  // const buscarPersonaje = async (titulo) => {
  //   const datosPersonaje = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${titulo}&apikey=6c6852c85207adba9e725a4d7e5de26e`);
  //   const data = await response.json();
  //   return data.results[0];
  // }
  // const cambiarTitulo = async (nuevoTitulo) => {
  //   // Aquí debes buscar los datos del personaje basado en el nuevoTitulo
  //   const datosPersonaje = await buscarPersonaje(nuevoTitulo);
  //   setPersonaje(datosPersonaje);
  // };
  
  
 
  // const cambiarImagen = async (nuevaImagen) => {
  //   const datosPersonaje = await fetch('https://gateway.marvel.com/v1/public/character?ts=1&apikey=6c6852c85207adba9e725a4d7e5de26e&hash=c9cc816ada6d0dc3e7ac6b58a167e2e6');
  //   let blob = await response.blob();
  //   nuevaImagen = URL.createObjectURL(blob);
  //   setImagen(nuevaImagen);
  // }

  return (
    <>
      <div>
      <h1 className="logoMarvel">MARVEL EXPLORER</h1>
      <h2 className="tituloBuscador">BUSCA TUS PERSONAJES FAVORITOS</h2>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <SearchBar  />
      {/* <Card titulo={titulo} imagen={imagen} /> */}
    </>
  )
}

export default App
