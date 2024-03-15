import reactLogo from "./assets/react.svg";
import "./styles/App.css";
import SearchBar from "./Components/SearchBar.jsx";
import Card from "./Components/Card.jsx";
import { useState, useEffect, useRef } from "react";
import { Alert, Stack, Typography, Link, CardMedia } from "@mui/material";

/**
 * Componente principal de la aplicación.
 *
 * @returns {JSX.Element} El componente de la aplicación.
 */
function App() {
  //Hooks para personaje
  const [personaje, setPersonaje] = useState({
    id: "",
    nombre: "",
    imagen: "",
    descripcion: "",
  });

  const [comic, setComic] = useState({
    nombre: "",
    sinopsis: "",
    creadores: "",
    imagen: "",
    fechaLanzamiento: "",
  });
  //Hooks para visibilidad de las cards
  const [cardVisiblePersonaje, setCardVisiblePersonaje] = useState(false);
  const [cardVisibleComic, setCardVisibleComic] = useState(false);
  //Referencia al elemento de la tarjeta.El useRef es un hook que nos permite acceder a un elemento del DOM
  // y manipularlo directamente  (en este caso, para hacer scroll)
  const cardRefPersonaje = useRef(null);
  const cardRefComic = useRef(null);

  function obtenerDatosPersonaje(personaje) {
    //Si no hay personaje o no tiene nombre o imagen, no hace nada
    if (!personaje || !personaje.name || !personaje.thumbnail) {
      return;
    }
    let imagenUrl =
      personaje.thumbnail.path + "." + personaje.thumbnail.extension;
    let descripcion = personaje.description
      ? personaje.description
      : "El personaje no tiene descripcion";
    //Actualizamos el estado del personaje con los datos obtenidos  de la API
    setPersonaje({
      id: personaje.id,
      nombre: personaje.name,
      imagen: imagenUrl,
      descripcion: descripcion,
    });
    //Actualizamos el estado de la visibilidad de la tarjeta del personaje
    setCardVisiblePersonaje(true);
    //Actualizamos el estado de la visibilidad de la tarjeta del comic
    setCardVisibleComic(false);
  }

  function obtenerDatosComic(comic) {
    //Si no hay comic o no tiene título o imagen, no hace nada
    if (!comic || !comic.title || !comic.thumbnail || !comic.creators) {
      return;
    }
    let imagenUrl = comic.thumbnail.path + "." + comic.thumbnail.extension;
    let creadores = comic.creators.items.map((creador) => creador.name);
    let sinopsis = comic.description
      ? comic.description
      : "El comic no tiene sinopsis";
    //Actualizamos el estado del comic con los datos obtenidos de la API
    setComic({
      nombre: comic.title,
      sinopsis: sinopsis,
      creadores: creadores,
      imagen: imagenUrl,
      fechaLanzamiento: comic.dates[0].date,
    });
    //Actualizamos el estado de la visibilidad de la tarjeta del comic
    setCardVisibleComic(true);
    //Actualizamos el estado de la visibilidad de la tarjeta del personaje
    setCardVisiblePersonaje(false);
  }

  /**
   * Maneja la búsqueda de datos y llama a las funciones correspondientes para obtener y mostrar los resultados.
   *
   * @param {object} datos Los datos de la búsqueda.
   */
  function handleSearch(datos) {
    obtenerDatosPersonaje(datos);
    obtenerDatosComic(datos);
  }

  /**
   * Maneja la limpieza de los resultados y oculta las tarjetas.
   */
  function handleClear() {
    setCardVisiblePersonaje(false);
    setCardVisibleComic(false);
  }

  //Efecto para hacer scroll a la tarjeta del personaje cuando cambia su visibilidad
  useEffect(() => {
    if (cardVisiblePersonaje && cardRefPersonaje.current) {
      cardRefPersonaje.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [cardVisiblePersonaje]);
  //Efecto para hacer scroll a la tarjeta del comic cuando cambia su visibilidad
  useEffect(() => {
    if (cardVisibleComic && cardRefComic.current) {
      cardRefComic.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [cardVisibleComic]);

  return (
    <>
      <Typography variant="h1" className="logoMarvel">
        MARVEL EXPLORER
      </Typography>
      <Typography variant="h2" className="tituloBuscador">
        BUSCA TUS PERSONAJES/COMICS FAVORITOS
      </Typography>
      <Link
        href="https://react.dev"
        target="_blank"
        rel="noopener noreferrer"
        style={{ width: "500px", height: "5500px", margin: "0 auto" }}
      >
        <CardMedia
          component="img"
          src={reactLogo}
          className="logo react"
          alt="React logo"
          style={{ width: "225px", height: "200px" }}
        />
      </Link>
      <SearchBar onSearch={handleSearch} onReset={handleClear} />
      {/*  Si la tarjeta del personaje es visible, muestra la alerta y la tarjeta */}
      {cardVisiblePersonaje ? (
        <>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="success">
              El personaje con ese nombre existe
            </Alert>
          </Stack>
          <Card
            ref={cardRefPersonaje}
            nombre={personaje.nombre}
            imagen={personaje.imagen}
            descripcion={personaje.descripcion}
            id={personaje.id}
          />
        </>
      ) : (
        <></>
      )}
      {/* Si la tarjeta del comic es visible, muestra la alerta y la tarjeta */}
      {cardVisibleComic ? (
        <>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="success">
              El comic con ese nombre existe
            </Alert>
          </Stack>
          <Card
            ref={cardRefComic}
            nombre={comic.nombre}
            imagen={comic.imagen}
            descripcion={comic.sinopsis}
            creadores={comic.creadores}
            fechaLanzamiento={comic.fechaLanzamiento}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
