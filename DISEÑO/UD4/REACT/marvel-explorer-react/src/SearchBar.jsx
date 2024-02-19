import { useState, useEffect } from "react";
import md5 from "md5";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
SearchBar.propTypes = {
  /**
   * Función de búsqueda.
   * @type {Function}
   */
  onSearch: PropTypes.func.isRequired,

  /**
   * Función de reinicio.
   * @type {Function}
   */
  onReset: PropTypes.func.isRequired,
};

/**
 * Componente de barra de búsqueda.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.onSearch - Función de búsqueda.
 * @param {Function} props.onReset - Función de reinicio.
 * @returns {JSX.Element} Elemento JSX que representa la barra de búsqueda.
 */
function SearchBar({ onSearch, onReset }) {
  // Estado del input de búsqueda
  const [input, setInput] = useState("");

  // Estado de error para el cómic y el personaje
  const [errorComic, setErrorComic] = useState(false);
  const [errorPersonaje, setErrorPersonaje] = useState(false);

  // Estado para el término de búsqueda (inicialmente busca por nombre)
  const [termino, setTermino] = useState("");

  // Clave pública y privada para la API de Marvel
  const clavePublica = "6c6852c85207adba9e725a4d7e5de26e";
  const clavePrivada = "ed1eb9958e767573a19ff94480cd0cb8c55b6ea9";

  // Timestamp para la solicitud
  const ts = 1;

  // Hash generado a partir del timestamp y las claves
  const hash = md5(`${ts}${clavePrivada}${clavePublica}`);

  /**
   * Función para realizar la solicitud a la API de Marvel.
   *
   * @param {string} url - URL de la solicitud.
   */
  const fetchData = async (url) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo realizar la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        const resultados = data.data.results;
        if (resultados.length === 0) {
          // Si la búsqueda por nombre no devuelve resultados, cambia a buscar por cómic
          setErrorPersonaje(true);
          buscarComic();
          if (errorComic) setErrorComic(false);
        } else {
          setErrorComic(true);
          const datos = resultados[0];
          onSearch(datos);
          if (errorPersonaje) setErrorPersonaje(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorPersonaje(true);
        setErrorComic(true);
      });
  };

  // Uso de useEffect para observar 'termino' cada vez que cambie
  useEffect(() => {
    if (termino) {
      const url = `https://gateway.marvel.com/v1/public/${termino}${ts}&apikey=${clavePublica}&hash=${hash}`;
      fetchData(url);
    }
  }, [termino]);

  /**
   * Maneja el evento de búsqueda.
   */
  const handleSearch = () => {
    setTermino(`characters?name=${encodeURIComponent(input)}`);
  };

  /**
   * Maneja el evento de limpiar la información.
   */
  const handleClear = () => {
    setInput("");
    onReset(false);
    setErrorComic(false);
    setErrorPersonaje(false);
  };

  /**
   * Busca el cómic correspondiente al input de búsqueda.
   */
  const buscarComic = () => {
    let inputEntero = input;
    let terminoParcial =
      "comics?titleStartsWith=" +
      input.toLowerCase().split(" ").slice(0, 1).join(" ");
    const urlParcial = `https://gateway.marvel.com/v1/public/${terminoParcial}${ts}&apikey=${clavePublica}&hash=${hash}`;
    fetch(urlParcial)
      .then((response) => response.json())
      .then((datos) => {
        // Filtra los resultados para encontrar el cómic que coincide exactamente con el input completo
        let comicExacto = datos.data.results.find(
          (comic) => comic.title.toLowerCase() === inputEntero.toLowerCase()
        );
        if (comicExacto) {
          onSearch(comicExacto);
          setErrorComic(false);
        } else {
          setErrorComic(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorComic(true);
      });
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <div className="button-container">
          <button onClick={handleSearch} className="search-button">
            Buscar
          </button>
          <button onClick={handleClear} className="clear-button">
            Limpiar Info
          </button>
        </div>
      </div>
      {errorComic && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert variant="filled" severity="warning">
            El comic con ese nombre exacto no existe
          </Alert>
        </Stack>
      )}
      {errorPersonaje && (
        <Stack sx={{ width: "100%", marginTop: "20px" }} spacing={2}>
          <Alert variant="filled" severity="warning">
            El personaje con ese nombre no existe
          </Alert>
        </Stack>
      )}
    </>
  );
}

export default SearchBar;
