import { useState, useEffect } from "react";
import { PokemonList } from "./components/PokemonList";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await response.json();
      setPokemons(data.results);
    };

    fetchPokemons();
  }, []);

  return (
    <div>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
