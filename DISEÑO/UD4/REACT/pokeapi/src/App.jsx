import { Container, Box } from "@mui/material";
import SearchBar from "./Components/SearchBar";
import PokemonInfo from "./Components/PokemonInfo";
import PokemonList from "./Components/PokemonList";
import { useState } from "react";
function App() {
  const [pokemon, setPokemon] = useState(null);
  const [history, setHistory] = useState([]);

  const handleSearch = async (searchTerm) => {
    console.log(searchTerm);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      );
      const data = await response.json();
      const pokemon = {
        name: data.name,
        id: data.id,
        types: data.types.map((type) => type.type.name),
        height: data.height,
        front_default: data.sprites.front_default,
        back_default: data.sprites.back_default,
      };
      setPokemon(pokemon);
      setHistory([pokemon, ...history]);
    } catch (error) {
      console.error(error);
    }
  };

  function handleClearHistory() {
    setHistory([]);
  }

  return (
    <Container>
      <Box my={2}>
        <SearchBar onSearch={handleSearch} />
        {pokemon && <PokemonInfo pokemon={pokemon} />}
        {history.length > 0 && (
          <PokemonList history={history} onClearHistory={handleClearHistory} />
        )}
      </Box>
    </Container>
  );
}

export default App;
