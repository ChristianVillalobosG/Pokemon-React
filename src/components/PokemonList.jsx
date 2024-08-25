import { PokemonCard } from "./PokemonCard";

export function PokemonList({ pokemons }) {
  return (
    <div className="container pt-5">
      <div className="row row-gap-3 gap-5 justify-content-center align-items-center"> 
     
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))} 
        
      </div>
    </div>
  );
}
