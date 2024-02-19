// import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import "./App.css";
import SearchBar from "./SearchBar.jsx";
import Card from "./Card.jsx";
import { useState, useEffect, useRef } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
function App() {
  //Hooks para personaje
  const [id, setId] = useState("");
  const [nombre, setNombrePersonaje] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  // //Hooks para comics
  const [nombreComic, setNombreComic] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [creadores, setCreadores] = useState("");
  const [imagenComic, setImagenComic] = useState("");
  const [fechaLanzamiento, setFechaLanzamiento] = useState("");
  //Hooks para visibilidad de las cards
  const [cardVisiblePersonaje, setCardVisiblePersonaje] = useState(false);
  const [cardVisibleComic, setCardVisibleComic] = useState(false);
  //Referencia al elemento de la tarjeta
  const cardRefPersonaje = useRef(null);
  const cardRefComic = useRef(null);
  function obtenerDatosPersonaje(personaje) {
    if (!personaje || !personaje.name || !personaje.thumbnail) {
      return;
    }
    setNombrePersonaje(personaje.name);
    let imagenUrl =
      personaje.thumbnail.path + "." + personaje.thumbnail.extension;
    setImagen(imagenUrl);
    if (personaje.description) {
      setDescripcion(personaje.description);
    } else {
      setDescripcion("El personaje no tiene descripcion");
    }
    setId(personaje.id);
    setCardVisiblePersonaje(true);
    setCardVisibleComic(false);
  }

  function obtenerDatosComic(comic) {
    if (!comic || !comic.title || !comic.thumbnail || !comic.creators) {
      return;
    }
    let imagenUrl = comic.thumbnail.path + "." + comic.thumbnail.extension;
    let creadores = comic.creators.items.map((creador) => {
      return creador.name;
    });
    setNombreComic(comic.title);
    if (comic.description === null) {
      setSinopsis("El comic no tiene sinopsis");
    } else {
      setSinopsis(comic.description);
    }
    setCreadores(creadores);
    setImagenComic(imagenUrl);

    setFechaLanzamiento(comic.dates[0].date);
    setCardVisibleComic(true);
    setCardVisiblePersonaje(false);
  }
  function handleSearch(datos) {
    obtenerDatosPersonaje(datos);
    obtenerDatosComic(datos);
  }

  function handleClear() {
    setCardVisiblePersonaje(false);
    setCardVisibleComic(false);
  }
  useEffect(() => {
    if (cardVisiblePersonaje && cardRefPersonaje.current) {
      cardRefPersonaje.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [cardVisiblePersonaje]);

  useEffect(() => {
    if (cardVisibleComic && cardRefComic.current) {
      cardRefComic.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [cardVisibleComic]);
  return (
    <>
      <h1 className="logoMarvel">MARVEL EXPLORER</h1>
      <h2 className="tituloBuscador">BUSCA TUS PERSONAJES/COMICS FAVORITOS</h2>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>

      <SearchBar onSearch={handleSearch} onReset={handleClear} />
      {cardVisiblePersonaje ? (
        <>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="success">
              El personaje con ese nombre existe
            </Alert>
          </Stack>
          <Card
            ref={cardRefPersonaje}
            nombre={nombre}
            imagen={imagen}
            descripcion={descripcion}
            id={id}
          />
        </>
      ) : (
        <></>
      )}
      {cardVisibleComic ? (
        <>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="success">
              El comic con ese nombre existe
            </Alert>
          </Stack>
          <Card
            ref={cardRefComic}
            nombre={nombreComic}
            imagen={imagenComic}
            descripcion={sinopsis}
            creadores={creadores}
            fechaLanzamiento={fechaLanzamiento}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
