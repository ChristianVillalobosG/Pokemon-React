import { useState, useEffect } from "react";

export function PokemonCard({ pokemon }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setPokemonData(data);
    };

    fetchPokemonData();
  }, [pokemon]);

  if (!pokemonData)
     return ( 
      <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
  </div>
    )
    
   
  return (
    <div className="col-6 col-md-3 col-lg-2">
      <div className="h-100 p-2" style={{ width: "15rem", height: "80vh" }}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`}
          className="card-img-top"
          alt={pokemonData.name}
        />
        <div className="card-body">
          <h5 className="card-title text-center pt-5">{pokemonData.name}</h5>
        </div>
      </div>
    </div>
  );
}
