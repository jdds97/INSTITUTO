import { useState } from "react";
import md5 from "md5";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function SearchBar({ onSearch, onReset }) {
  const [input, setInput] = useState("");
  const [termino, setTermino] = useState("characters/name"); // Inicialmente busca por nombre
  const [error, setError] = useState(false);
  const ts = 1; // Genera un timestamp para usar como parte del hash
  const timestamp = "&ts=" + ts; // Genera un timestamp para usar como parte del hash
  const clavePublica = "6c6852c85207adba9e725a4d7e5de26e"; // Reemplaza esto con tu clave pública de Marvel
  const clavePrivada = "ed1eb9958e767573a19ff94480cd0cb8c55b6ea9"; // Reemplaza esto con tu clave privada de Marvel
  const hash = md5(`${ts}${clavePrivada}${clavePublica}`);
  let url = `https://gateway.marvel.com/v1/public/${termino}=${input}${timestamp}&apikey=${clavePublica}&hash=${hash}`;

  async function obtenerPersonaje(event) {
    event.preventDefault();
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo realizar la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        const resultados = data.data.results;
        if (resultados.length === 0 && termino === "name") {
          // Si la búsqueda por nombre no devuelve resultados, cambia a buscar por cómics

          setTermino("comics?title");
          obtenerComic(event, url);
          onSearch(personaje);
        } else {
          const personaje = resultados[0];

          onSearch(personaje);
          setError(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        
        setError(true);
      });
  }
  async function obtenerComic(event) {
    event.preventDefault();

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo realizar la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        const resultados = data.data.results;
        if (resultados.length === 0 && termino === "comics") {
          // Si la búsqueda por nombre no devuelve resultados, cambia a buscar por cómics

          setTermino("name");
          console.log(resultados);
          onSearch(resultados);
        } else {
          const personaje = resultados[0];

          onSearch(personaje);
          setError(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(true);
      });
  }
  function limpiarInfo() {
    setTitulo("");
    onReset(false);
  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <div className="button-container">
          <button
            onClick={[obtenerPersonaje, obtenerComic]}
            className="search-button"
          >
            Buscar
          </button>
          <button onClick={limpiarInfo} className="clear-button">
            Limpiar Info
          </button>
        </div>
      </div>
      {error ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert variant="filled" severity="error">
            El personaje con el nombre no existe
          </Alert>
        </Stack>
      ) : (
        <></>
      )}
    </>
  );
}

export default SearchBar;
