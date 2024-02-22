import reactLogo from "./assets/react.svg";
import "./App.css";
import SearchBar from "./Components/SearchBar.jsx";
import Card from "./Components/Card.jsx";
import { useState, useEffect, useRef } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Counter from "./Components/Counter.jsx";
import Favorito from "./Components/Favorito.jsx";
/**
 * Componente principal de la aplicación.
 *
 * @returns {JSX.Element} El componente de la aplicación.
 */
function App() {
  //Hooks para personaje
  const [id, setId] = useState("");
  const [nombre, setNombrePersonaje] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  //Hooks para comics
  const [nombreComic, setNombreComic] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [creadores, setCreadores] = useState("");
  const [imagenComic, setImagenComic] = useState("");
  const [fechaLanzamiento, setFechaLanzamiento] = useState("");
  //Hooks para visibilidad de las cards
  const [cardVisiblePersonaje, setCardVisiblePersonaje] = useState(false);
  const [cardVisibleComic, setCardVisibleComic] = useState(false);
  //Referencia al elemento de la tarjeta.El useRef es un hook que nos permite acceder a un elemento del DOM
  // y manipularlo directamente  (en este caso, para hacer scroll)
  const cardRefPersonaje = useRef(null);
  const cardRefComic = useRef(null);
  const [countBien, setCountBien] = useState(0);
  const [countMal, setCountMal] = useState(0);
  const [favorito, setFavorito] = useState(false);
  const [favoritosData, setFavoritos] = useState([]);
  const [personaje, setPersonaje] = useState(null);
  const [comic, setComic] = useState(null);
  /**
   * Obtiene los datos del personaje y actualiza los estados correspondientes.
   *
   * @param {object} personaje Los datos del personaje.
   */
  function obtenerDatosPersonaje(personajeData) {
    //Si no hay personaje, no hay nombre o no hay imagen, no hace nada
    if (!personajeData || !personajeData.name || !personajeData.thumbnail) {
      return;
    }
    setNombrePersonaje(personajeData.name);
    let imagenUrl =
      personajeData.thumbnail.path + "." + personajeData.thumbnail.extension;
    setImagen(imagenUrl);
    if (personajeData.description) {
      setDescripcion(personajeData.description);
    } else {
      setDescripcion("El personaje no tiene descripcion");
    }
    setId(personajeData.id);
    setCardVisiblePersonaje(true);
    setCardVisibleComic(false);
    setPersonaje(personaje);
    if (favoritosData.includes(personajeData)) {
      setFavorito(true);
    } else {
      setFavorito(false);
    }
  }

  /**
   * Obtiene los datos del cómic y actualiza los estados correspondientes.
   *
   * @param {object} comic Los datos del cómic.
   */
  function obtenerDatosComic(comicData) {
    //Si no hay comic, no hay título, no hay imagen o no hay creadores, no hace nada
    if (
      !comicData ||
      !comicData.title ||
      !comicData.thumbnail ||
      !comicData.creators
    ) {
      return;
    }
    let imagenUrl =
      comicData.thumbnail.path + "." + comicData.thumbnail.extension;
    let creadores = comicData.creators.items.map((creador) => {
      return creador.name;
    });
    setNombreComic(comic.title);
    if (comicData.description === null) {
      setSinopsis("El comic no tiene sinopsis");
    } else {
      setSinopsis(comicData.description);
    }
    setCreadores(creadores);
    setImagenComic(imagenUrl);
    setComic(comic);
    setFechaLanzamiento(comicData.dates[0].date);
    setCardVisibleComic(true);
    setCardVisiblePersonaje(false);
    handleCountBien();

    if (favoritosData.includes(comic)) {
      setFavorito(true);
    } else {
      setFavorito(false);
    }
  }

  function handleCountBien() {
    setCountBien(countBien + 1);
  }
  function handleCountMal() {
    setCountMal(countMal + 1);
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
    setCountBien(0);
    setCountMal(0);
  }
  function handleFavorito() {
    setFavorito(true);
    setFavoritos([favoritosData, ...favoritosData]);
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
      <h1 className="logoMarvel">MARVEL EXPLORER</h1>
      <h2 className="tituloBuscador">BUSCA TUS PERSONAJES/COMICS FAVORITOS</h2>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <SearchBar
        onSearch={handleSearch}
        onReset={handleClear}
        onCountMal={handleCountMal}
        onCountBien={handleCountBien}
      />
      <Counter mensaje="Numero de búsquedas exitosas" count={countBien} />
      <Counter mensaje="Número de búsquedas erróneas" count={countMal} />

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
            nombre={nombre}
            imagen={imagen}
            descripcion={descripcion}
            id={id}
            favorito={favorito}
          />
          <Favorito onFavorito={handleFavorito} />
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
